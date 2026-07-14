import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { AdvisoryPreview } from "@/components/home/AdvisoryPreview";
import { Confidentiality } from "@/components/home/Confidentiality";
import { JurisdictionTeaser } from "@/components/home/JurisdictionTeaser";

// Homepage content model (CONTENT_DOCTRINE.md, benchmark pass): identity and
// thesis (Hero + Positioning) -> capability preview (AdvisoryPreview) ->
// engagement posture (Confidentiality) -> international orientation
// (JurisdictionTeaser). The contact path lives in the global footer; the
// standalone closing contact band was removed sitewide. Selected Exposure
// lives on /firm only.
export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <AdvisoryPreview />
      <Confidentiality />
      <JurisdictionTeaser />
    </>
  );
}
