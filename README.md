# harshgiri.site

Portfolio of Harsh Giri — agentic AI, RAG and production ML — with an in-page RAG agent you can question.
This repo is also the **single source of the shared design system** used by
[project.harshgiri.site](https://project.harshgiri.site) and [resume.harshgiri.site](https://resume.harshgiri.site).

```
ds/            design system source → published at https://harshgiri.site/ds/v1/
  core.js        identity (email, links, sites), reduced-motion flag, theme restore, analytics
  hg.css         tokens (type, palette, spacing, easing), light/dark themes, doodle icons, chrome, buttons
  hg.js          doodle icon set, shared header/side-rail chrome, tone-aware chrome, magnet, fit-text
src/           the site (hand-authored HTML, GSAP + ScrollTrigger + SplitText, Lenis)
  rag-core.js    guardrail patterns, tokenizer, synonyms — shared by the browser agent and the API
  kb.js          GENERATED from kb/*.md
kb/            the agent's knowledge base — one markdown file per fact chunk (see kb/README.md)
api/           Vercel functions: /api/health, /api/ask (Groq, server-side guard, KB-only context)
lib/llm.js     generation + rate limit, shared by api/ and the local server
scripts/       build (→ dist/, publishes ds/v1 with fonts + manifest), local serve, kb compiler
```

## Run locally

```bash
npm ci
npm run dev          # build + serve → http://localhost:5170
```

The agent works without any key (local extractive answers with citation + number checks).
To use the LLM path, set `GROQ_API_KEY` (and optionally `GROQ_MODEL`, default `llama-3.3-70b-versatile`)
in your shell locally, or in Vercel → Project → Settings → Environment Variables. The key never reaches the browser:
the client sends only the question and the ids of the chunks it retrieved; the server looks the text up itself.

## Design system changes

Edit `ds/`, deploy this repo, then redeploy the other two sites — their build pulls `https://harshgiri.site/ds/v1/manifest.json`.
Breaking changes go to a new `/ds/v2/` path so older builds keep working.
