import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { AdvisoryPreview } from "@/components/home/AdvisoryPreview";
import { Confidentiality } from "@/components/home/Confidentiality";
import { JurisdictionTeaser } from "@/components/home/JurisdictionTeaser";
import { Contact } from "@/components/home/Contact";

// Homepage content model (CONTENT_DOCTRINE.md, benchmark pass): identity and
// thesis (Hero + Positioning) -> capability preview (AdvisoryPreview) ->
// engagement posture (Confidentiality) -> international orientation
// (JurisdictionTeaser) -> contact path. Selected Exposure lives on /firm only.
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
