"use client";

import { useMemo, useState } from "react";
import { JURISDICTION_GROUPS } from "@/content/jurisdictions";
import {
  JURISDICTION_COORDS,
  MAP_H,
  MAP_W,
  WorldMapPaths,
  project,
} from "@/components/jurisdictions/WorldMap";

export const ALL = "all";

export type SelectedJurisdiction = { name: string; region: string };

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

type Node = {
  id: string;
  name: string;
  region: string;
  regionId: string;
  x: number; // projected user-space coordinates (same system as the land paths)
  y: number;
};

// Every jurisdiction as a node projected into the SAME coordinate system as
// the land silhouette, sorted left-to-right so keyboard tab order sweeps the
// map the way a sighted user reads it. Because markers live inside the SVG
// (not as CSS-positioned overlays), the visible dot and its hit target share
// one projected (x, y) by construction — no two-coordinate-system drift.
const NODES: Node[] = JURISDICTION_GROUPS.flatMap((group) =>
  group.jurisdictions.map((name) => {
    const [lon, lat] = JURISDICTION_COORDS[name];
    const [x, y] = project(lon, lat);
    return { id: slugify(name), name, region: group.region, regionId: group.id, x, y };
  }),
).sort((a, b) => a.x - b.x);

// Marker geometry in user units (viewBox is MAP_W x MAP_H).
const DOT_R = 2.6;
const HIT_R = 7; // invisible hit target, concentric with the dot
const HALO_R = 6; // selected-state halo

type View = { scale: number; tx: number; ty: number };
const WORLD_VIEW: View = { scale: 1, tx: 0, ty: 0 };
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// Center a focus point (user units) in the viewBox at a given scale, clamped
// so the scaled content still fills the frame (no empty background).
function focusView(fx: number, fy: number, scale: number): View {
  return {
    scale,
    tx: clamp(MAP_W / 2 - fx * scale, MAP_W * (1 - scale), 0),
    ty: clamp(MAP_H / 2 - fy * scale, MAP_H * (1 - scale), 0),
  };
}

// Precomputed per-region focus (centroid + a scale that fits the cluster).
const REGION_VIEWS: Record<string, View> = Object.fromEntries(
  JURISDICTION_GROUPS.map((group) => {
    const pts = NODES.filter((n) => n.regionId === group.id);
    const xs = pts.map((p) => p.x);
    const ys = pts.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const fit = Math.min(
      MAP_W / (maxX - minX + 0.28 * MAP_W),
      MAP_H / (maxY - minY + 0.28 * MAP_H),
    );
    return [group.id, focusView(cx, cy, clamp(fit, 1.2, 3))];
  }),
);

/**
 * The map canvas — one SVG, one projection, one coordinate system for the
 * land outline AND the markers AND their hit targets. Interactive when
 * `onSelect` is provided (the /coverage instrument); a static, non-clickable
 * miniature otherwise (the homepage teaser). No graticule, grid, equator or
 * meridian guides are ever drawn — only subdued land geometry and markers.
 */
