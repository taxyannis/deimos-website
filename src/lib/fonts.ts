import { Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";

/**
 * Display serif — headline / section-opening statements only (DESIGN.md's One-Serif Rule).
 * Libre Caslon Display: an old-style book/document serif cut for larger display sizes.
 * See FONT_RATIONALE.md for why this was chosen over the reflex fonts it was checked against.
 */
export const displaySerif = Libre_Caslon_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-display-serif",
  display: "swap",
});

/**
 * Body serif — everything functional: body copy, navigation, labels, metrics, UI.
 * Libre Caslon Text: the text-optimized cut of the same Caslon family as the
 * display serif above, so the whole site reads as one Caslon voice — the
 * display cut carries the headings, the text cut stays legible at body sizes.
 * Ships 400/700 (regular + bold) only — no 500, so avoid `font-medium`; body
 * hierarchy is carried by size and opacity, not an unavailable mid weight.
 */
export const bodySerif = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body-serif",
  display: "swap",
});
