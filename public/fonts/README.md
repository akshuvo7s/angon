# Bangla Fonts

SolaimanLipi and AdorshoLipi are freeware Bangla fonts but aren't distributed
through Google Fonts / npm — you need to add the actual `.ttf`/`.woff2` files
yourself (they're not something Claude can legally fetch/redistribute).

## Steps

1. Download the fonts (both are widely available as free downloads — search
   "SolaimanLipi font download" / "AdorshoLipi font download").
2. Drop the files here as:
   - `public/fonts/SolaimanLipi.woff2` (or `.ttf`)
   - `public/fonts/AdorshoLipi.woff2` (or `.ttf`)
3. That's it — `globals.css` already has `@font-face` rules pointing to these
   exact filenames. Once the files exist, the site will pick them up
   automatically on next build/dev restart.

## Until then

The site falls back to **Noto Sans Bengali** (loaded via `next/font/google`,
already wired up) — so everything renders correctly and readably even before
you add the SolaimanLipi/AdorshoLipi files. No broken text, no build errors.