export function CoverageMapCanvas({
  activeRegion = ALL,
  selectedName = null,
  onSelect,
  className,
}: {
  activeRegion?: string;
  selectedName?: string | null;
  onSelect?: (jurisdiction: SelectedJurisdiction) => void;
  className?: string;
}) {
  const interactive = Boolean(onSelect);

  // Name of the node under the pointer or keyboard focus — drives the visible
  // hover/focus label. Interactive maps only.
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  // Zoom/pan (interactive only): selected node > active region > world. The
  // whole map <g> transforms as one, so land and markers stay locked
  // together. Collapsed to instant by the sitewide reduced-motion reset.
  const view: View = useMemo(() => {
    if (!interactive) return WORLD_VIEW;
    if (selectedName) {
      const node = NODES.find((n) => n.name === selectedName);
      if (node) return focusView(node.x, node.y, 2.2);
    }
    if (activeRegion !== ALL && REGION_VIEWS[activeRegion]) return REGION_VIEWS[activeRegion];
    return WORLD_VIEW;
  }, [interactive, selectedName, activeRegion]);

  return (
    <svg
      viewBox={`0 0 ${MAP_W} ${MAP_H}`}
      className={className}
      role={interactive ? "group" : "img"}
      aria-label={
        interactive
          ? "Interactive map of Deimos's selected market coverage"
          : "World map marking Deimos's selected market coverage"
      }
    >
      <g
        style={{
          transform: `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`,
          transformBox: "view-box",
          transformOrigin: "0 0",
          transition: "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        <WorldMapPaths />

        {NODES.map((node) => {
          if (!interactive) {
            return (
              <circle
                key={node.id}
                cx={node.x}
                cy={node.y}
                r={DOT_R + 0.4}
                fill="var(--color-steel-blue)"
                fillOpacity="0.8"
              />
            );
          }

          const dimmed = activeRegion !== ALL && node.regionId !== activeRegion;
          const isSelected = node.name === selectedName;
          return (
            <g key={node.id} transform={`translate(${node.x} ${node.y})`}>
              <g
                role="button"
                aria-label={`${node.name} — ${node.region}`}
                aria-pressed={isSelected}
                tabIndex={dimmed ? -1 : 0}
                onClick={() => onSelect?.({ name: node.name, region: node.region })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect?.({ name: node.name, region: node.region });
                  }
                }}
                onMouseEnter={() => setHoveredName(node.name)}
                onMouseLeave={() =>
                  setHoveredName((cur) => (cur === node.name ? null : cur))
                }
                onFocus={() => setHoveredName(node.name)}
                onBlur={() =>
                  setHoveredName((cur) => (cur === node.name ? null : cur))
                }
                className={`group outline-none ${
                  dimmed ? "pointer-events-none opacity-20" : "cursor-pointer opacity-100"
                }`}
              >
                {/* Native tooltip fallback; the accessible name is the aria-label. */}
                <title>{node.name}</title>
                {/* Invisible hit target, concentric with the dot (same center). */}
                <circle r={HIT_R} fill="transparent" />
                {isSelected && (
                  <circle r={HALO_R} className="pointer-events-none fill-steel-blue/25" />
                )}
                <circle
                  r={DOT_R}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  className={`pointer-events-none transition-transform duration-200 ease-out ${
                    isSelected
                      ? "scale-150 fill-steel-blue"
                      : "fill-steel-blue/70 group-hover:scale-150 group-hover:fill-steel-blue group-focus-visible:scale-150 group-focus-visible:fill-steel-blue"
                  }`}
                />
                {/* Keyboard focus indicator (SVG outline is unreliable). */}
                <circle
                  r={HIT_R}
                  fill="none"
                  strokeWidth={1}
                  className="pointer-events-none stroke-steel-blue opacity-0 transition-opacity group-focus-visible:opacity-100"
                />
              </g>
            </g>
          );
        })}
      </g>

      {/* Visible hover/focus name label. Rendered OUTSIDE the zoom <g> so it
          keeps a constant size at any zoom level, but positioned with the same
          projected coordinate the marker uses (node x/y mapped through the
          current view) — so the label always sits on the marker under the
          pointer or keyboard focus. Non-interactive; purely a readout. */}
      {interactive &&
        hoveredName &&
        (() => {
          const n = NODES.find((node) => node.name === hoveredName);
          if (!n) return null;
          const sx = n.x * view.scale + view.tx;
          const sy = n.y * view.scale + view.ty;
          const w = hoveredName.length * 5.6 + 14;
          const h = 17;
          const cx = clamp(sx, w / 2 + 2, MAP_W - w / 2 - 2);
          // Prefer sitting above the marker; flip below near the top edge.
          const above = sy - 16 - h / 2 > 0;
          const cy = above ? sy - 16 : sy + 16;
          return (
            <g pointerEvents="none" aria-hidden="true">
              <rect
                x={cx - w / 2}
                y={cy - h / 2}
                width={w}
                height={h}
                rx={3}
                fill="var(--color-ink-blue)"
                stroke="var(--color-steel-blue)"
                strokeOpacity="0.4"
                strokeWidth="0.5"
              />
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="11"
                fill="var(--color-off-white)"
              >
                {hoveredName}
              </text>
            </g>
          );
        })()}
    </svg>
  );
}
