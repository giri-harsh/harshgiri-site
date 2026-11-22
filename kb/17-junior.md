---
id: junior
src: Junior ML Dev
title: junior-ml-dev — autonomous ML-engineer agent
tags: junior ml dev autonomous agent machine learning engineer tabular automl mcp model context protocol flaml lightgbm leakage planner state machine reviewer deploy approval injection guard sanitizer fastapi arq redis jwt opentelemetry prometheus grafana tests coverage live demo
---
junior-ml-dev is an autonomous ML-engineer agent Harsh built: it turns a dataset and a goal into a trained model, a report and a model card. It runs across 4 MCP servers with 15 tools, using an LLM planner, a checkpointed state machine, a deterministic reviewer and an approval-gated deploy, and completes end-to-end runs at 135 s p50 with resume-after-kill tested. A structural action guard and an untrusted-text sanitizer mean the LLM never reads dataset text: it proposed 0 of 49 attacker actions in real-LLM prompt-injection tests. On 10 frozen held-out tasks its models scored within 1.1% of FLAML AutoML, and its leakage detector hit 96.7% recall (29 of 30 planted bugs) at 0% false alarms (0 of 30). The API is FastAPI with an arq and Redis job queue, JWT auth, token-bucket rate limiting, idempotency keys and a dead-letter queue, instrumented with OpenTelemetry, Prometheus and Grafana. It has 497 tests at 92% coverage and served 210 ms p95 at 5 users and 75 RPS at 25 users. It is live at ml.harshgiri.site.
