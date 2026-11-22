---
id: breach
src: BreachLab
title: BreachLab — fine-tuned prompt-injection guard and jailbreak game
tags: breachlab breach lab guard prompt injection jailbreak llm security fine-tune fine-tuned lora peft trl sft qwen qwen3 onnx int4 quantization serverless mlflow game next.js groq asr fpr auroc prompt-guard deberta hindi hinglish live demo
---
BreachLab is a fine-tuned prompt-injection guard plus a jailbreak game. Harsh fine-tuned Qwen3-0.6B with LoRA (r=16, alpha=32) through TRL SFT on 19,330+ labeled benign and adversarial examples, including encoded, Hindi and Hinglish attacks. It cut the attack success rate from 100% to 0.59% at a 2.08% false-positive rate and 0.999 AUROC on a 1,500-item in-distribution gold set, where Meta Prompt-Guard scored 51.6% attack success and DeBERTa 10.4%. Single-pass verbalizer classification, INT4 weight-only ONNX quantization and prefix-KV caching fit it in a 2 GB CPU serverless limit (FP32 was 2,384 MB) at 720 ms p50 on 1 vCPU; dynamic INT8 was rejected because it raised the false-positive rate 10x, from 2.3% to 24.3%. The 5-level jailbreak game (Next.js, FastAPI, Groq) fails closed when the guard is down and leaked 0 of 216 template-based attacks per guarded level (levels 2 to 5). Detected leaks feed retraining, and validated models are promoted through the MLflow Model Registry. It is live at breach.harshgiri.site.
