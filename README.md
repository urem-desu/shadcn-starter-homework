# shadcn/ui + Figma Starter

A minimal starter for building UIs with **shadcn/ui + Tailwind CSS v4**, with strict 1:1 Figma fidelity enforced by an AI agent skill.

This starter is intentionally **empty of components**. shadcn/ui's philosophy is that components live in your repo as source — install them via the CLI as you need them, not ahead of time.

## Stack

- Next.js 15 (App Router) · TypeScript · React 19
- Tailwind CSS v4 (OKLCH tokens, `@theme inline`)
- shadcn/ui (CLI-driven)
- Default theme: Neutral
- Icon library: lucide

## Quick start

```bash
# 1. Install deps
npm install
# or: pnpm install / bun install

# 2. Verify shadcn project context
npx shadcn@latest info

# 3. Dev server
npm run dev
```

## Adding components from Figma

The workflow is enforced by the skill at `.claude/skills/shadcn-ui-tailwind-figma/SKILL.md` (auto-loaded by Claude Code, Cursor, Copilot, and other Agent Skill–compatible tools).

Summary:

1. Run `get_design_context`, `get_screenshot`, and `get_variable_defs` on the Figma node.
2. Write an inventory of what's in the node (containers, layers, text, sizes, tokens, variants).
3. Install any missing components: `npx shadcn@latest add <name>`.
4. Build the JSX from the inventory — nothing added, nothing dropped.
5. Validate against the Figma screenshot.

Full rules and "when to stop and ask" list: see the skill file.

## Folder layout

```
.
├── .claude/skills/shadcn-ui-tailwind-figma/SKILL.md   # Strict Figma fidelity workflow
├── app/
│   ├── globals.css     # Tokens (Default Neutral theme, light + dark)
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

Tokens live in `app/globals.css` — both light (`:root`) and dark (`.dark`) variants.

To change the look:

- **Whole theme swap:** `npx shadcn@latest apply --preset <code>` (preset codes from <https://ui.shadcn.com/create>)
- **Just one token:** edit `app/globals.css` directly
- **New custom token:** add to `:root` + `.dark`, then register in `@theme inline` (see `DESIGN.md` §7)

Don't create a new CSS file — always edit `globals.css`.

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

(Not pre-installed — add only if you need it.)

## Figma kits

If you need a Figma kit aligned with this codebase, see `DESIGN.md` §9.4 for the official list. Match the variable names to the names in `globals.css` for clean MCP token resolution.

## What this starter does NOT include

By design, to keep things minimal:

- No example components or pages — install via `npx shadcn@latest add`
- No authentication, routing helpers, or middleware
- No Storybook, testing setup, or CI config
- No theme toggle pre-installed (add `next-themes` when needed)
- No custom fonts (add to `globals.css` when your Figma specifies one)
- No `tailwind.config.ts` (Tailwind v4 uses `@theme inline` in `globals.css` only)

Add things when the design calls for them, not before.
# shadcn-figma-starter-batch2
