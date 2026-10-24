import { cn } from "@/lib/utils";

/** Wordmark typographique TEMPORAIRE, à remplacer par le logo officiel s'il est fourni. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display tracking-tight", className)}>
      <span>coup</span>
      <span className="text-accent">&apos;</span>
      <span className="font-bold">ART</span>
    </span>
  );
}
