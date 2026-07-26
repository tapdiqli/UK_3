import Image from "next/image";
import { initials } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  name: string;
  color: string;
  accent: string;
  logo?: string;
  size?: "sm" | "md" | "lg" | "card";
  className?: string;
}

const sizeMap = {
  sm: "h-10 w-10 text-sm rounded-xl",
  md: "h-14 w-14 text-lg rounded-2xl",
  lg: "h-20 w-20 text-2xl rounded-2xl",
  // BrandCard: mobile 170×80, desktop 180×90
  card: "h-[80px] w-[170px] rounded-xl md:h-[90px] md:w-[180px]",
};

const padMap = {
  sm: "p-1.5",
  md: "p-2",
  lg: "p-2.5",
  card: "p-2 md:p-2.5",
};

/**
 * Brand logo. Prefers a real image from /public/brands when provided;
 * falls back to a monogram from the brand palette.
 * No CSS filters — logos render in their original colours.
 */
export function BrandLogo({
  name,
  color,
  accent,
  logo,
  size = "md",
  className,
}: BrandLogoProps) {
  if (logo) {
    const isCard = size === "card";
    return (
      <span
        className={cn(
          "relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden",
          // Card logos render on a transparent background (no fill / ring)
          !isCard && "bg-white/5 ring-1 ring-inset ring-white/10",
          sizeMap[size],
          padMap[size],
          className,
        )}
      >
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className={cn("object-contain filter-none", isCard ? "p-0" : "p-1.5")}
          sizes={isCard ? "(max-width: 768px) 170px, 180px" : "80px"}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex flex-shrink-0 items-center justify-center font-display font-bold text-white shadow-inner",
        sizeMap[size],
        className,
      )}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${accent} 100%)`,
        boxShadow: `0 8px 24px -10px ${color}`,
      }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/25"
        aria-hidden="true"
      />
      {initials(name)}
    </span>
  );
}
