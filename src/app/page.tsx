import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { AdvisoryPreview } from "@/components/home/AdvisoryPreview";
import { Confidentiality } from "@/components/home/Confidentiality";
import { JurisdictionTeaser } from "@/components/home/JurisdictionTeaser";
import { Contact } from "@/components/home/Contact";

// Full approved homepage section order (HOMEPAGE_BLUEPRINT.md §2).
// Seven Disciplines, Selected Situations, Sector Coverage, and Insights are
// deliberately not homepage sections — see HOMEPAGE_BLUEPRINT.md §9-§11,
// §22. /experience was removed from v1 entirely (its anonymized exposure
// themes now live on /firm's Exposure & Experience section) — the
// homepage no longer has a standalone Experience section, and
// JurisdictionTeaser links through to the now-built, premium /jurisdictions
// page rather than a static teaser-only destination.
export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <AdvisoryPreview />
      <Confidentiality />
      <JurisdictionTeaser />
      <Contact />
    </>
  );
}
