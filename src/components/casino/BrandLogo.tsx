import { cn } from "@/lib/utils";

interface BrandLogoProps {
  name: string;
  /** Stable per-brand seed (e.g. rank) that picks the jewel-tone variant. */
  seed?: number;
  size?: "sm" | "md" | "lg" | "card";
  className?: string;
}

const sizeMap = {
  sm: "h-10 w-10 rounded-xl",
  md: "h-14 w-14 rounded-2xl",
  lg: "h-20 w-20 rounded-2xl",
  // BrandCard: mobile 170×80, desktop 180×90
  card: "h-[80px] w-[170px] rounded-xl md:h-[90px] md:w-[180px]",
};

export interface DecoPalette {
  /** Jewel tone unique to the brand */
  jewel: string;
  jewelSoft: string;
  /** Gilded line-work shared across the system */
  gold: string;
  letter: string;
}

/**
 * Gilded Art-Deco jewel palettes. Line-work stays champagne gold so the
 * system reads as one family; each brand gets its own jewel tone.
 */
const PALETTES: DecoPalette[] = [
  { jewel: "#C1121F", jewelSoft: "#E4485A", gold: "#D9B45B", letter: "#F6ECD4" }, // ruby
  { jewel: "#0F7A5A", jewelSoft: "#2FA37E", gold: "#D9B45B", letter: "#F6ECD4" }, // emerald
  { jewel: "#2456A6", jewelSoft: "#4F7FD1", gold: "#D9B45B", letter: "#F6ECD4" }, // sapphire
  { jewel: "#7A3AA8", jewelSoft: "#A46BD1", gold: "#D9B45B", letter: "#F6ECD4" }, // amethyst
];

export function decoPalette(seed: number): DecoPalette {
  return PALETTES[Math.abs(Math.trunc(seed)) % PALETTES.length];
}

const SERIF = "Georgia, 'Times New Roman', serif";
const INK_0 = "#1B1823";
const INK_1 = "#100E15";

function diamond(x: number, y: number, r: number): string {
  return `M${x} ${y - r} L${x + r} ${y} L${x} ${y + r} L${x - r} ${y} Z`;
}

/** Fan of gilded rays radiating from a point, deco-sunrise style. */
function Rays({
  cx,
  cy,
  length,
  count,
  color,
}: {
  cx: number;
  cy: number;
  length: number;
  count: number;
  color: string;
}) {
  const rays = Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * (i + 0.5)) / count;
    return {
      x: cx + length * Math.cos(angle),
      y: cy - length * Math.sin(angle),
    };
  });
  return (
    <g stroke={color} strokeWidth="0.8" opacity="0.3">
      {rays.map((r, i) => (
        <line key={i} x1={cx} y1={cy} x2={r.x} y2={r.y} />
      ))}
    </g>
  );
}

function Monogram({
  mono,
  p,
  cx,
  cy,
}: {
  mono: string;
  p: DecoPalette;
  cx: number;
  cy: number;
}) {
  const fontSize = mono.length > 1 ? 30 : 40;
  return (
    <g
      fontFamily={SERIF}
      fontWeight="700"
      fontSize={fontSize}
      textAnchor="middle"
      letterSpacing="1"
    >
      <text x={cx + 1.6} y={cy + 1.6} dominantBaseline="central" fill={p.jewel}>
        {mono}
      </text>
      <text
        x={cx}
        y={cy}
        dominantBaseline="central"
        fill={p.letter}
        stroke={p.gold}
        strokeWidth="0.35"
      >
        {mono}
      </text>
    </g>
  );
}

