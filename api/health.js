import { enabled, MODEL } from "../lib/llm.js";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ llm: enabled(), model: enabled() ? MODEL : null });
}
