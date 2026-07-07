import type { Metadata } from "next";
import { displaySerif, bodySans } from "@/lib/fonts";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const TITLE = "Deimos Group | Independent Advisory for Complex Private-Market Transactions";
const DESCRIPTION =
  "Deimos Group advises on complex private-market transactions across capital formation, transaction structuring, M&A, joint ventures, special situations, real assets, infrastructure and cross-border private capital.";

// No `images` field on openGraph/twitter below — no real Deimos brand asset
// exists yet (FINAL_MISSING_TASKS.md §12/§19, tracked as external action
// required). Omitting it entirely gives a clean text-only share preview on
// every platform; a fabricated placeholder image would be worse than none.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Deimos Group",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
