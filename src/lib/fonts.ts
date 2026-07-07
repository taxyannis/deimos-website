import { Libre_Caslon_Display, Public_Sans } from "next/font/google";

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
 * Body sans — everything functional: body copy, navigation, labels, metrics, UI.
 * Public Sans: the USWDS-originated grotesque built for institutional/public-trust communication.
 */
export const bodySans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body-sans",
  display: "swap",
});
