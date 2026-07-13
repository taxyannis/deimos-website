import { Libre_Caslon_Display, Libre_Franklin } from "next/font/google";

/**
 * Display serif — headline / section-opening statements only.
 * Libre Caslon Display: an old-style book/document serif cut for larger display
 * sizes. It carries the editorial, advisory-led voice of the firm: every
 * headline, subpage title, and section-opening statement is set in Caslon.
 * See FONT_RATIONALE.md for why this was chosen over the reflex fonts it was
 * checked against.
 */
export const displaySerif = Libre_Caslon_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-display-serif",
  display: "swap",
});

/**
 * Body / UI sans — everything functional: body copy, navigation, eyebrow
 * labels, metrics, small print and interactive controls.
 *
 * Libre Franklin is a Franklin-Gothic revival: a restrained American
 * grotesque with institutional, editorial pedigree (the classic newsroom
 * pairing for Caslon). It gives the site the crisp, quiet UI voice of a
 * modern advisory bank — Evercore / PJT / Rothschild read this way — while
 * the serif keeps the gravitas. Numerals are used for the metric rail, so a
 * face with even, legible figures matters.
 *
 * Two families total (Caslon + Franklin), which is the whole system: serif
 * for what is *said*, sans for what is *operated*.
 */
export const bodySans = Libre_Franklin({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body-sans",
  display: "swap",
});
