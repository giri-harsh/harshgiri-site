// harshgiri design system — doodle icons + shared chrome. Exposes window.HG.
(() => {
  const P = (d) => `<path pathLength="1" d="${d}"/>`, Ci = (x, y, r) => `<circle pathLength="1" cx="${x}" cy="${y}" r="${r}"/>`;
  const ICON = {
    git: Ci(6, 5, 2.1) + Ci(6, 19, 2.1) + Ci(18, 7.5, 2.1) + P("M6 7.2c.3 3.3.1 6.7-.1 9.6") + P("M6.2 13.6c5.4-.1 11.4-.6 11.8-3.9"),
    bag: P("M4.2 8.3c5.3-.4 10.4-.3 15.6.1l-.4 10.8c-5 .5-10.1.4-14.9-.1z") + P("M9 8.1c-.2-1.6.3-3 1.4-3.1 1.3-.1 2.6 0 3.6.2.9.4.9 1.7.8 2.9") + P("M4.5 12.6c5 1.3 10 1.3 15 .1"),
    code: P("M9 4.5c-2.4.2-2.2 3.4-2.3 5.2-.1 1.4-1.2 2.1-2.4 2.3 1.3.3 2.3 1 2.4 2.5.1 1.8-.2 5 2.3 5") + P("M15 4.5c2.4.2 2.2 3.4 2.3 5.2.1 1.4 1.2 2.1 2.4 2.3-1.3.3-2.3 1-2.4 2.5-.1 1.8.2 5-2.3 5"),
    cup: P("M7.5 4.6c3-.2 6-.2 9 0-.2 4.6-1.3 7.6-4.5 7.9-3.3-.2-4.4-3.4-4.5-7.9z") + P("M7.6 6.3c-2.3-.4-3.4.8-3 2.2.4 1.6 2 2.3 3.6 2") + P("M16.4 6.3c2.3-.4 3.4.8 3 2.2-.4 1.6-2 2.3-3.6 2") + P("M12 12.6v4") + P("M8.6 19.4c2.3-.6 4.6-.6 6.9 0") + P("M9.5 16.8h5"),
    cam: P("M4.6 8.2c.2-1.4 1-2 2.3-2l1.4-.1 1.2-1.7c1.8-.2 3.5-.2 5.2.1l1.1 1.6h1.5c1.4 0 2.2.7 2.3 2.1.2 3.1.2 6.1 0 9.2-.1 1.3-.9 2-2.2 2.1-3.9.3-7.8.3-11.7 0-1.3-.1-2.1-.8-2.2-2.1-.2-3.1-.2-6.1.1-9.2z") + P("M12 16.3c2 0 3.4-1.5 3.3-3.4-.1-1.9-1.5-3.2-3.4-3.1-1.9.1-3.2 1.6-3.1 3.4.1 1.8 1.4 3.1 3.2 3.1z"),
    mail: P("M3.8 6.6c5.5-.4 11-.4 16.4 0 .3 3.6.3 7.2 0 10.8-5.5.4-10.9.4-16.4 0-.3-3.6-.3-7.2 0-10.8z") + P("M4 7c2.6 2.3 5.3 4.2 8.1 5.6 2.8-1.5 5.4-3.4 7.9-5.7"),
    doc: P("M6.3 3.8c3-.2 6-.2 8.8 0l3.3 3.4c.2 4.3.2 8.6-.1 12.9-4 .3-8 .3-12 0-.3-5.4-.3-10.8 0-16.3z") + P("M14.9 3.9c-.3 1.3-.2 2.4 0 3.5 1.2.1 2.3.1 3.4 0") + P("M8.8 11.5h6.4") + P("M8.8 14.6h6.4") + P("M8.8 17.5h3.8"),
    arrow: P("M5 18.6C9.2 14.3 13.4 10 18.2 5.8") + P("M10.6 5.4c2.6-.2 5.1-.1 7.6.4.4 2.4.5 4.9.3 7.4"),
    trophy: P("M7.5 4.6c3-.2 6-.2 9 0-.2 4.6-1.3 7.6-4.5 7.9-3.3-.2-4.4-3.4-4.5-7.9z") + P("M12 12.6v4") + P("M8.6 19.4c2.3-.6 4.6-.6 6.9 0"),
    search: Ci(10.5, 10.5, 6) + P("M15 15.2c1.6 1.5 3.1 3 4.6 4.6"),
    close: P("M6 6.2c4 3.8 8 7.8 12 11.8") + P("M18 6c-4 4-8 8-12 12.2"),
    grid: P("M4.5 4.6h6v6h-6z") + P("M13.5 4.4h6v6.2h-6z") + P("M4.4 13.5h6.2v6h-6.2z") + P("M13.6 13.4h6v6.1h-6z"),
    list: P("M4 6.2c5.4-.2 10.7-.2 16 0") + P("M4 12c5.4.2 10.7.2 16 0") + P("M4 17.8c5.4-.2 10.7-.2 16 0"),
    left: P("M15 5.2C12.5 7.4 10 9.7 7.6 12c2.4 2.3 4.9 4.6 7.4 6.8"), right: P("M9 5.2c2.5 2.2 5 4.5 7.4 6.8-2.4 2.3-4.9 4.6-7.4 6.8"),
      sat: P("M9.6 9.8c1.5-1.4 3-1.4 4.5 0 1.4 1.5 1.4 3 0 4.5-1.5 1.4-3 1.4-4.5 0-1.4-1.5-1.4-3 0-4.5z") + P("M9.4 9.6 5.2 5.4l-2 2 4.2 4.2") + P("M14.4 14.4l4.2 4.2 2-2-4.2-4.2") + P("M15.5 6.2c1.3.3 2 1 2.3 2.3") + P("M15.7 3.6c2.5.5 4.2 2.2 4.7 4.7"),
    mic: P("M12 3.6c1.7 0 2.7 1.1 2.7 2.8v5c0 1.8-1 2.9-2.7 2.9s-2.8-1.1-2.8-2.9v-5c0-1.7 1.1-2.8 2.8-2.8z") + P("M6.4 11.2c.1 3.5 2.3 5.7 5.6 5.8 3.3-.1 5.5-2.3 5.6-5.8") + P("M12 17.2v3.4") + P("M8.8 20.6h6.4"),
    shield: P("M12 3.4c2.6 1.3 5 1.9 7.3 2-.1 6.6-2.6 11.2-7.3 14.2C7.3 16.6 4.8 12 4.7 5.4c2.3-.1 4.7-.7 7.3-2z") + P("M8.7 12.1l2.3 2.3 4.4-4.6"),
    spark: P("M12 3.2c.6 4.3 2.3 6.2 6.7 6.9-4.4.6-6.1 2.5-6.7 6.8-.6-4.3-2.4-6.2-6.8-6.8 4.4-.7 6.2-2.6 6.8-6.9z") + P("M18.6 15.8c.3 1.6.9 2.3 2.4 2.5-1.5.3-2.1.9-2.4 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.2 2.2-.9 2.5-2.5z"),
    phone: P("M7.3 3.6c3.2-.3 6.3-.3 9.4 0 .4 5.6.4 11.2 0 16.8-3.1.3-6.2.3-9.4 0-.4-5.6-.4-11.2 0-16.8z") + P("M10.6 17.6h2.8") + P("M9.8 5.8c1.5.1 2.9.1 4.4 0"),
    pencil: P("M15.2 4.4c1.2-.9 2.4-.8 3.4.2 1 1.1 1.1 2.3.2 3.4L8.4 18.4l-4 1.2 1.2-4z") + P("M13.6 6.2l4.2 4.2"),
    badge: Ci(12, 9.5, 5.2) + P("M9.2 14l-1.6 6.4 4.4-2.2 4.4 2.2-1.6-6.4") + P("M10 9.6l1.4 1.4 2.8-2.8"),
    graph: Ci(12, 5, 2.2) + Ci(5, 18, 2.2) + Ci(19, 18, 2.2) + P("M11 7 6 16") + P("M13 7l5 9") + P("M7.2 18.2c3.2.2 6.4.2 9.6-.1"),
    layers: P("M12 3.8 20.4 8 12 12.3 3.6 8z") + P("M3.8 12.1 12 16.3l8.2-4.2") + P("M3.8 16.1 12 20.3l8.2-4.2"),
    bolt: P("M13.4 3.2 5.6 13.4h5.8l-1.2 7.4 8.2-10.6h-6z"),
  };
  const dd = (k) => `<svg class="dd" viewBox="0 0 24 24" aria-hidden="true">${ICON[k] || ""}</svg>`;
  const glyph = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="2.6"/><circle cx="5" cy="18" r="2.6"/><circle cx="19" cy="18" r="2.6"/><path d="M12 5 5 18M12 5l7 13M5 18h14" stroke-width="1.6" fill="none"/></svg>`;
  const squig = `<svg viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M2 5c10-4 16 3 26 0s16-4 26-1 16 3 26 0 12-3 18-1"/></svg>`;
  const PROFILES = [["GitHub", "giri-harsh", "https://github.com/giri-harsh", "git"], ["LinkedIn", "in/giri-harsh", "https://linkedin.com/in/giri-harsh", "bag"], ["LeetCode", "Harsh-Giri", "https://leetcode.com/u/Harsh-Giri/", "code"], ["HackerRank", "giri_harsh", "https://www.hackerrank.com/profile/giri_harsh", "cup"], ["Instagram", "pseudo_harsh", "https://www.instagram.com/pseudo_harsh/", "cam"]];
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function chrome({ nav, active, email }) {
    const fine = matchMedia("(pointer: fine)").matches;
    if (fine) document.documentElement.classList.add("fine");
    document.body.insertAdjacentHTML("afterbegin", `
      <div class="dot" id="dot" aria-hidden="true"></div>
      <header class="top"><a class="logo" href="${nav[0][1]}" aria-label="Harsh Giri — home">${glyph}</a>
        <div class="r"><button class="theme" id="theme" type="button" aria-label="Toggle dark mode"><i></i><span id="tlabel">Dark</span></button>
        <nav class="navl" aria-label="Site">${nav.map(([t, h]) => `<a href="${h}" data-s="${t}" class="${t === active ? "on" : ""}">${t}${squig}</a>`).join("")}</nav></div></header>
      <nav class="side draw" aria-label="Profiles">${PROFILES.map(([t, , u, k]) => `<a class="pop" href="${u}" target="_blank" rel="noopener" aria-label="${t}"><span class="ico">${dd(k)}</span><span class="lab">${t}</span></a>`).join("")}<a class="pop" href="mailto:${email}" aria-label="Email"><span class="ico">${dd("mail")}</span><span class="lab">Email</span></a></nav>`);
    const setTheme = (t) => { document.documentElement.dataset.theme = t; $("#tlabel").textContent = t === "dark" ? "Light" : "Dark"; try { localStorage.setItem("hg-theme", t); } catch (e) {} };
    setTheme(document.documentElement.dataset.theme || "light");
    $("#theme").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
    tone();
    if (fine && window.gsap && !window.RM) {
      const dot = $("#dot"), qx = gsap.quickTo(dot, "x", { duration: .35, ease: "power3" }), qy = gsap.quickTo(dot, "y", { duration: .35, ease: "power3" });
      addEventListener("pointermove", (ev) => { qx(ev.clientX); qy(ev.clientY); }, { passive: true });
      document.addEventListener("pointerover", (ev) => { const hit = ev.target.closest("a, button, summary, [data-hover]"); gsap.to(dot, { scale: hit ? 2.2 : 1, duration: .3 }); });
      const chars = "AGENTRAG01<>/*";
      $$("[data-s]").forEach((a) => { const txt = a.dataset.s; let iv; a.addEventListener("pointerenter", () => { clearInterval(iv); let f = 0; iv = setInterval(() => { a.firstChild.textContent = txt.split("").map((c, i) => (i < f / 2 ? c : chars[(Math.random() * chars.length) | 0])).join(""); if (++f > txt.length * 2) { clearInterval(iv); a.firstChild.textContent = txt; } }, 28); }); a.addEventListener("pointerleave", () => { clearInterval(iv); a.firstChild.textContent = txt; }); });
    }
  }
  // Fixed chrome recolours to match the section underneath it (sections declare data-tone="ink|lime").
  let toneOn = false;
  function tone() {
    if (toneOn) return; toneOn = true; let raf = 0;
    const check = () => { raf = 0; const el = document.elementsFromPoint(innerWidth - 120, 28).find((n) => n.dataset && n.dataset.tone); const t = el ? el.dataset.tone : "paper"; document.body.classList.toggle("tone-ink", t === "ink"); document.body.classList.toggle("tone-lime", t === "lime"); };
    let idle = 0;
    addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(check); clearTimeout(idle); idle = setTimeout(check, 140); }, { passive: true });
    addEventListener("resize", check); check();
  }
  function magnet(els) { if (!matchMedia("(pointer: fine)").matches || !window.gsap || window.RM) return; els.forEach((m) => { const mx = gsap.quickTo(m, "x", { duration: .5, ease: "elastic.out(1,.4)" }), my = gsap.quickTo(m, "y", { duration: .5, ease: "elastic.out(1,.4)" }); m.addEventListener("pointermove", (ev) => { const b = m.getBoundingClientRect(); mx((ev.clientX - b.left - b.width / 2) * .3); my((ev.clientY - b.top - b.height / 2) * .35); }); m.addEventListener("pointerleave", () => { mx(0); my(0); }); }); }
  function fit() { $$(".fit").forEach((h) => { h.style.fontSize = ""; let fs = parseFloat(getComputedStyle(h).fontSize), g = 0; while (h.scrollWidth > h.clientWidth + 1 && fs > 20 && g++ < 80) { fs -= 1; h.style.fontSize = fs + "px"; } }); }
  window.HG = { ICON, dd, glyph, squig, PROFILES, chrome, tone, magnet, fit, $, $$, esc };
})();
