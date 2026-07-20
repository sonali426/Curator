# ModernizeBench / The Eval Ledger

ModernizeBench is an evaluation and experimentation platform for reliable agentic software engineering. The first benchmark evaluates multi-agent legacy modernization from PHP to Spring Boot and React; the reusable product is the task, trace, grader, reliability, safety, and experiment infrastructure beneath it.

## Public site

- GitHub Pages: https://sonali426.github.io/Curator/
- Repository: https://github.com/sonali426/Curator

## Site structure

- `site/index.html` — concise curiosity-building homepage
- `site/project/index.html` — complete business and technical project brief
- `site/learn/index.html` — sequenced curriculum map
- `site/learn/module.html?id=<module>` — dedicated detail page for each of 27 modules
- `site/ledger/index.html` — daily Eval Ledger publication
- `site/assets/data.js` — newsletter and curriculum content
- `site/assets/styles.css` — shared design system
- `site/assets/site.js` — rendering, filtering, navigation, and theme behavior

## Editorial policy

Every Eval Ledger edition is classified as `CRITICAL`, `HIGH`, `MEDIUM`, or `LEARNING ONLY`. Material items name the affected ModernizeBench component and a concrete design response. Quiet days teach one durable evaluation concept and include a learn-by-building exercise.

## Local preview

```bash
python -m http.server 8080 --directory site
```

Open `http://localhost:8080`.
