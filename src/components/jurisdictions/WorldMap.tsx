/*
 * Stylized inline SVG world-map silhouette — hand-authored, simplified
 * continental outlines defined as (longitude, latitude) rings and projected
 * with the same equirectangular projection the jurisdiction nodes use, so
 * every node lands on (or beside, for small islands) the correct landmass
 * without any external geo dataset. No topojson/world-atlas package exists
 * in this project, and the imagery policy rules out embedding third-party
 * raster maps — this deliberately low-poly silhouette is the v1 answer:
 * it clearly reads as a world map while staying an abstraction, which
 * supports the "coverage, not offices" legal posture (a precise political
 * map would invite country-border scrutiny a coverage view doesn't need).
 * Geometry is coarse by design; the on-page caption says so.
 */

export const MAP_W = 1000;
export const MAP_H = 375;

const LON_MIN = -170;
const LON_MAX = 180;
const LAT_MAX = 75;
const SCALE = MAP_W / (LON_MAX - LON_MIN);

export function project(lon: number, lat: number): [number, number] {
  return [(lon - LON_MIN) * SCALE, (LAT_MAX - lat) * SCALE];
}

type Ring = ReadonlyArray<readonly [number, number]>;

// Each ring is one landmass outline, vertices in (lon, lat).
const LANDMASSES: Ring[] = [
  // North & Central America
  [
    [-168, 66], [-165, 60], [-157, 57], [-152, 60], [-145, 60], [-135, 58],
    [-130, 54], [-125, 49], [-124, 43], [-122, 38], [-117, 33], [-112, 28],
    [-109, 23], [-105, 20], [-100, 17], [-96, 15], [-92, 14], [-88, 13],
    [-85, 11], [-82, 8.5], [-79.5, 8.8], [-81.5, 11], [-85, 13], [-88, 16],
    [-90, 21], [-94, 18.5], [-97, 22], [-97.5, 27], [-91, 29.5], [-84, 30],
    [-81, 25.5], [-79.5, 27], [-76, 35], [-74, 40], [-70, 42], [-66, 44.5],
    [-60, 46], [-56, 51], [-60, 55], [-64, 60], [-70, 61], [-78, 58],
    [-82, 62], [-86, 66], [-96, 69], [-110, 68.5], [-125, 70], [-140, 70],
    [-156, 71],
  ],
  // Greenland
  [
    [-52, 60], [-56, 66], [-58, 72], [-52, 78], [-40, 81], [-28, 78],
    [-22, 72], [-30, 66], [-42, 60],
  ],
  // South America
  [
    [-77.5, 7.5], [-72, 11.5], [-64, 10.5], [-60, 8.5], [-52, 4.5],
    [-48, -1], [-42, -3], [-35, -7], [-37, -12], [-40, -20], [-46, -24],
    [-51, -30], [-57, -35], [-62, -40], [-66, -47], [-69, -52], [-72, -54],
    [-74, -49], [-72, -42], [-71, -33], [-70, -22], [-73, -16], [-78, -8],
    [-81, -4], [-80, 1],
  ],
  // Africa
  [
    [-6, 35.5], [3, 37], [11, 37], [20, 32.5], [27, 31.5], [33, 31.5],
    [35, 28], [37, 21], [40, 15], [43, 11.5], [48, 11.5], [51, 11.5],
    [47, 4], [42, -1], [40, -8], [37, -15], [35, -22], [32, -27],
    [26, -34.5], [19, -34.8], [16, -29], [12, -19], [13, -9], [9, -1],
    [9.5, 4], [3, 6.2], [-4, 5.2], [-8, 4.5], [-13, 9], [-17, 14.5],
    [-17, 21], [-11, 27],
  ],
  // Madagascar
  [[44, -12], [49, -13], [50.5, -17], [47, -25], [44, -21], [43.5, -16]],
  // Eurasia (Europe + Asia + Arabia + India as one ring)
  [
    [-9, 43], [-2, 46.5], [-1.5, 49.5], [3, 51.5], [7.5, 54], [8.5, 57],
    [10.5, 59], [7, 58], [5.5, 62], [12, 65.5], [16, 69], [25, 71],
    [35, 68.5], [45, 68], [55, 69], [68, 70], [80, 73], [95, 76],
    [113, 75], [130, 72.5], [145, 73], [160, 71], [170, 70], [179, 68],
    [178, 65], [170, 61], [161, 60], [162, 56], [158, 52], [156, 52.5],
    [157, 58], [152, 60], [147, 56], [142, 53], [138, 47], [135, 43.5],
    [131, 42.7], [128, 40], [126, 35], [124.5, 38], [122, 37], [120, 34],
    [121.5, 30], [120, 26], [116.5, 23], [113.5, 22], [110, 20.5],
    [106, 21], [108, 18.5], [109.5, 14], [107, 10.5], [104.8, 8.8],
    [102, 13], [100, 13.5], [100.8, 9], [103.3, 1.4], [100.5, 4.5],
    [98.5, 9], [95, 15.5], [92, 17], [91, 22.5], [88, 21.7], [84, 17.5],
    [80, 13], [77.3, 8.1], [73, 15.5], [71.5, 20.5], [68, 23], [66, 25.2],
    [61.5, 25], [57, 26.8], [52.5, 28.2], [48.5, 29.8], [50.5, 26],
    [53.5, 24.5], [56.5, 26.5], [58.8, 22.8], [57, 19.5], [53, 16.8],
    [49, 14.2], [45, 12.8], [43.2, 12.5], [39, 20.5], [35, 28.2],
    [34.2, 31.2], [36, 36], [31, 36.2], [27.5, 36.8], [26, 38.3],
    [23.8, 36.5], [21.3, 37.2], [20, 39.5], [18.5, 42.3], [15.5, 44],
    [13.6, 45.6], [13, 43.5], [15.5, 41.8], [18.3, 40.3], [16.5, 38.8],
    [15.8, 38], [13.5, 41.3], [11, 42.5], [9.5, 44.2], [7, 43.6],
    [3.5, 42.3], [0.3, 39.4], [-2, 36.7], [-5.5, 36.1], [-9, 37],
  ],
  // Great Britain
  [
    [-5.5, 50], [-4, 53.5], [-6, 56], [-4.5, 58.5], [-1.5, 57.5],
    [0.5, 52.8], [1.5, 51.3], [-3, 50.3],
  ],
  // Ireland
  [[-10, 51.8], [-10, 55.2], [-6, 55.2], [-6.2, 52.2]],
  // Iceland
  [[-22, 63.8], [-19, 66.2], [-14.5, 65.2], [-16, 63.5], [-20, 63.4]],
  // Japan
  [
    [130, 31], [132, 33.5], [136, 34.8], [140, 35.5], [141, 39.5],
    [143, 43.5], [144.5, 44.5], [141.5, 43], [137, 36.5], [132.5, 33],
    [130.5, 31.8],
  ],
  // Sri Lanka
  [[79.8, 8.8], [81.5, 7.5], [81, 6.2], [79.9, 6.9]],
  // Sumatra
  [[95.5, 5.3], [99, 2.5], [104, -3], [106, -5.9], [103.5, -5], [98.5, 0.5], [95.3, 3]],
  // Java
  [[105.5, -6.2], [110, -6.9], [114.5, -7.7], [113.5, -8.6], [107.5, -7.6]],
  // Borneo
  [[109.5, 1.5], [113, 4.5], [117.5, 3.5], [119, 0.5], [116.5, -3.5], [111, -3.2], [109, 0]],
  // Sulawesi
  [[119.8, 0.5], [122.5, -0.8], [121.5, -4], [119.5, -2.5]],
  // Philippines
  [
    [120, 18.5], [122.2, 16], [124, 13], [125.5, 9], [126.2, 7],
    [123.5, 9.5], [121, 13.5], [119.8, 16],
  ],
  // New Guinea
  [[131, -1.2], [136, -2.2], [141, -3], [147, -6], [150.5, -9.5], [145, -8], [138, -7.2], [133, -4]],
  // Australia
  [
    [113.5, -22], [114.5, -34], [118, -35.2], [124, -33], [131, -31.8],
    [136, -34.8], [140, -38], [146.5, -38.8], [150, -37], [153.5, -30.5],
    [153, -26], [149, -20], [145.5, -15], [142.5, -10.8], [137, -12.2],
    [132, -11.2], [127, -14], [122, -17],
  ],
  // New Zealand
  [
    [166.8, -45.8], [170, -43.5], [172.8, -40.7], [175.3, -37.5],
    [176.5, -38], [174, -41.5], [171, -44.5], [168, -46.7],
  ],
  // Cuba
  [[-84.5, 22.2], [-80, 22.8], [-74.5, 20.3], [-77.5, 19.9], [-82.5, 22]],
  // Hispaniola
  [[-74.3, 19.9], [-70.5, 19.9], [-68.5, 18.4], [-71.5, 17.9], [-74, 18.3]],
  // Cyprus
  [[32.3, 35.2], [34.6, 35.6], [33.9, 34.6], [32.5, 34.7]],
];

