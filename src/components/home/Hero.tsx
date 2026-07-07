"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CTALink } from "@/components/ui/CTALink";
import {
  HERO_CTAS,
  HERO_HEADLINE,
  HERO_SLIDES,
  HERO_SLIDE_DURATION_MS,
  HERO_SUBLINE,
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
  const [transitioningFrom, setTransitioningFrom] = useState<number | null>(
    null,
  );
  const prevIndexRef = useRef(0);

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

  // Track the outgoing slide only for the duration of the crossfade, so at
  // most three videos are ever mounted at once (current, pre-loading next,
  // briefly-outgoing previous), never all five.
  useEffect(() => {
    const from = prevIndexRef.current;
    prevIndexRef.current = currentIndex;
    if (from === currentIndex) return;

    setTransitioningFrom(from);
    const t = setTimeout(
      () => setTransitioningFrom(null),
      HERO_TRANSITION_MS + 50,
    );
    return () => clearTimeout(t);
  }, [currentIndex]);

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
  useEffect(() => {
    if (paused || hoverPaused) return;
    const t = setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_DURATION_MS);
    return () => clearTimeout(t);
  }, [currentIndex, paused, hoverPaused]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

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
        const isOutgoing = index === transitioningFrom;
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
              index === transitioningFrom
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

      <div className="relative z-10 flex min-h-dvh flex-col justify-center px-[var(--space-md)] pb-[clamp(10rem,22vh,16rem)] sm:px-[var(--space-lg)]">
        {/* One quiet rise on first paint (rise-in, globals.css) — mount-time
            only, never scroll-gated, collapsed under reduced motion. */}
        <div className="mx-auto max-w-7xl [animation:rise-in_800ms_cubic-bezier(0.25,1,0.5,1)_both]">
          <h1 className="text-on-dark max-w-[18ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] font-serif">
            {HERO_HEADLINE}
          </h1>
          <p className="text-on-dark mt-[var(--space-md)] max-w-[60ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
            {HERO_SUBLINE}
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
