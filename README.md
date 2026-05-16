<div align="center">

# shadcn/ui + Figma Starter

**A minimal Next.js starter for building UIs with shadcn/ui + Tailwind CSS v4 — with strict 1:1 Figma fidelity enforced by an AI agent skill.**

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-CLI--driven-000000)](https://ui.shadcn.com/)

</div>

---

This starter is intentionally **empty of components**. shadcn/ui's philosophy is that components live in your repo as source — install them via the CLI when you need them, not ahead of time.

## Table of contents

- [Stack](#stack)
- [Quick start](#quick-start)
- [Adding components from Figma](#adding-components-from-figma)
- [Folder layout](#folder-layout)
- [Theming](#theming)
- [Dark mode](#dark-mode)
- [Figma kits](#figma-kits)
- [What this starter does NOT include](#what-this-starter-does-not-include)

## Stack

| Layer        | Choice                                        |
| ------------ | --------------------------------------------- |
| Framework    | Next.js 15 (App Router) · React 19            |
| Language     | TypeScript                                    |
| Styling      | Tailwind CSS v4 — Figma-kit-synced tokens, `@theme inline` |
| Components   | shadcn/ui (CLI-driven)                         |
| Theme        | Synced 1:1 from Figma kit `design-lazyyy-figma-uikit-pro` |
| Icons        | lucide                                        |

## Quick start

```bash
# 1. Install deps
npm install
# or: pnpm install / bun install

# 2. Verify shadcn project context
npx shadcn@latest info

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) and replace `app/page.tsx` with your first screen.

## Adding components from Figma

The workflow is enforced by the skill at `.claude/skills/shadcn-ui-tailwind-figma/SKILL.md` — auto-loaded by Claude Code, Cursor, Copilot, and other Agent Skill–compatible tools.

1. Run `get_design_context`, `get_screenshot`, and `get_variable_defs` on the Figma node.
2. Write an inventory of what's in the node — containers, layers, text, sizes, tokens, variants.
3. Install any missing components: `npx shadcn@latest add <name>`.
4. Build the JSX from the inventory — **nothing added, nothing dropped**.
5. Validate against the Figma screenshot.

> Full rules and the "when to stop and ask" list live in the skill file.

## Folder layout

```
.
├── .claude/skills/shadcn-ui-tailwind-figma/SKILL.md   # Strict Figma fidelity workflow
├── app/
│   ├── globals.css     # Tokens (Figma-kit-synced, light + dark)
│   ├── layout.tsx
│   └── page.tsx        # Replace this with your first screen
├── lib/utils.ts        # cn() helper
├── public/
├── AGENTS.md           # Universal AI agent config
├── CLAUDE.md           # Claude Code-specific config
├── DESIGN.md           # Design system spec
├── components.json     # shadcn CLI config
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Theming

Tokens live in `app/globals.css` — both light (`:root`) and dark (`.dark`) variants — synced **1:1 from the Figma kit** (exact sRGB values).

To change the look:

- **Re-theme** — re-export the Figma `shadcn/ui` collection and regenerate `globals.css`. **Don't** run `apply --preset`; it overwrites the kit-synced values (see `DESIGN.md` §2.5)
- **Just one token** — edit `app/globals.css` directly, then update the matching Figma variable
- **New custom token** — add to `:root` + `.dark`, then register in `@theme inline` (see `DESIGN.md` §9)

> Don't create a new CSS file — always edit `globals.css`.

## Dark mode

Class-based: add `.dark` to `<html>` to switch. To wire up a toggle, install `next-themes`:

```bash
npm install next-themes
```

Then wrap `app/layout.tsx`:

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

_(Not pre-installed — add only if you need it.)_

## Figma kits

This codebase is synced from `design-lazyyy-figma-uikit-pro` (`shadcn/ui` collection). For other shadcn-aligned kits, see `DESIGN.md` §11.4. Match the variable names to the names in `globals.css` for clean MCP token resolution.

## What this starter does NOT include

By design, to keep things minimal:

- No example components or pages — install via `npx shadcn@latest add`
- No authentication, routing helpers, or middleware
- No Storybook, testing setup, or CI config
- No theme toggle pre-installed (add `next-themes` when needed)
- No custom fonts (add to `globals.css` when your Figma specifies one)
- No `tailwind.config.ts` (Tailwind v4 uses `@theme inline` in `globals.css` only)

> Add things when the design calls for them, not before.
