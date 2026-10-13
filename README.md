# Diego Coscolla — CV

Personal CV site, in English and Spanish.

**Live:** https://diegocoscolla.dev

## Stack

Next.js 16 (App Router, static generation), React 19, TypeScript, Tailwind CSS 3, ESLint 9 (flat config), pnpm.

## Routes

| Path  | Content          |
| ----- | ---------------- |
| `/`   | English          |
| `/es` | Spanish          |

Legacy `/?language=es` and `/en` redirect (308) to `/es` and `/`. Also generated: `/sitemap.xml`, `/robots.txt`.

Content lives in `src/data/resume-data.ts`; `SITE_URL` there drives canonical URLs, sitemap, robots and JSON-LD.

## Scripts

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build
pnpm start      # serve the build
pnpm lint       # eslint .
pnpm typecheck  # tsc --noEmit
```

## Deploy

Vercel project `diego-cv` (Node 24.x). Pushes to `main` deploy to production; PRs get preview deployments.