// Islands too small to draw as rings but that carry a jurisdiction node —
// rendered as faint dots so their nodes don't float in open sea.
const ISLAND_DOTS: ReadonlyArray<readonly [number, number]> = [
  [-81.4, 19.3], // Cayman Islands
  [-61.8, 17.1], // Antigua and Barbuda
  [-61.2, 13.2], // Saint Vincent and the Grenadines
];

const WORLD_PATHS: string[] = LANDMASSES.map(
  (ring) =>
    "M" +
    ring
      .map(([lon, lat]) => {
        const [x, y] = project(lon, lat);
        return `${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join("L") +
    "Z",
);

/**
 * The silhouette layer only — consumers wrap it in their own <svg
 * viewBox={`0 0 ${MAP_W} ${MAP_H}`}> so the interactive coverage map and
 * the homepage teaser can each control size, labels and overlays.
 */
export function WorldMapPaths() {
  return (
    <g strokeLinejoin="round">
      {WORLD_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="var(--color-steel-blue)"
          fillOpacity="0.09"
          stroke="var(--color-steel-blue)"
          strokeOpacity="0.28"
          strokeWidth="0.7"
        />
      ))}
      {ISLAND_DOTS.map(([lon, lat], i) => {
        const [x, y] = project(lon, lat);
        return (
          <circle
            key={`island-${i}`}
            cx={x}
            cy={y}
            r="2"
            fill="var(--color-steel-blue)"
            fillOpacity="0.22"
          />
        );
      })}
    </g>
  );
}

// Approximate capital-city coordinates (lon, lat) for every jurisdiction in
// JURISDICTION_GROUPS — keys must match those names exactly. Gulf entries
// carry sub-degree nudges so adjacent nodes (Qatar/UAE) don't fully overlap
// at rendered size; the caption declares the map illustrative.
export const JURISDICTION_COORDS: Record<string, [number, number]> = {
  // Europe
  Greece: [23.7, 38.0],
  Estonia: [24.7, 59.4],
  Lithuania: [25.3, 54.7],
  France: [2.35, 48.85],
  Spain: [-3.7, 40.4],
  Portugal: [-9.14, 38.7],
  "United Kingdom": [-0.13, 51.5],
  Switzerland: [7.45, 46.95],
  Cyprus: [33.4, 35.2],
  Georgia: [44.8, 41.7],
  // Africa
  Uganda: [32.6, 0.3],
  Kenya: [36.8, -1.3],
  Namibia: [17.1, -22.6],
  Ghana: [-0.2, 5.6],
  "Democratic Republic of the Congo": [15.3, -4.3],
  Malawi: [33.8, -14.0],
  Morocco: [-6.8, 34.0],
  "South Africa": [28.2, -25.7],
  Rwanda: [30.1, -1.95],
  // Middle East / Central Asia
  "Saudi Arabia": [46.7, 24.7],
  "United Arab Emirates": [54.6, 24.2],
  Qatar: [51.3, 25.6],
  Kazakhstan: [71.4, 51.2],
  Uzbekistan: [69.2, 41.3],
  Oman: [58.6, 23.6],
  // Asia-Pacific
  Cambodia: [104.9, 11.6],
  China: [116.4, 39.9],
  Philippines: [121.0, 14.6],
  Indonesia: [106.8, -6.2],
  India: [77.2, 28.6],
  "Hong Kong SAR": [114.2, 22.3],
  Singapore: [103.85, 1.35],
  Australia: [149.1, -35.3],
  Malaysia: [101.7, 3.1],
  // Americas
  "United States": [-77.0, 38.9],
  Canada: [-75.7, 45.4],
  Mexico: [-99.1, 19.4],
  Nicaragua: [-86.3, 12.1],
  Panama: [-79.5, 9.0],
  Chile: [-70.7, -33.4],
  "Dominican Republic": [-69.9, 18.5],
  "Antigua and Barbuda": [-61.8, 17.1],
  Argentina: [-58.4, -34.6],
  Brazil: [-47.9, -15.8],
  Peru: [-77.0, -12.0],
  Colombia: [-74.1, 4.7],
  Ecuador: [-78.5, -0.2],
  Paraguay: [-57.6, -25.3],
  // International Structuring
  "Cayman Islands": [-81.4, 19.3],
  "Saint Vincent and the Grenadines": [-61.2, 13.2],
};
