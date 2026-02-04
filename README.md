# Haripriya Portfolio Site

Recruiter-first portfolio website built with Next.js, TypeScript, and Tailwind CSS.
This project includes a single-page portfolio (`/`) and a branded blog placeholder
page (`/blog`) for phase-2 expansion.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages
- GA4-ready analytics hooks

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local development:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Content Editing

- Profile, work entries, experience, and skills:
  `lib/content/data.ts`
- Data loading helpers:
  `lib/content/loader.ts`
- Blog provider interface and placeholder provider:
  `lib/blog/types.ts`, `lib/blog/provider.ts`

## Replace Placeholder Assets

- Resume: replace `public/resume.pdf`
- Headshot: replace `public/headshot-placeholder.svg` (or add `public/headshot.jpg`
  and update usage in `app/page.tsx`)

## Environment Variables

Create `.env.local` for local development when needed:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-github-username.github.io
```

## Intake Folder Workflow

Drop your source materials in `content-intake/`:

- Resume/CV
- Papers/publications
- Research notes
- Hackathon/competition artifacts
- TA experience documents
- Any proof links list

The intake files are ignored by git by default for privacy.

## Deployment

GitHub Pages deployment is configured in:

- `.github/workflows/deploy.yml`

On push to `main`, the workflow builds a static export and deploys the `out/`
directory.
