# This or That

Mind dump, then sort your tasks two at a time. An installable web app (PWA) that works offline.

**Open it:** https://mrswarffamousthepimmigrant.github.io/this-or-that/

## Install on your phone

- **iPhone (Safari):** open the link, tap Share, then **Add to Home Screen**.
- **Android (Chrome):** open the link, tap ⋮, then **Install app** (or **Add to Home screen**).

Always open it from the home-screen icon. On iPhone the icon has its own storage, separate from Safari.

## Adding tasks

One task per box: **A**, **B**, then **+ Add another** (or press Enter in the last box).

To empty your head by talking instead: tap **Copy prompt for your AI**, paste it into ChatGPT, Claude
or any assistant, ramble to it (its voice dictation works well), then copy its lettered list and paste
it into a box. A pasted list fills one box per line; the `A.` / `1.` / `-` markers, chat around the
list, and tasks already in a box are dropped. Boxes are kept on the phone until you start sorting.

## Privacy

Your list is stored only on the phone (`localStorage`). No accounts, no server, no tracking.
The app makes no network requests after it's installed; your AI assistant only sees what you paste into it.

## Markdown export / import

Settings → **Export Markdown** saves a file like:

```markdown
# This or That (2026-09-30)

## To do
1. First task
2. Second task

## Done today
- [x] Finished task
```

Import rules: numbered lines keep their order in the ranked list, `- [x]` lines count as done,
bullets and plain lines go into the sort queue. Headings and duplicates are skipped.
"Add to my list" puts numbered lines below the current list.

## Updating the app

Everything is static: `index.html`, `sw.js`, `manifest.webmanifest`, `icons/`, `fonts/`.
After changing any file, bump `VERSION` in `sw.js` so phones fetch the new files
(they switch over on the next launch after the update downloads).

Fonts: Atkinson Hyperlegible and Bricolage Grotesque, SIL Open Font License 1.1 (see `fonts/`).
