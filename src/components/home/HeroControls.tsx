import type { HeroSlide } from "@/content/hero";

type HeroControlsProps = {
  slides: HeroSlide[];
  currentIndex: number;
  paused: boolean;
  onSelect: (index: number) => void;
  onTogglePause: () => void;
};

/**
 * Slim progress marks doubling as manual navigation, plus an explicit
 * pause/play control. WCAG 2.2.2 requires a way to pause content that
 * auto-updates past five seconds — hover/focus-pausing (handled by the
 * parent) is a supplement, not a substitute for this button.
 */
export function HeroControls({
  slides,
  currentIndex,
  paused,
  onSelect,
  onTogglePause,
}: HeroControlsProps) {
  return (
    <div className="absolute right-[var(--space-md)] bottom-[var(--space-md)] z-10 flex items-center gap-[var(--space-sm)] sm:right-[var(--space-lg)] sm:bottom-[var(--space-lg)]">
      <button
        type="button"
        onClick={onTogglePause}
        className="flex h-6 w-6 items-center justify-center text-ink-on-dark/80 transition-colors hover:text-ink-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue"
        aria-label={paused ? "Resume slide rotation" : "Pause slide rotation"}
      >
        {paused ? (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 1L11 6L2 11V1Z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <rect x="2" y="1" width="3" height="10" fill="currentColor" />
            <rect x="7" y="1" width="3" height="10" fill="currentColor" />
          </svg>
        )}
      </button>

      <ol className="flex items-center gap-[var(--space-xs)]" aria-label="Hero slides">
        {slides.map((slide, index) => {
          const isCurrent = index === currentIndex;
          return (
            <li key={slide.id}>
              {/* The visible mark stays a slim 3px bar by design — the
                  button itself is padded out to a >=24px hit area (WCAG 2.2
                  SC 2.5.8) so it isn't just the 3px line a user has to hit. */}
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-current={isCurrent ? "true" : undefined}
                aria-label={`Show slide ${index + 1}: ${slide.label}`}
                className="flex min-h-[24px] w-6 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel-blue"
              >
                <span
                  aria-hidden="true"
                  className="block h-[3px] w-6 rounded-full transition-colors"
                  style={{
                    backgroundColor: isCurrent
                      ? "var(--color-ink-on-dark)"
                      : "color-mix(in oklab, var(--color-ink-on-dark) 35%, transparent)",
                  }}
                />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
