// Local server for dist/ + the same /api routes Vercel runs.   npm run build && npm run serve  → http://localhost:5170
// Optional: set GROQ_API_KEY in your shell to exercise the real LLM path. The key never reaches the browser.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { answer, enabled, limited, MODEL } from "../lib/llm.js";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = Number(process.env.PORT) || 5170;
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "application/xml", ".pdf": "application/pdf" };
const json = (res, code, body) => { res.writeHead(code, { "Content-Type": "application/json", "Cache-Control": "no-store" }); res.end(JSON.stringify(body)); };

http.createServer(async (req, res) => {
  const u = new URL(req.url, "http://x");
  if (u.pathname === "/api/health") return json(res, 200, { llm: enabled(), model: enabled() ? MODEL : null });
  if (u.pathname === "/api/ask") {
    if (req.method !== "POST") return json(res, 405, { error: "method_not_allowed" });
    if (limited(req.socket.remoteAddress)) return json(res, 429, { error: "rate_limited" });
    let body = ""; for await (const c of req) { body += c; if (body.length > 4000) return json(res, 413, { error: "too_large" }); }
    try { body = JSON.parse(body); } catch { return json(res, 400, { error: "bad_json" }); }
    const [s, out] = await answer(body); return json(res, s, out);
  }
  let p = decodeURIComponent(u.pathname); if (p.endsWith("/")) p += "index.html";
  let f = path.join(dist, path.normalize(p));
  if (!f.startsWith(dist)) { res.writeHead(403); return res.end(); }
  if (!fs.existsSync(f) && fs.existsSync(f + ".html")) f += ".html";
  fs.readFile(f, (err, buf) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }); return res.end(fs.existsSync(path.join(dist, "404.html")) ? fs.readFileSync(path.join(dist, "404.html")) : "not found"); }
    const h = { "Content-Type": types[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-cache" };
    if (p.startsWith("/ds/")) h["Access-Control-Allow-Origin"] = "*";
    res.writeHead(200, h); res.end(buf);
  });
}).listen(PORT, () => console.log(`harshgiri.site → http://localhost:${PORT}   (LLM: ${enabled() ? MODEL : "off — extractive fallback"})`));
