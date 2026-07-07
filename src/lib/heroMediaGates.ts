// External-state subscriptions for the hero's video gating, via
// useSyncExternalStore rather than useState+useEffect — matchMedia and
// navigator.connection are external systems React doesn't own, and
// synchronously calling setState inside an effect body to mirror them
// triggers an avoidable extra render (flagged by react-hooks/set-state-in-effect).

type NetworkInformationLike = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
};

function getConnection(): NetworkInformationLike | undefined {
  return (navigator as Navigator & { connection?: NetworkInformationLike })
    .connection;
}

export function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

export function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Mobile/constrained-bandwidth gate only — does not factor in reduced
 * motion. Combine with the reduced-motion snapshot at the call site:
 * `allowVideo = viewportAllowsVideo && !reducedMotion`.
 */
export function subscribeViewportAllowsVideo(callback: () => void) {
  const mq = window.matchMedia("(max-width: 640px)");
  mq.addEventListener("change", callback);
  const connection = getConnection();
  connection?.addEventListener?.("change", callback);
  return () => {
    mq.removeEventListener("change", callback);
    connection?.removeEventListener?.("change", callback);
  };
}

export function getViewportAllowsVideoSnapshot() {
  const isNarrow = window.matchMedia("(max-width: 640px)").matches;
  const connection = getConnection();
  const slowNetwork = Boolean(
    connection?.saveData ||
      (connection?.effectiveType &&
        ["slow-2g", "2g"].includes(connection.effectiveType)),
  );
  return !isNarrow && !slowNetwork;
}

export function getViewportAllowsVideoServerSnapshot() {
  return false;
}
