# This or That

Mind dump, then sort your tasks two at a time. An installable web app (PWA) that works offline.

**Open it:** https://mrswarffamousthepimmigrant.github.io/this-or-that/

## Install on your phone

- **iPhone (Safari):** open the link, tap Share, then **Add to Home Screen**.
- **Android (Chrome):** open the link, tap ⋮, then **Install app** (or **Add to Home screen**).

Always open it from the home-screen icon. On iPhone the icon has its own storage, separate from Safari.

## Privacy

Your list is stored only on the phone (`localStorage`). No accounts, no server, no tracking.
Two optional features talk to the internet:

- **Claude API key** (Settings): if you add one, "Make it a list" sends what you typed to Anthropic. Without a key, the text is split on the phone.
- **Talk button:** uses the phone's speech recognition. On Android, Chrome may send audio to Google.

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
