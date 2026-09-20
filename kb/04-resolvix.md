---
id: resolvix
src: Resolvix
title: Resolvix — real-time voice agent
tags: voice agent langgraph deepgram groq agora asr tts realtime hackathon solo
---
Resolvix is a real-time voice AI agent Harsh built solo for the Build with Agora hackathon in August 2026. The stack is Agora RTC and Conversational AI Engine, LangGraph orchestration behind an OpenAI-compatible shim, Deepgram nova-3 speech recognition, a Groq-hosted LLM and Groq Orpheus text-to-speech. All four legs were live-tested: ASR, LLM, TTS and barge-in. The architecture is domain-swappable, proven with a campus pack and a clinic pack, with zero core edits enforced by import-linter.
