// harshgiri design system — core. Load in <head>, before any page script.
// Shared identity (one source for all three sites), reduced-motion flag, escaping, theme restore, analytics.
(() => {
  window.CONTENT = {
    name: "Harsh Giri",
    email: "2006.harshgiri@gmail.com",
    location: "Delhi, India",
    sites: { home: "https://harshgiri.site", resume: "https://resume.harshgiri.site", projects: "https://project.harshgiri.site" },
  };
  const q = new URLSearchParams(location.search).get("rm") === "1";
  if (q) document.documentElement.classList.add("rm");
  window.RM = q || matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  try { const t = localStorage.getItem("hg-theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
  // Google Analytics (existing property), loaded after the page is idle so it never competes with first paint.
  if (!/^(localhost|127\.|192\.168\.)/.test(location.hostname)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", "G-SFWR4T3NR4");
    addEventListener("load", () => setTimeout(() => { const s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=G-SFWR4T3NR4"; document.head.appendChild(s); }, 2500));
  }
})();
