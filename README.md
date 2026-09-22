# Jack Lockhart Portfolio

Every active page in this portfolio is now rendered by Astro. The old React source remains temporarily in `src/` for a later cleanup pass, and lightweight compatibility redirects preserve the supported legacy hash URLs.

## Setup and commands

- `npm install` - Install dependencies.
- `npm run dev` - Start the Astro development server.
- `npm run build` - Create the production build in `dist/`.
- `npm run preview` - Preview the production build locally.
- `npm run typecheck` - Run TypeScript without emitting files.

Astro source pages are under `astro/`, and the existing React application remains under `src/`. Deployment configuration remains intentionally deferred.
