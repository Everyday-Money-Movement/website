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
