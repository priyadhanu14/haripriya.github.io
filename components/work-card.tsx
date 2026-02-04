import type { WorkItem } from "@/lib/content/types";
import { formatRange } from "@/lib/utils/date";
import { OutboundLink } from "@/components/outbound-link";

const categoryLabel: Record<WorkItem["category"], string> = {
  project: "Project",
  research: "Research",
  publication: "Publication",
  hackathon: "Hackathon",
  competition: "Competition",
  teaching: "Teaching"
};

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <article className="section-shell flex h-full flex-col p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-bold uppercase tracking-wide text-text-muted">
          {categoryLabel[item.category]}
        </span>
        <span className="text-xs font-medium text-text-muted">{formatRange(item.start, item.end)}</span>
      </div>
      <h3 className="font-display text-xl leading-tight text-text">{item.title}</h3>
      <p className="mt-2 text-sm font-semibold text-accent">{item.role}</p>
      <p className="mt-3 text-sm text-text-muted">{item.summary}</p>
      <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-text-muted">
        {item.outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {item.proofLinks.map((proof) => (
          <OutboundLink key={proof.url} href={proof.url} label={`proof:${item.slug}:${proof.label}`}>
            {proof.label}
          </OutboundLink>
        ))}
      </div>
      {item.confidential ? (
        <p className="mt-3 text-xs font-semibold text-text-muted">Confidential details are intentionally sanitized.</p>
      ) : null}
    </article>
  );
}
