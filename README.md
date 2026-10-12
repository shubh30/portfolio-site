# Shubham Nagpal — Portfolio

React 19 + TypeScript + Vite, plain CSS design tokens, React Router. No backend.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint && npm run build && npm run preview
```

## Update content

All content is typed data in `src/data/`: `profile.ts` (bio, links, outcomes), `experience.ts`, `skills.ts`, `philosophy.ts`, `projects.ts` (case studies). Replace `public/Shubham-Nagpal-Resume.pdf` to update the resume.

## Deploy

`npm run build` outputs `dist/`. Any static host works; routes need an SPA fallback (`public/_redirects` for Netlify/Cloudflare, `vercel.json` for Vercel). Set `VITE_SITE_URL` (e.g. `https://yourdomain.com`, no trailing slash) in `.env` before building so social-share URLs are absolute.
