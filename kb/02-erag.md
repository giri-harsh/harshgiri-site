---
id: erag
src: Enterprise RAG
title: Enterprise-grade agentic RAG — guardrailed Q&A over technical docs
tags: rag agentic enterprise langgraph qdrant nemo guardrails jailbreak injection fastapi cloud run portkey ragas evaluation rerank cross-encoder onnx gemini mpnet embeddings llama ci tests production
---
Harsh engineered a guardrailed agentic RAG service on FastAPI and LangGraph. Each turn is routed through a typed-intent state machine with conditional edges, LLM query rewriting for multi-turn coreference and a thread-scoped checkpointer. A fail-closed NeMo Guardrails (Colang) gate on Llama-3.1-8B blocks jailbreaks and off-topic input before any embedding, vector search or 70B call. Retrieval is two-stage: Qdrant cosine ANN top-15, then a quantised ONNX cross-encoder rerank to the top-5, over a 64-document corpus seeded with 57 distractor files. A dual-backend abstraction swaps 3072-dim Gemini and 768-dim MPNet embeddings, and Qdrant Cloud or an embedded index, from one config flag. It is deployed on Cloud Run as a non-root container with API-key auth and a CORS allowlist, behind a Portkey gateway for 70B to 8B fallback, response caching and retry on 429 and 503. It is traced with Logfire and LangSmith and evaluated with a RAGAS suite (faithfulness, context precision and recall, answer correctness) gated by GitHub Actions CI running 82 unit tests.