function DecoSquare({ mono, p }: { mono: string; p: DecoPalette }) {
  return (
    <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bcl-deco-ink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK_0} />
          <stop offset="100%" stopColor={INK_1} />
        </linearGradient>
      </defs>
      <rect width="96" height="96" fill="url(#bcl-deco-ink)" />
      <Rays cx={48} cy={82} length={78} count={13} color={p.gold} />
      {/* double frame */}
      <rect x="4" y="4" width="88" height="88" fill="none" stroke={p.gold} strokeWidth="1.2" />
      <rect x="8.5" y="8.5" width="79" height="79" fill="none" stroke={p.jewel} strokeWidth="0.7" />
      {/* corner diamonds */}
      {(
        [
          [8.5, 8.5],
          [87.5, 8.5],
          [8.5, 87.5],
          [87.5, 87.5],
        ] as const
      ).map(([x, y], i) => (
        <path key={i} d={diamond(x, y, 2.6)} fill={p.gold} />
      ))}
      {/* halo rings */}
      <circle cx="48" cy="47" r="25" fill="none" stroke={p.jewelSoft} strokeWidth="0.7" opacity="0.75" />
      <circle
        cx="48"
        cy="47"
        r="29.5"
        fill="none"
        stroke={p.gold}
        strokeWidth="0.7"
        strokeDasharray="1.5 3"
      />
      <Monogram mono={mono} p={p} cx={48} cy={47} />
      {/* crown + base ornaments */}
      <path d={diamond(48, 13.5, 2.4)} fill={p.jewel} />
      <g stroke={p.gold} strokeWidth="0.8">
        <line x1="34" y1="82" x2="43" y2="82" />
        <line x1="53" y1="82" x2="62" y2="82" />
      </g>
      <path d={diamond(48, 82, 2.2)} fill={p.gold} />
    </svg>
  );
}

function DecoWide({ mono, p }: { mono: string; p: DecoPalette }) {
  return (
    <svg viewBox="0 0 180 90" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bcl-deco-ink-w" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK_0} />
          <stop offset="100%" stopColor={INK_1} />
        </linearGradient>
      </defs>
      <rect width="180" height="90" fill="url(#bcl-deco-ink-w)" />
      <Rays cx={90} cy={88} length={95} count={17} color={p.gold} />
      {/* double frame */}
      <rect x="4" y="4" width="172" height="82" fill="none" stroke={p.gold} strokeWidth="1.2" />
      <rect x="8.5" y="8.5" width="163" height="73" fill="none" stroke={p.jewel} strokeWidth="0.7" />
      {(
        [
          [8.5, 8.5],
          [171.5, 8.5],
          [8.5, 81.5],
          [171.5, 81.5],
        ] as const
      ).map(([x, y], i) => (
        <path key={i} d={diamond(x, y, 2.6)} fill={p.gold} />
      ))}
      {/* halo rings */}
      <circle cx="90" cy="45" r="24" fill="none" stroke={p.jewelSoft} strokeWidth="0.7" opacity="0.75" />
      <circle
        cx="90"
        cy="45"
        r="28.5"
        fill="none"
        stroke={p.gold}
        strokeWidth="0.7"
        strokeDasharray="1.5 3"
      />
      <Monogram mono={mono} p={p} cx={90} cy={45} />
      {/* flanking rules with diamond finials */}
      <g stroke={p.gold} strokeWidth="0.9">
        <line x1="20" y1="45" x2="54" y2="45" />
        <line x1="126" y1="45" x2="160" y2="45" />
        <line x1="24" y1="49" x2="50" y2="49" opacity="0.5" />
        <line x1="130" y1="49" x2="156" y2="49" opacity="0.5" />
      </g>
      <path d={diamond(20, 45, 2.4)} fill={p.jewel} />
      <path d={diamond(160, 45, 2.4)} fill={p.jewel} />
      <path d={diamond(90, 13.5, 2.2)} fill={p.jewel} />
    </svg>
  );
}

/**
 * Brand mark — gilded Art-Deco monogram plaque. Sunburst rays, double
 * gold frames and jewel-tone accents on the site's ink background.
 * Purely generated; no image assets.
 */
export function BrandLogo({ name, seed = 0, size = "md", className }: BrandLogoProps) {
  const p = decoPalette(seed);
  // Single-letter mark, always the first letter of the brand name.
  const mono = (name.trim()[0] ?? "?").toUpperCase();
  return (
    <span
      className={cn(
        "relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden shadow-lg ring-1 ring-inset ring-white/10",
        sizeMap[size],
        className,
      )}
      aria-hidden="true"
    >
      {size === "card" ? <DecoWide mono={mono} p={p} /> : <DecoSquare mono={mono} p={p} />}
    </span>
  );
}
