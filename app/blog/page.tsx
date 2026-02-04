import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { getSiteContent } from "@/lib/content/loader";

export default function BlogPage() {
  const content = getSiteContent();

  return (
    <>
      <SiteHeader fullName={content.profile.fullName} />
      <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-10 sm:px-6 sm:pt-12">
        <section className="section-shell p-8 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Blog</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-text sm:text-5xl">Insights coming soon</h1>
          <p className="mt-4 max-w-2xl text-text-muted">
            This space will feature build logs and lessons from applied AI and backend system work. Planned cadence:
            one post per month.
          </p>

          <div className="mt-8 rounded-xl border border-line bg-surface-muted/70 p-5">
            <h2 className="text-lg font-bold text-text">What is planned for Phase 2</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-muted">
              <li>Notion-backed manual publish workflow.</li>
              <li>Tags, search, and reading-time metadata.</li>
              <li>Initial technical post aligned with project outcomes.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="focus-ring inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-strong"
            >
              Back to Portfolio
            </Link>
            <a
              href={`mailto:${content.profile.email}`}
              className="focus-ring inline-flex items-center rounded-md border border-line bg-surface px-4 py-2 text-sm font-semibold text-text hover:border-accent hover:text-accent"
            >
              Email me
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
