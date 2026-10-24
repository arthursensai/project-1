import { cn } from "@/lib/utils";

type Props = { id: string; eyebrow: string; title: string; inverse?: boolean; className?: string };

export function SectionHeading({ id, eyebrow, title, inverse, className }: Props) {
  return (
    <div className={className}>
      <p
        className={cn(
          "text-xs font-medium uppercase tracking-[0.16em]",
          inverse ? "text-action-ink" : "text-ink-muted",
        )}
      >
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-display text-3xl leading-[1.1] text-balance md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
