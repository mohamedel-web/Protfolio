# Mohamed El-Haddady — Portfolio

A bilingual (EN/FR) portfolio built with Next.js 14, TypeScript, TailwindCSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your photo

Drop your professional photo into `public/profile.jpg` (square image, at least 500x500px works best).
Until then, the hero shows a monogram placeholder automatically — no code changes needed.

## Add your CV

Drop your CV as `public/Mohamed-El-Haddady-CV.pdf` — the "Download CV" buttons already link to it.

## Edit your content

- `lib/data.ts` — projects, experience, education, skills, contact info
- `lib/i18n/translations.ts` — all EN/FR UI copy (headline, section intros, labels)

## Wire up real GitHub stats (optional)

`components/sections/GithubStats.tsx` currently shows a stylised placeholder heatmap and static
counters. To show live data, fetch from the GitHub REST API
(`https://api.github.com/users/<username>`) in a server component and pass the numbers down.

## Deploy

This is a standard Next.js app — deploys cleanly to Vercel (`vercel deploy`), Netlify, or any Node host.

## Tech stack

Next.js 14 (App Router) · TypeScript · TailwindCSS · Framer Motion · lucide-react
