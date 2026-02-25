# AGENTS.md

## Cursor Cloud specific instructions

### Project Overview
This is a Next.js 16 portfolio website (TypeScript + Tailwind CSS v4) converted from two static HTML files (`index.html` and `index2.html`). The original HTML files remain in the repo root for reference.

### Running the App
- **Dev server:** `npm run dev` (runs on port 3000 by default)
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint)
- See `package.json` for all available scripts.

### Key Notes
- Tailwind CSS v4 uses `@import "tailwindcss"` in `globals.css` and the `@theme inline` directive for custom theme tokens — not a `tailwind.config.js` file.
- All images are loaded from external Supabase Storage CDN (`hoirqrkdgbmvpwutwuwj.supabase.co`). Internet access is required for images to display.
- The `next.config.ts` has `remotePatterns` configured for the Supabase and Unsplash image hostnames.
- No backend, database, or environment variables are needed — this is a purely static/SSG site.
