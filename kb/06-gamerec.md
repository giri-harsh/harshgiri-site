---
id: gamerec
src: Game Recommender
title: AI-powered game recommendation engine — HNSW
tags: hnsw recommendation recommender knn cosine latency fast speed scale redis fastapi sla mlops production vercel
---
Harsh engineered a hybrid recommendation engine combining KNN and cosine similarity over 50,000+ game records, with HNSW indexing achieving under 35 ms query latency and 92% retrieval precision. Its production FastAPI backend sustains 1,000+ daily requests at a 99.5% SLA, with a Redis caching layer that reduced database load by 40% during peak traffic. An end-to-end MLOps pipeline with async REST endpoints cut cold-start inference time by 30% and improved throughput 3x under concurrent load. Live at game-recommeder.vercel.app.
