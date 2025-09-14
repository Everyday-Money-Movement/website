# AGENTS.md — Everyday Money Movement (EMM)

**Purpose:** Guide local agents (Cursor) and cloud agents (Codex) to ship changes safely and fast, while protecting paid code (Pro Blocks) and keeping the site accessible and performant.

---

## 1) Project context

- **Goal:** Promote Bitcoin as *everyday money* — show why MoE matters, help people live on bitcoin, and publish community stories.
- **Stack:** Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui
- **Content sources:** MDX for blog (`/content/blog/*.mdx`) and country guides (`/content/countries/*.mdx`)
- **Routing:**
  - `/` → Manifesto (rich-text)
  - `/medium-of-exchange` → MoE explainer (rich-text)
  - `/live` → Interactive world map + country list
  - `/live/[country]` → Country guide (MDX)
  - `/blog` and `/blog/[slug]` → MDX posts
  - `/contribute` → contributor info
- **Design system:** default shadcn tokens for now; branding to follow from Figma later (light/dark)
- **Paid components:** **Pro Blocks** from shadcndesign (must never leak paid source into public repo)

---

## 2) Repos & workspace

- **Public repo:** `Everyday-Money-Movement/website`
- **Private repo (paid):** `Everyday-Money-Movement/pro-blocks-private`
- **Workspace config (public):**
  - `pnpm-workspace.yaml`
    ```yaml
    packages:
      - packages/*
    ```
  - `package.json` dependency:
    ```json
    "@everydaymoney/pro-blocks": "workspace:*"
    ```
  - `next.config.ts`:
    ```ts
    transpilePackages: ["@everydaymoney/pro-blocks"]
    ```
- **Wrappers (public):** one-line re-exports under `components/problocks/*`  
  _Example:_
  ```ts
  export { Footer3 as ProFooter3 } from "@everydaymoney/pro-blocks";
  ```

---

## 3) Design-to-Code via Figma Plugin

- When using **Figma → shadcn/ui plugin**, always:
  1. Generate component code via plugin (matching your Figma component).  
  2. Create or update shadcn/ui component under `components/ui/` or `components/custom/`.  
  3. If it duplicates a Pro Blocks component, prefer the Pro Block + wrapper instead.  
  4. Export any new design tokens (colors, radii, font sizes) and paste into `globals.css` or via `shadcn/ui CLI`.  
  5. Write wrapper if needed (if you want to standardize props).  
- Agents must not copy Pro Blocks internal code when plugin output overlaps; wrappers must refer to Pro Blocks when possible.  
- Ensure the plugin output respects accessibility: alt/text, semantic HTML, aria attributes.  
- Plugin output should match Tailwind v4 tokens, theme light/dark (if used).
