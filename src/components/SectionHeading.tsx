type Props = { id: string; eyebrow: string; title: string };

export function SectionHeading({ id, eyebrow, title }: Props) {
  return (
    <div className="md:col-span-4">
      <p className="text-xs uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl leading-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
