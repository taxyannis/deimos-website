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
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const currentIndexRef = useRef(0);

  const [paused, setPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [videoFailed, setVideoFailed] = useState<Set<string>>(new Set());
  const [posterFailed, setPosterFailed] = useState<Set<string>>(new Set());

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
  const allowVideo = viewportAllowsVideo && !reducedMotion;

  const goTo = useCallback((index: number) => {
    if (index === currentIndexRef.current) return;
    setOutgoingIndex(currentIndexRef.current);
    currentIndexRef.current = index;
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (outgoingIndex === null) return;
    const t = setTimeout(() => setOutgoingIndex(null), HERO_TRANSITION_MS + 60);
    return () => clearTimeout(t);
  }, [currentIndex, outgoingIndex]);

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

  return (
    <section
      className="relative isolate min-h-dvh w-full overflow-hidden bg-deep-navy"
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
            // Only the currently visible clip and the clip completing its
            // dissolve are mounted. Posters cover every other slide, so the
            // hero no longer downloads the next MP4 while it is invisible.
            mountVideo={isActive || isOutgoing}
            allowVideo={allowVideo}
            videoFailed={videoFailed.has(slide.id)}
            posterFailed={posterFailed.has(slide.id)}
            reducedMotion={reducedMotion}
            onVideoError={() => handleVideoError(slide.id)}
            onPosterError={() => handlePosterError(slide.id)}
          />
        );
      })}

      {/* On narrow screens the primary copy is tall enough that the old
          viewport-relative bottom padding let it enter the absolutely
          positioned slide-caption zone. Reserve that zone explicitly on
          mobile; desktop keeps the original fluid spacing. */}
      <div className="relative z-10 flex min-h-dvh flex-col justify-center px-[var(--space-md)] pt-[clamp(6rem,14vh,9rem)] pb-[18rem] sm:px-[var(--space-lg)] sm:pb-[clamp(10rem,22vh,16rem)]">
        <div className="mx-auto max-w-7xl [animation:rise-in_800ms_cubic-bezier(0.25,1,0.5,1)_both]">
          <h1 className="text-on-dark max-w-[18ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] font-serif 2xl:max-w-[24ch]">
            {HERO_HEADLINE}
          </h1>
          <p className="text-on-dark mt-[var(--space-md)] max-w-[60ch] text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] opacity-90">
            {HERO_SUBLINE}
          </p>
          <p className="text-on-dark mt-[var(--space-sm)] max-w-[60ch] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] tracking-[0.01em] opacity-70">
            {HERO_THESIS}
          </p>
          <div className="mt-[var(--space-lg)] flex flex-wrap gap-[var(--space-sm)]">
            {HERO_CTAS.map((cta, index) => (
              <CTALink
                key={cta.href}
                href={cta.href}
                variant={index === 1 ? "primary" : "secondary"}
                tone="on-dark"
              >
                {cta.label}
              </CTALink>
            ))}
          </div>
        </div>
      </div>

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
