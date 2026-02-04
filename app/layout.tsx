import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-github-username.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Haripriya | Applied AI Engineer",
  description:
    "Recruiter-focused portfolio for an Applied AI Engineer with backend systems and research-driven engineering experience.",
  openGraph: {
    title: "Haripriya | Applied AI Engineer",
    description:
      "Applied AI Engineer focused on backend systems, product impact, and research-minded execution.",
    url: siteUrl,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const stored = localStorage.getItem("theme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = stored ?? (systemDark ? "dark" : "light");
                document.documentElement.setAttribute("data-theme", theme);
              })();
            `
          }}
        />
        <div className="grain-overlay" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
