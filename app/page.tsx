import Image from "next/image";
import { OutboundLink } from "@/components/outbound-link";
import { SectionTitle } from "@/components/section-title";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { getFeaturedWork, getSiteContent, getWorkByCategory } from "@/lib/content/loader";
import { formatRange } from "@/lib/utils/date";
import { withBasePath } from "@/lib/utils/paths";

export default function HomePage() {
  const content = getSiteContent();
  const featured = getFeaturedWork(6);
  const research = getWorkByCategory(["research", "publication"]);

  return (
    <>
      <a
        href="#main-content"
        className="focus-ring sr-only z-30 rounded-md bg-accent px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader fullName={content.profile.fullName} />
      <main id="main-content" className="mx-auto w-full max-w-6xl space-y-14 px-4 pb-16 pt-10 sm:px-6 sm:pt-12">
        <section className="section-shell overflow-hidden p-6 sm:p-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.35fr_0.9fr]">
            <div className="animate-rise">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Applied AI Engineer &amp; Researcher
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight text-text sm:text-5xl lg:text-6xl">
                {content.profile.fullName}
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-text-muted">{content.profile.headline}</p>
              <p className="mt-5 max-w-2xl text-base text-text-muted">{content.profile.bioShort}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="focus-ring inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-strong"
                >
                  View Work
                </a>
                <OutboundLink href={content.profile.resumeUrl} label="resume-download">
                  Download Resume
                </OutboundLink>
              </div>
            </div>
            <div className="animate-rise">
              <div className="section-shell mx-auto max-w-sm overflow-hidden p-3">
                <Image
                  src={withBasePath("/headshot.jpg")}
                  alt={`${content.profile.fullName} professional headshot`}
                  width={640}
                  height={760}
                  priority
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell p-6 sm:p-8">
          <SectionTitle
            eyebrow="About"
            title="Experience timeline"
            description="Key milestones across research, industry, and graduate work."
          />
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-line/80" />
            <div className="flex gap-6 overflow-x-auto pb-4 pt-2">
              {content.experience.map((item) => (
                <article
                  key={`${item.organization}-${item.start}`}
                  className="relative min-w-[240px] max-w-[280px] shrink-0 rounded-xl border border-line bg-surface p-4 pt-8"
                >
                  <span className="absolute left-4 top-4 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20" />
                  <p className="text-xs font-semibold text-text-muted">{formatRange(item.start, item.end)}</p>
                  <h3 className="mt-2 text-base font-bold text-text">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {item.organizationUrl ? (
                      <a
                        href={item.organizationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring rounded-sm underline decoration-accent/50 underline-offset-2 hover:decoration-accent"
                      >
                        {item.organization}
                      </a>
                    ) : (
                      item.organization
                    )}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <SectionTitle
            eyebrow="Featured Work"
            title="Featured Work"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        <section id="research" className="section-shell p-6 sm:p-8">
          <SectionTitle
            eyebrow="Research & Publications"
            title="Research-minded engineering"
            description="I enjoy translating experimentation into dependable implementation, with reproducible workflows and practical deployment decisions."
          />
          <div className="grid gap-4">
            {research.length > 0 ? (
              research.map((item) => (
                <article key={item.slug} className="rounded-xl border border-line p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-text">{item.title}</h3>
                    <span className="text-sm font-medium text-text-muted">{formatRange(item.start, item.end)}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-accent">{item.role}</p>
                  <p className="mt-2 text-text-muted">{item.summary}</p>
                </article>
              ))
            ) : (
              <p className="text-text-muted">Research highlights will be expanded in Phase 2 with full publication indexing.</p>
            )}
          </div>
        </section>

        <section className="section-shell p-6 sm:p-8">
          <SectionTitle
            eyebrow="Skills & Tooling"
            title="Engineering toolkit"
            description="Backend-heavy foundations with practical AI system development across research and production contexts."
          />
          <div className="flex flex-wrap gap-2.5">
            {content.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-line bg-surface-muted px-3 py-1.5 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell p-6 sm:p-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let&apos;s connect"
            description="I am open to Applied AI and backend-focused opportunities, collaborations, and research-to-product roles."
          />
          <div className="flex flex-wrap gap-3">
            <OutboundLink href={`mailto:${content.profile.email}`} label="contact-email">
              Email
            </OutboundLink>
            <OutboundLink href={content.profile.linkedin} label="contact-linkedin">
              LinkedIn
            </OutboundLink>
            <OutboundLink href={content.profile.github} label="contact-github">
              GitHub
            </OutboundLink>
            <OutboundLink href={content.profile.resumeUrl} label="contact-resume">
              Resume PDF
            </OutboundLink>
          </div>
        </section>
      </main>
      <footer className="border-t border-line/80 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {content.profile.fullName}. All rights reserved.</p>
          <p>Built with Next.js and deployed on GitHub Pages.</p>
        </div>
      </footer>
    </>
  );
}
