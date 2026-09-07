import Image from "next/image";
import type { HeroSlide } from "@/content/hero";
import { HERO_TRANSITION_MS } from "@/content/hero";

type HeroSlideLayerProps = {
  slide: HeroSlide;
  isActive: boolean;
  isOutgoing: boolean;
  zIndex: number;
  mountVideo: boolean;
  allowVideo: boolean;
  videoFailed: boolean;
  posterFailed: boolean;
  reducedMotion: boolean;
  onVideoError: () => void;
  onPosterError: () => void;
};

const PREMIUM_EASE = "cubic-bezier(0.25, 1, 0.5, 1)";

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
  const poster = slide.video.poster;
  const showPoster = !posterFailed && Boolean(poster);
  const visible = isActive || isOutgoing;

  return (
    <div
      aria-hidden={!isActive}
      className="absolute inset-0"
      style={{
        opacity: visible ? 1 : 0,
        zIndex,
        transition:
          reducedMotion || !isActive
            ? "none"
            : `opacity ${HERO_TRANSITION_MS}ms ${PREMIUM_EASE}`,
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink-blue via-deep-navy to-deep-navy"
        aria-hidden="true"
      />

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

      {showVideo && (
        <video
          key={slide.id}
          className="absolute inset-0 h-full w-full object-cover"
          src={slide.video.src}
          poster={poster ?? undefined}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={onVideoError}
        />
      )}

      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

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
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-on-dark text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] font-serif">
            {slide.metric}
          </p>
          <p className="text-muted-on-dark mt-[var(--space-2xs)] max-w-none text-[length:var(--text-label)] tracking-[var(--text-label--letter-spacing)]">
            {slide.label}
          </p>
          <p className="text-on-dark mx-auto mt-[var(--space-xs)] max-w-[46ch] text-[length:var(--text-body)] opacity-90">
            {slide.supportingLine}
          </p>
        </div>
      </div>
    </div>
  );
}
