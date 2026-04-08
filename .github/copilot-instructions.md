# Copilot Instructions — The Milk House (Sunnyside Dairy)

This repo is a Next.js 16 + TypeScript + Tailwind CSS website for **sunnysidedairy.com**.

## Running the project

```bash
npm install        # install dependencies
npm run dev        # start development server at http://localhost:3000
npm run build      # production build
npm start          # start production server (after build)
npm run lint       # run ESLint
```

VS Code tasks for `dev`, `build`, and `lint` are defined in `.vscode/tasks.json`.

## Project structure

```
src/
└── app/
    ├── layout.tsx      # Root layout and metadata
    ├── page.tsx        # Home page (all sections live here)
    └── globals.css     # Global styles and CSS custom properties
```

All page content (hero, products, about, testimonials, contact) is in `src/app/page.tsx`.

## Styling conventions

- **Tailwind CSS** utility classes are the primary styling approach.
- CSS custom properties are declared in `globals.css` under `:root`:
  - `--primary-brown: #462e1c`
  - `--primary-amber: #c06e1d`
  - `--accent-orange: #a04e10`
  - `--accent-blue: #3b5566`
  - `--text-light: #f4f1ea`
- Custom Tailwind color tokens (`primary-brown`, `primary-amber`, etc.) mirror these values — see `tailwind.config.ts`.
- Custom fonts: `Caveat Brush` (logo), `Fredoka` (headings), `Poppins` (body).

## Code conventions

- TypeScript is used throughout; avoid `any` types.
- App Router (`src/app/`) — no Pages Router.
- Keep all sections as functions/components within `page.tsx` until a `src/components/` directory is created.
- Use `'use client'` at the top of `page.tsx` because it relies on React hooks.

## Adding or editing content

- **Products**: edit the `products` array near the top of `src/app/page.tsx`.
- **Team members**: edit the `teamMembers` array in `src/app/page.tsx`.
- **Contact details**: update the contact section JSX in `src/app/page.tsx`.
- **Metadata** (title, description, Open Graph): edit `src/app/layout.tsx`.
