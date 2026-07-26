import { StarIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface RatingProps {
  /** Star value (e.g. 5, 4.5, 4) */
  value: number;
  /** Optional numeric score out of 10 (desktop) */
  score?: number;
  max?: number;
  showValue?: boolean;
  /** desktop = score + stars, mobile = stars (score optional via class) */
  variant?: "default" | "split";
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

function StarSlot({
  fill,
  size,
}: {
  fill: "full" | "half" | "empty";
  size: keyof typeof sizeMap;
}) {
  if (fill === "full") {
    return <StarIcon filled className={cn(sizeMap[size], "text-ruby-light")} />;
  }
  if (fill === "empty") {
    return <StarIcon filled={false} className={cn(sizeMap[size], "text-white/15")} />;
  }
  return (
    <span className={cn("relative inline-block", sizeMap[size])}>
      <StarIcon filled={false} className={cn("absolute inset-0 text-white/15", sizeMap[size])} />
      <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
        <StarIcon filled className={cn("text-ruby-light", sizeMap[size])} />
      </span>
    </span>
  );
}

export function Rating({
  value,
  score,
  max = 5,
  showValue = true,
  variant = "default",
  orientation = "horizontal",
  size = "md",
  className,
}: RatingProps) {
  const slots = Array.from({ length: max }).map((_, i) => {
    const threshold = i + 1;
    if (value >= threshold) return "full" as const;
    if (value >= threshold - 0.5) return "half" as const;
    return "empty" as const;
  });

  const stars = (
    <div className="flex items-center gap-0.5 text-ruby-light" aria-hidden="true">
      {slots.map((fill, i) => (
        <StarSlot key={i} fill={fill} size={size} />
      ))}
    </div>
  );

  const isVertical = orientation === "vertical";

  if (variant === "split" && typeof score === "number") {
    return (
      <div
        className={cn(
          "flex gap-2",
          isVertical ? "flex-col items-center gap-1" : "flex-row items-center",
          className,
        )}
        aria-label={`Rated ${score.toFixed(1)} out of 10, ${value} stars`}
      >
        {/* Numeric score — always visible when vertical; desktop-only when horizontal */}
        <span
          className={cn(
            "items-baseline gap-0.5",
            isVertical ? "inline-flex" : "hidden sm:inline-flex",
          )}
        >
          <span className="text-lg font-bold text-white">{score.toFixed(1)}</span>
          <span className="text-xs text-white/40">/10</span>
        </span>
        {stars}
        {/* Mobile star value — only for horizontal split */}
        {!isVertical && showValue && (
          <span className="text-sm font-semibold text-white sm:hidden">{value.toFixed(1)}</span>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center gap-1.5", className)}
      aria-label={
        typeof score === "number"
          ? `Rated ${score.toFixed(1)} out of 10`
          : `Rated ${value} out of ${max}`
      }
    >
      {stars}
      {showValue && (
        <span className="text-sm font-semibold text-white">
          {typeof score === "number" ? score.toFixed(1) : value.toFixed(1)}
        </span>
      )}
    </div>
  );
}
