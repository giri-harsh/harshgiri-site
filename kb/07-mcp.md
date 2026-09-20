---
id: mcp
src: MCP benchmark
title: MCP transport benchmark
tags: mcp model context protocol server benchmark stateless stateful load balancer transport
---
Harsh builds MCP servers. In August 2026 he ran a 30-iteration benchmark comparing the legacy stateful MCP transport with the new stateless spec dated 2026-07-28. The legacy transport was about 11% faster on loopback but failed behind a load balancer; the stateless transport succeeded 100% of the time at every concurrency level.
