# Jack Lockhart Portfolio

This portfolio is in an incremental migration from Create React App to Astro. Astro is the build system and page shell, while the existing client-side application continues to run through Astro's React integration. `/contact` and `/resume` are native Astro routes; the remaining pages continue to use React Router with hash URLs during this stage of the migration.

## Setup and commands

- `npm install` - Install dependencies.
- `npm run dev` - Start the Astro development server.
- `npm run build` - Create the production build in `dist/`.
- `npm run preview` - Preview the production build locally.
- `npm run typecheck` - Run TypeScript without emitting files.

Astro source pages are under `astro/`, and the existing React application remains under `src/`. Deployment configuration is intentionally not included yet.
