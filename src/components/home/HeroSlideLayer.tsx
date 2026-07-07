import Image from "next/image";
import type { HeroSlide } from "@/content/hero";
import { HERO_TRANSITION_MS } from "@/content/hero";

type HeroSlideLayerProps = {
  slide: HeroSlide;
  isActive: boolean;
  /** Explicit stacking order during a crossfade: current > outgoing > rest. */
  zIndex: number;
  mountVideo: boolean;
  allowVideo: boolean;
  videoFailed: boolean;
  posterFailed: boolean;
  reducedMotion: boolean;
  onVideoError: () => void;
  onPosterError: () => void;
};

// Ease-out-quart-ish — a controlled, decelerating curve. No bounce, no
// linear/generic "ease-out" keyword, which reads as slightly mechanical
// at this duration.
const PREMIUM_EASE = "cubic-bezier(0.25, 1, 0.5, 1)";

/**
 * One slide's full stacked background: navy fallback panel (always present,
 * bottom layer) -> poster image (if eligible and not failed) -> video (if
 * eligible, mounted, and not failed) -> dark overlay -> this slide's own
 * metric/label/supporting line. Opacity-crossfades in/out via `isActive`;
 * the layering itself never needs to know which tier "won" — a failed
 * video/poster simply isn't rendered, and whatever sits beneath shows
 * through instead. See HERO_COMPONENT_BLUEPRINT.md §5.
 */
export function HeroSlideLayer({
  slide,
  isActive,
  zIndex,
  mountVideo,
  allowVideo,
  videoFailed,
  posterFailed,
  reducedMotion,
  onVideoError,
  onPosterError,
}: HeroSlideLayerProps) {
  const showVideo = allowVideo && mountVideo && !videoFailed;
  const showPoster = !showVideo && !posterFailed;

  return (
    <div
      aria-hidden={!isActive}
      className="absolute inset-0"
      style={{
        opacity: isActive ? 1 : 0,
        zIndex,
        transition: reducedMotion
          ? "none"
          : `opacity ${HERO_TRANSITION_MS}ms ${PREMIUM_EASE}`,
      }}
    >
      {/* Tier 3 — navy-led cinematic fallback panel. Always present as the
          base layer; a designed state, not an error state. */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink-blue via-deep-navy to-deep-navy"
        aria-hidden="true"
      />

      {/* Tier 2 — poster image */}
      {showPoster && (
        <Image
          src={slide.video.poster}
          alt={slide.video.alt}
          fill
          priority={isActive}
          sizes="100vw"
          className="object-cover"
          onError={onPosterError}
        />
      )}

      {/* Tier 1 — real video */}
      {showVideo && (
        <video
          key={slide.id}
          className="absolute inset-0 h-full w-full object-cover"
          src={slide.video.src}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={onVideoError}
        />
      )}

      {/* Dark overlay — verified strong enough to hold legibility even
          against worst-case bright footage; see globals.css .hero-overlay. */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* This slide's coordinated metric/label/supporting line — lower-third */}
      <div className="absolute inset-x-0 bottom-0 px-[var(--space-md)] pb-[var(--space-2xl)] sm:px-[var(--space-lg)] sm:pb-[var(--space-3xl)]">
        <div className="mx-auto max-w-7xl">
          {slide.metricRegister === "numeric" ? (
            <p className="text-on-dark text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] font-serif">
              {slide.metric}
            </p>
          ) : (
            <p className="text-on-dark text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-serif">
              {slide.metric}
            </p>
          )}
          <p className="text-muted-on-dark mt-[var(--space-2xs)] max-w-none text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
            {slide.label}
          </p>
          <p className="text-on-dark mt-[var(--space-xs)] max-w-[46ch] text-[length:var(--text-body)] opacity-90">
            {slide.supportingLine}
          </p>
        </div>
      </div>
    </div>
  );
}
