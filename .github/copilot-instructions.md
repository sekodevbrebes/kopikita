### Repo overview

- Framework: Next.js (App Router) using the `src/app` directory. Core layout is in `src/app/layout.tsx` and pages in `src/app/*.tsx`.
- Language: TypeScript (strict). Path alias `@/*` -> `./src/*` configured in `tsconfig.json`.
- Styling: Tailwind v4 via PostCSS (`postcss.config.mjs`) and global styles in `src/app/globals.css`.
- Fonts: `next/font` is used in `src/app/layout.tsx` (keep font variables intact when editing layout).

### Big-picture architecture

- Feature-organized components: components are grouped by feature (e.g. `src/components/cart`, `src/components/home`, `src/components/menu`, `src/components/layout`, `src/components/ui`). Follow that pattern when adding or moving components.
- App-level layout and global state belong in `src/app/layout.tsx` and children rendered under the app route tree.
- UI primitives live under `src/components/ui` (e.g. `Button.tsx`, `Card.tsx`). Reuse these for consistency.

### Developer workflows (commands)

- Install: `npm install`
- Dev server (hot reload): `npm run dev` (starts Next dev server on :3000)
- Build for production: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint` (uses ESLint + `eslint-config-next`)

Note: The project README contains the same basic dev commands, but the above are authoritative (see `package.json`).

### Project-specific conventions and patterns

- App router: Add new routes as folders/files under `src/app`. Client-side interactive components must include `"use client"` at the top of the file when they use state, effects, or browser-only APIs.
- Feature folders: Place feature-related components adjacent to their UI folder (e.g. `menu/`, `cart/`). This repository prefers small, focused components in feature subfolders rather than a single global components folder.
- Fonts and CSS variables: `layout.tsx` sets CSS variables for fonts (`--font-geist-sans`, `--font-geist-mono`) and `globals.css` relies on those variables. When changing layout or fonts, update both `layout.tsx` and `globals.css` accordingly.
- Path alias: Use `@/` imports for files under `src` (TypeScript paths configured in `tsconfig.json`). Example: `import Header from '@/components/layout/Header'`.
- Tailwind usage: Tailwind is enabled via `postcss.config.mjs` and imported in `globals.css` with `@import "tailwindcss";`. Keep Tailwind utility classes consistent with existing styles.

### Integration points & external dependencies

- Next.js v16, React 19 — use modern Next APIs (app router patterns, `metadata` exports, `next/font`).
- Tailwind CSS + PostCSS. PostCSS uses `@tailwindcss/postcss` plugin from devDependencies.
- Linting via ESLint with `eslint-config-next`.
- Deployment: project is standard Next.js and can be deployed to Vercel; no custom server code found.

### Editing guidance for an AI agent

- Preserve exports: Keep default exports and `metadata`/layout signatures intact in `src/app/layout.tsx` and `src/app/page.tsx` unless explicitly changing app structure.
- Minimal diffs: When modifying components, make minimal, well-typed changes (add explicit prop interfaces rather than using `any`). Use existing UI primitives from `src/components/ui` when possible.
- Tests: No test framework detected—do not add tests unless you also add a test runner and scripts.
- Linting: Run `npm run lint` after changes; prefer following existing ESLint rules in the repo.
- Client vs server: Respect the app-router distinction. If code uses browser-only APIs (window, document, localStorage), mark the file with `"use client"` and keep it inside the client boundary.

### Files worth reading first (examples)

- `src/app/layout.tsx` — global layout, global fonts and CSS variables.
- `src/app/page.tsx` — the default home route.
- `src/components/layout/Header.tsx` & `src/components/layout/Footer.tsx` — site chrome and navigation patterns.
- `src/components/ui/*` — UI primitives and patterns for component composition.

### Merge rules (if this file already exists)

- If `.github/copilot-instructions.md` exists, merge by preserving any project-specific examples and add missing sections above. Do not overwrite developer-written notes without confirmation.

If anything above is unclear or you want more detail on an area (build, deployment, specific component patterns), tell me which part to expand and I will update this file.
