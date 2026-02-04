import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ fullName }: { fullName: string }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="focus-ring text-lg font-bold tracking-tight text-text">
          {fullName}
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-text-muted sm:flex">
          <a href="#work" className="focus-ring rounded px-1 py-0.5 hover:text-accent">
            Work
          </a>
          <a href="#research" className="focus-ring rounded px-1 py-0.5 hover:text-accent">
            Research
          </a>
          <a href="#about" className="focus-ring rounded px-1 py-0.5 hover:text-accent">
            About
          </a>
          <a href="#contact" className="focus-ring rounded px-1 py-0.5 hover:text-accent">
            Contact
          </a>
          <Link href="/blog" className="focus-ring rounded px-1 py-0.5 hover:text-accent">
            Blog
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
