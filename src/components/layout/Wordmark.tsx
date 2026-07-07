import { SITE_NAME } from "@/content/site";

// The one brand wordmark treatment, shared by header and footer so the two
// can't drift: serif masthead type (the footer's established treatment),
// natural casing, no tracking — scaled per placement via className. A brand
// masthead is display-role typography, so serif here is consistent with the
// One-Serif Rule, unlike the old header's uppercase tracked sans label
// (which read as one more piece of UI chrome, not the firm's name).
export function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`font-serif leading-none ${className}`}>{SITE_NAME}</span>;
}
