import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & { tone?: "default" | "dark" };

export function Eyebrow({ className, tone = "default", ...props }: EyebrowProps) {
  return <p className={cn("text-sm font-semibold uppercase tracking-[0.18em]", tone === "dark" ? "text-accent-on-dark" : "text-accent", className)} {...props} />;
}
