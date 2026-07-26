import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  /** Visual size preset */
  size?: "sm" | "md" | "lg";
  /** Show wordmark text beside the mark (default true) */
  showWordmark?: boolean;
}

const sizeMap = {
  sm: { wrap: "h-8", mark: 32, text: "text-sm" },
  md: { wrap: "h-9", mark: 36, text: "text-sm sm:text-base" },
  lg: { wrap: "h-11", mark: 44, text: "text-base sm:text-lg" },
} as const;

/**
 * Full brand logo — slot-machine mark + BestBritCasinoList wordmark.
 * Inline SVG so it stays sharp at any size with no image filter.
 */
export function SiteLogo({ className, size = "md", showWordmark = true }: SiteLogoProps) {
  const s = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={s.mark}
        height={s.mark}
        className={cn("flex-shrink-0", s.wrap)}
        aria-hidden={!showWordmark}
        role={showWordmark ? "presentation" : "img"}
      >
        <title>BestBritCasinoList</title>
        <rect width="48" height="48" rx="12" fill="#C1121F" />
        <rect x="9" y="8" width="30" height="32" rx="5" fill="#121212" />
        <rect x="20" y="5" width="8" height="4" rx="1.5" fill="#FFFFFF" />
        <rect x="13" y="14" width="22" height="16" rx="2.5" fill="#0b0b0b" />
        <rect x="15" y="16" width="5.5" height="12" rx="1" fill="#242424" />
        <rect x="21.25" y="16" width="5.5" height="12" rx="1" fill="#242424" />
        <rect x="27.5" y="16" width="5.5" height="12" rx="1" fill="#242424" />
        <text
          x="17.75"
          y="25.5"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="8"
          fontWeight="700"
          fill="#C1121F"
        >
          7
        </text>
        <text
          x="24"
          y="25.5"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="8"
          fontWeight="700"
          fill="#FFFFFF"
        >
          7
        </text>
        <text
          x="30.25"
          y="25.5"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="8"
          fontWeight="700"
          fill="#C1121F"
        >
          7
        </text>
        <line
          x1="13"
          y1="22"
          x2="35"
          y2="22"
          stroke="#C1121F"
          strokeWidth="0.75"
          strokeOpacity="0.7"
        />
        <rect x="17" y="33" width="14" height="3" rx="1.5" fill="#C1121F" />
        <circle cx="42" cy="18" r="2.2" fill="#FFFFFF" />
        <rect x="40.9" y="18" width="2.2" height="10" rx="1" fill="#E23140" />
        <circle cx="42" cy="29" r="1.6" fill="#FFFFFF" />
      </svg>

      {showWordmark && (
        <span
          className={cn(
            "font-semibold leading-none tracking-tight text-white",
            s.text,
          )}
        >
          BestBrit<span className="text-ruby-light">CasinoList</span>
        </span>
      )}
    </span>
  );
}
