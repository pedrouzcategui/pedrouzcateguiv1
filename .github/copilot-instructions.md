# Copilot Instructions — pedrouzcategui.com

This file gives targeted guidance for AI coding agents to be productive in this repository.

1. Project overview

- **Framework:** Next.js (App Router) — see `next.config.ts` and `src/app` for route/layout usage.
- **Content:** Blog posts are plain MDX files under the top-level `posts/` directory. They are dynamically loaded by `src/lib/posts.plugin.ts` using `import('@/posts/${fileName}')`.
- **Styling & tooling:** Tailwind CSS + PostCSS; MDX processing configured via `@next/mdx` and `next.config.ts` (plugins: `remark-math`, `remark-gfm`, `remark-prism`, `rehype-katex`).

2. Key files to read first

- `src/lib/posts.plugin.ts`: how posts are discovered and imported (uses `fs/promises.readdir` and dynamic import).
- `mdx-components.tsx`: central MDX component mappings (heading, lists, paragraphs) used across MDX posts.
- `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`: how posts are listed and rendered.
- `next.config.ts`: MDX and page extensions, turbopack root.
- `package.json`: scripts: `dev`, `build`, `start`.

3. Important architecture and patterns

- App Router: UI and routing follow `src/app` conventions — top-level `layout.tsx` and nested route folders.
- MDX posts: each MDX exports a `metadata` object (used by `BlogPost`) and a default React component. Keep frontmatter consistent with `PostMetadata` shape used in `src/app/blog/page.tsx` (id, slug, title, date, excerpt).
- Dynamic imports: posts are imported with `@/posts/<file>`; adding or renaming files in `posts/` affects runtime imports — update `posts/` carefully.
- Base path & I/O: `getBaseDirectory()` uses `process.cwd()` (see `src/utils.ts`) — file-system reads assume repo root as CWD.

4. Conventions to follow

- Components: prefer default exports for components under `src/components/` (current code uses default exports like `Hero`, `Projects`).
- Styling: use Tailwind utility classes in JSX; MDX components return elements with Tailwind classes (see `mdx-components.tsx`).
- MDX frontmatter metadata: adhere to keys `id`, `slug`, `title`, `date`, `excerpt` for blog tooling to work without changes.

5. Build / run / debug commands

- Local dev: `npm run dev` (runs `next dev`).
- Build for production: `npm run build` then `npm run start`.
- If debugging server-side MDX imports, add console logs in `src/lib/posts.plugin.ts` — it runs during SSR/edge functions.

6. Integration points & third-party libs

- MDX: `@next/mdx`, `@mdx-js/react` and `@mdx-js/loader` used for MDX rendering — check `next.config.ts` for plugin list.
- Animations: `gsap` + `@gsap/react` used across animated components in `src/components/animated`.
- Syntax highlighting and math: `remark-prism`, `remark-math`, and `rehype-katex`.

7. What to avoid changing without verification

- Dynamic import path in `src/lib/posts.plugin.ts` — renaming post folder or changing import alias `@/posts` requires updating imports/tsconfig/next aliases.
- `pageExtensions` in `next.config.ts` — changing may break MDX routing.
- The `process.cwd()` assumption in `src/utils.ts` — moving build contexts could break post discovery.

8. Quick examples for common tasks

- Add a new blog post: create `posts/my-new-post.mdx` exporting frontmatter `metadata` with `id, slug, title, date, excerpt` and a default component; run `npm run dev` and visit `/blog`.
- Update MDX layout: edit `mdx-components.tsx` to change global MDX rendering.

9. Questions for repo owner (ask before making wide changes)

- Preferred Node.js version and CI commands (not specified in repo).
- Any hidden build steps or environment variables used in deployment?

If anything is missing or you want a different emphasis, tell me which area to expand (e.g., tests, CI, deployment).
