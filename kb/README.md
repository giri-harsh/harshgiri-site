# Knowledge base for the "Ask my agent" RAG demo

One markdown file per fact chunk. The agent answers **only** from these files, and its output guard
rejects any sentence or number that is not in the cited chunk — so everything here must be true.

```md
---
id: short-unique-id        # used for citations and deep links
src: Short source label    # shown in the rerank trace
title: Human title
tags: extra keywords that help retrieval
---
One paragraph of plain facts, written in the third person.
```

After editing, run `npm run kb` (also runs automatically in `npm run build`) — it regenerates `src/kb.js`,
which both the browser agent and `api/ask.js` read. Commit the regenerated file.
