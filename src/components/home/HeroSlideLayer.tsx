import Image from "next/image";
import type { HeroSlide } from "@/content/hero";
import { HERO_TRANSITION_MS } from "@/content/hero";

type HeroSlideLayerProps = {
  slide: HeroSlide;
  isActive: boolean;
  /** True only during the crossfade window, for the slide being replaced. */
  isOutgoing: boolean;
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
 * metric/label/supporting line.
 *
 * Crossfade model: a TRUE dissolve, not a double-fade. The outgoing slide
 * holds opacity 1 underneath (zIndex 1) while the incoming slide fades
 * 0 -> 1 on top (zIndex 2) — so the frame never dips through a darker
 * mid-blend the way simultaneous out-fade + in-fade does, and there is no
 * flash and no hard cut. Once the incoming layer is fully opaque, the
 * outgoing layer is released (covered, so the release is invisible). The
 * lower-third metric block rides the same crossfade with a slight delayed
 * rise, so text and video move as one choreographed transition instead of
 * two competing ones.
 */
export function HeroSlideLayer({
  slide,
  isActive,
  isOutgoing,
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
  // Only render the poster <Image> when a real poster path exists — a null
  // poster (no frame generated yet) must never reach next/image, or it logs
  // an "invalid image ... received null" error and requests a missing file.
  // With no poster, the Tier-3 navy fallback panel shows instead.
  const poster = slide.video.poster;
  const showPoster = !showVideo && !posterFailed && Boolean(poster);
  const visible = isActive || isOutgoing;

  return (
    <div
      aria-hidden={!isActive}
      className="absolute inset-0"
      style={{
        opacity: visible ? 1 : 0,
        zIndex,
        // Only the INCOMING layer animates; the outgoing layer holds still
        // beneath it and non-participating layers snap (invisibly, they're
        // covered by the fully-opaque active layer).
        transition:
          reducedMotion || !isActive
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

      {/* Tier 2 — poster image (only when a real poster path exists) */}
      {showPoster && poster && (
        <Image
          src={poster}
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

      {/* This slide's coordinated metric/label/supporting line — lower-third.
          Rides the crossfade on the SAME duration and easing as the video
          dissolve (HERO_TRANSITION_MS / PREMIUM_EASE) and starts at the same
          instant — no offset — so text and footage resolve as one motion,
          with a subtle synchronized rise. The outgoing slide's text stays put
          and is covered along with its video (no flicker, no double-motion). */}
      <div
        className="absolute inset-x-0 bottom-0 px-[var(--space-md)] pb-[var(--space-2xl)] sm:px-[var(--space-lg)] sm:pb-[var(--space-3xl)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition:
            reducedMotion || !isActive
              ? "none"
              : `opacity ${HERO_TRANSITION_MS}ms ${PREMIUM_EASE}, transform ${HERO_TRANSITION_MS}ms ${PREMIUM_EASE}`,
        }}
      >
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
