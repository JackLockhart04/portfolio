# Jack Lockhart Portfolio

This portfolio is in an incremental migration from Create React App to Astro. Astro is the build system and page shell, while the existing client-side application continues to run through Astro's React integration. `/contact`, `/resume`, `/certifications`, the Projects listing at `/projects`, and all three displayed project-detail pages are native Astro routes. The homepage still runs through React, and the old React Router hash routes temporarily remain as fallbacks.

## Setup and commands

- `npm install` - Install dependencies.
- `npm run dev` - Start the Astro development server.
- `npm run build` - Create the production build in `dist/`.
- `npm run preview` - Preview the production build locally.
- `npm run typecheck` - Run TypeScript without emitting files.

Astro source pages are under `astro/`, and the existing React application remains under `src/`. Deployment configuration is intentionally not included yet.
