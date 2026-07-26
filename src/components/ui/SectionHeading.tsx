import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "w-full",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-1.5 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 text-sm text-white/60 sm:text-base">{description}</p>}
    </div>
  );
}
