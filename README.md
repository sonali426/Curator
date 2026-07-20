# ModernizeBench / The Eval Ledger

A public, evaluation-first project for measuring multi-agent software-modernization workflows. The site contains the ModernizeBench product design, a deep learning curriculum, and **The Eval Ledger**, a daily agent-evaluation learning publication.

## Public site

- GitHub Pages target: https://sonali426.github.io/Curator/
- Immediate branch preview: https://raw.githack.com/sonali426/Curator/master/site/index.html

The branch preview reflects updates from `master` within a few minutes. The GitHub Pages workflow publishes the `site/` directory after Pages is enabled for this repository.

## Daily editorial policy

Every edition is classified as `CRITICAL`, `HIGH`, `MEDIUM`, or `LEARNING ONLY`. Items that materially affect ModernizeBench are highlighted and name the affected component and a concrete design response. When no major release appears, the edition teaches one durable evaluation concept and includes a learn-by-building exercise.

At 10:00 AM IST each day, the Daily Eval Ledger research watch checks primary sources and prepends a new issue to `site/assets/data.js`.

## Site structure

- `site/index.html` — public page
- `site/assets/data.js` — newsletter entries and curriculum
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `NEWSLETTER_ENTRY_TEMPLATE.md` — editorial schema

## Local preview

```bash
python -m http.server 8080 --directory site
```

Then open `http://localhost:8080`.
