"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface OutboundLinkProps {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export function OutboundLink({ href, label, children, className }: OutboundLinkProps) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "select_content", {
        content_type: "outbound_link",
        item_id: label,
        outbound_url: href
      });
    }
  };

  return (
    <>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
          className={
            className ??
            "focus-ring inline-flex items-center rounded-md border border-line bg-surface-muted px-3 py-1.5 text-sm font-semibold text-text hover:border-accent hover:text-accent"
          }
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          onClick={handleClick}
          className={
            className ??
            "focus-ring inline-flex items-center rounded-md border border-line bg-surface-muted px-3 py-1.5 text-sm font-semibold text-text hover:border-accent hover:text-accent"
          }
        >
          {children}
        </Link>
      )}
    </>
  );
}
