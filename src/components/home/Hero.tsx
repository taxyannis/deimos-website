"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CTALink } from "@/components/ui/CTALink";
import {
  HERO_CTAS,
  HERO_HEADLINE,
  HERO_SLIDES,
  HERO_SLIDE_DURATION_MS,
  HERO_SUBLINE,
  HERO_THESIS,
  HERO_TRANSITION_MS,
} from "@/content/hero";
import {
  getReducedMotionServerSnapshot,
  getReducedMotionSnapshot,
  getViewportAllowsVideoServerSnapshot,
  getViewportAllowsVideoSnapshot,
  subscribeReducedMotion,
  subscribeViewportAllowsVideo,
} from "@/lib/heroMediaGates";
import { HeroSlideLayer } from "./HeroSlideLayer";
import { HeroControls } from "./HeroControls";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // The slide being replaced during the crossfade, or null when settled.
  // Crucially it is set in the SAME batched state update that promotes the
  // incoming slide (see goTo), so there is never an intermediate render where
  // the departing slide is neither active nor outgoing. That 1-frame gap —
  // caused by the old code deriving the outgoing slide in a useEffect one
  // commit late — is what made the previous video snap to opacity 0 and flash
  // (through to the bare navy background) at the start of every transition.
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const currentIndexRef = useRef(0);

  const [paused, setPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);

  const [videoFailed, setVideoFailed] = useState<Set<string>>(new Set());
  const [posterFailed, setPosterFailed] = useState<Set<string>>(new Set());

  // External browser state (matchMedia / navigator.connection), read via
  // useSyncExternalStore rather than mirrored into useState+useEffect.
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const viewportAllowsVideo = useSyncExternalStore(
    subscribeViewportAllowsVideo,
    getViewportAllowsVideoSnapshot,
    getViewportAllowsVideoServerSnapshot,
  );
  // Mobile/constrained-bandwidth gate combined with reduced motion: prefer
  // the fallback panel over video rather than a second, lighter video encode
  // (HERO_COMPONENT_BLUEPRINT.md §6).
  const allowVideo = viewportAllowsVideo && !reducedMotion;

  // Advance to a slide, marking the departing slide as outgoing in the same
  // batched update that promotes the incoming one — so the crossfade layering
  // is always internally consistent within a single render. No-op if we're
  // already on that slide (a self-transition would needlessly blank it).
  const goTo = useCallback((index: number) => {
    if (index === currentIndexRef.current) return;
    setOutgoingIndex(currentIndexRef.current);
    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  // Release the outgoing layer only once the crossfade has fully finished. By
  // then the incoming layer is fully opaque and covers it, so clearing it (an
  // instant snap to opacity 0) is invisible. At most two layers — current and
  // outgoing — ever participate in a transition; a small tail beyond
  // HERO_TRANSITION_MS absorbs timer/paint jitter so the incoming layer is
  // guaranteed opaque before the outgoing one is dropped.
  useEffect(() => {
    if (outgoingIndex === null) return;
    const t = setTimeout(() => setOutgoingIndex(null), HERO_TRANSITION_MS + 60);
    return () => clearTimeout(t);
  }, [currentIndex, outgoingIndex]);

  // Delay the next slide's preload until shortly before its turn
  // (HERO_COMPONENT_BLUEPRINT.md §11), rather than the instant the current
  // slide becomes active. These clips are large (tens of MB each); mounting
  // "next" immediately meant two full videos downloading concurrently for
  // almost the entire slide duration. This doesn't reduce how much data is
  // eventually fetched, but it cuts the concurrent-download window from
  // ~7s to ~2.5s per slide, which is what actually matters for a visitor
  // on a slower connection. Does not touch crossfade timing or easing.
  const [preloadNext, setPreloadNext] = useState(false);
  useEffect(() => {
    if (paused || hoverPaused) return;
    const preloadDelay = Math.max(HERO_SLIDE_DURATION_MS - 2500, 0);
    const t = setTimeout(() => setPreloadNext(true), preloadDelay);
    // Cleanup undoes what this effect armed, whenever the slide changes
    // (or on unmount) — not a second copy of the same setState call, the
    // one place resetting actually belongs.
    return () => {
      clearTimeout(t);
      setPreloadNext(false);
    };
  }, [currentIndex, paused, hoverPaused]);

  // Auto-advance. Every slide gets a fresh full duration whenever it becomes
  // current, and whenever pause state changes (so resuming doesn't jump early).
  // Routed through goTo so the outgoing index is set atomically with current.
  useEffect(() => {
    if (paused || hoverPaused) return;
    const t = setTimeout(() => {
      goTo((currentIndexRef.current + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_DURATION_MS);
    return () => clearTimeout(t);
  }, [currentIndex, paused, hoverPaused, goTo]);

  const togglePause = useCallback(() => setPaused((p) => !p), []);

  const handleVideoError = useCallback((slideId: string) => {
    setVideoFailed((prev) => new Set(prev).add(slideId));
  }, []);

  const handlePosterError = useCallback((slideId: string) => {
    setPosterFailed((prev) => new Set(prev).add(slideId));
  }, []);

  const nextIndex = (currentIndex + 1) % HERO_SLIDES.length;

  return (
    <section
      className="relative isolate min-h-dvh w-full overflow-hidden bg-deep-navy"
      // Keyboard-focus-within pause only — a user tabbing into a link/control
      // is a deliberate action. Whole-section mouse-hover pause was removed:
      // it fired the instant a cursor rested anywhere on this full-viewport
      // section, which is where a real user's mouse sits by default while
      // reading, permanently blocking auto-advance in practice. Hover-pause
      // is scoped narrowly to the controls themselves below instead.
      onFocus={() => setHoverPaused(true)}
      onBlur={() => setHoverPaused(false)}
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        const isOutgoing =
          index === outgoingIndex && outgoingIndex !== currentIndex;
        return (
          <HeroSlideLayer
            key={slide.id}
            slide={slide}
            isActive={isActive}
            isOutgoing={isOutgoing}
            zIndex={isActive ? 2 : isOutgoing ? 1 : 0}
            // Current slide plays; the next slide starts pre-loading/playing
            // silently beneath it (opacity 0) only once preloadNext flips
            // true, ~2.5s before its turn — so it's already a live frame,
            // not a black/loading frame, by the time the crossfade reveals
            // it, without downloading two full videos for the whole slide
            // duration. The outgoing slide keeps playing only for the
            // transition window, then unmounts.
            mountVideo={
              index === currentIndex ||
              (index === nextIndex && preloadNext) ||
              index === outgoingIndex
            }
            allowVideo={allowVideo}
            videoFailed={videoFailed.has(slide.id)}
            posterFailed={posterFailed.has(slide.id)}
            reducedMotion={reducedMotion}
            onVideoError={() => handleVideoError(slide.id)}
            onPosterError={() => handlePosterError(slide.id)}
          />
        );
      })}

      {/* pt floor reserves clearance below the fixed nav wordmark so the
          (now longer) headline never rides up under it on shorter viewports;
          justify-center still centres the block on tall screens. */}
      <div className="relative z-10 flex min-h-dvh flex-col justify-center px-[var(--space-md)] pt-[clamp(6rem,14vh,9rem)] pb-[clamp(10rem,22vh,16rem)] sm:px-[var(--space-lg)]">
        {/* One quiet rise on first paint (rise-in, globals.css) — mount-time
            only, never scroll-gated, collapsed under reduced motion. */}
        <div className="mx-auto max-w-7xl [animation:rise-in_800ms_cubic-bezier(0.25,1,0.5,1)_both]">
          {/* 18ch keeps a tight, deliberate column on mobile/tablet/laptop;
              at 2xl (ultra-wide) the measure opens to 24ch so the long
              headline resolves in fewer lines and reads calmer instead of
              stacking into a narrow tower. Still well inside the max-w-7xl
              wrapper (no full-bleed), and fewer lines only increases the
              clearance below the fixed wordmark. */}
          <h1 className="text-on-dark max-w-[18ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] font-serif 2xl:max-w-[24ch]">
            {HERO_HEADLINE}
          </h1>
          <p className="text-on-dark mt-[var(--space-md)] max-w-[60ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
            {HERO_SUBLINE}
          </p>
          {/* Thesis line — the firm's discipline frame, set apart from the
              subline as a quieter, tracked-out register so it reads as a
              standing principle rather than continuation of the prose. */}
          <p className="text-on-dark mt-[var(--space-sm)] max-w-[60ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] tracking-[0.01em] opacity-70">
            {HERO_THESIS}
          </p>
          <div className="mt-[var(--space-lg)] flex flex-wrap gap-[var(--space-sm)]">
            {HERO_CTAS.map((cta, index) => (
              // First CTA (advisory) stays secondary/outline; the second
              // (contact) gets the filled primary treatment — the hero is
              // the first place a visitor sees the site's "one clear path
              // to contact" hierarchy, not just the last.
              <CTALink key={cta.href} href={cta.href} variant={index === 1 ? "primary" : "secondary"} tone="on-dark">
                {cta.label}
              </CTALink>
            ))}
          </div>
        </div>
      </div>

      {/* Hover-pause scoped to the controls themselves, not the whole
          viewport — resting a cursor here to interact with the controls is
          a deliberate action; resting it anywhere on the hero is not. */}
      <div
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => setHoverPaused(false)}
      >
        <HeroControls
          slides={HERO_SLIDES}
          currentIndex={currentIndex}
          paused={paused}
          onSelect={goTo}
          onTogglePause={togglePause}
        />
      </div>
    </section>
  );
}
