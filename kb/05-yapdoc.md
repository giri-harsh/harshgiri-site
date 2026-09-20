---
id: yapdoc
src: Yap-Doc
title: Yap-Doc — production RAG
tags: rag retrieval pdf faiss embeddings vector sentence transformers groq gemini fastapi render latency production
---
Yap-Doc is a production RAG application that turns PDFs into conversations. It uses FAISS vector search over local sentence-transformer embeddings, top-k semantic retrieval and prompt-grounded generation, with Groq and Google Gemini as dual LLM providers for fallback. It runs as a FastAPI backend on Render, averages about 1.2 seconds end-to-end, scored about 92% answer relevance on internal spot-checks, and handles 50+ page PDFs. Live at yap-doc.harshgiri.site.
