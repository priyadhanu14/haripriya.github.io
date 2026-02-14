export function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl leading-tight text-text sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-text-muted">{description}</p> : null}
    </div>
  );
}
