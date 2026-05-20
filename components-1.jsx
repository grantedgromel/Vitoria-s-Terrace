// Vitoria's Terrace — page sections
// Globally exposes: VTNav, VTHero, VTStory, VTApartments, VTGallery,
//                   VTPorto, VTAmenities, VTExperiences, VTReviews, VTFooter

const { useState, useEffect, useRef, useMemo } = React;

// ── Reveal hook ─────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ── Section header ─────────────────────────────────────
function SecHead({ num, label, title }) {
  const ref = useReveal();
  return (
    <div className="sec-head reveal" ref={ref}>
      <div className="eyebrow" style={{ marginBottom: 18 }}>{label}</div>
      <h2 className="display-md" style={{ whiteSpace: "pre-line" }}>{title}</h2>
    </div>
  );
}

// ── NAV ─────────────────────────────────────────────────
// `currentPage` is "home" or "recs". Anchors that target home sections (stays/story/
// porto/contact) need an `index.html` prefix when we're on a non-home page; the
// Recommendations link always points at `recommendations.html`. The Recommendations
// item also gets an active-state visual when we're already on its page.
function VTNav({ t, lang, onLang, onBook, scrolled, currentPage }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const isHome = currentPage !== "recs";
  const homePrefix = isHome ? "" : "index.html";
  const recsHref = isHome ? "recommendations.html" : "#";   // already on recs → no-op anchor
  const recsActive = currentPage === "recs";

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    transition: "background 0.4s ease, color 0.4s ease, border-color 0.4s ease",
    background: scrolled ? "rgba(250, 248, 244, 0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid var(--rule-soft)" : "1px solid transparent",
    color: scrolled ? "var(--ink)" : "var(--bone)",
  };

  // Desktop nav links: tracked sans, eyebrow register. Aman/Cheval Blanc convention.
  const link = {
    fontFamily: "var(--sans)",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase"
  };
  const recsLink = recsActive
    ? { ...link, color: "var(--porto)", borderBottom: "1px solid currentColor", paddingBottom: 4 }
    : link;
  const navBtn = {
    fontFamily: "var(--sans)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  };

  // Wordmark anchor: home page → top of page, recs page → home root
  const logoHref = isHome ? "#top" : "index.html";

  return (
    <nav style={navStyle}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingBlock: scrolled ? 18 : 26, transition: "padding 0.3s ease"
      }}>
        <a href={logoHref} style={{ display: "flex", alignItems: "center", lineHeight: 0 }} aria-label="Vitória's Terrace">
          <img src="assets/logo.png" alt="Vitória's Terrace"
            style={{
              height: scrolled ? "clamp(44px, 8vw, 56px)" : "clamp(36px, 6vw, 44px)",
              width: "auto", display: "block",
              filter: scrolled ? "none" : "invert(1) brightness(1.05)",
              transition: "filter 0.4s ease, height 0.5s var(--ease-out-soft)"
            }} />
        </a>

        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <a href={`${homePrefix}#stays`} style={link}>{t.nav.stays}</a>
          <a href={`${homePrefix}#story`} style={link}>{t.nav.story}</a>
          <a href={`${homePrefix}#porto`} style={link}>{t.nav.porto}</a>
          <a href={recsHref} style={recsLink} aria-current={recsActive ? "page" : undefined}>{t.nav.recs}</a>
          <a href={`${homePrefix}#contact`} style={link}>{t.nav.contact}</a>

          <div style={{ position: "relative" }}>
            <button onClick={() => setLangOpen(!langOpen)} aria-label="Language" aria-expanded={langOpen}
              style={{ ...navBtn, display: "flex", alignItems: "center", gap: 6, padding: "12px 8px", minHeight: 44 }}>
              {lang} <span style={{ fontSize: 8, opacity: 0.6 }}>▾</span>
            </button>
            {langOpen && (
              <div style={{
                position: "absolute", right: 0, top: "calc(100% + 12px)",
                background: "var(--paper)", border: "1px solid var(--rule)",
                padding: "8px 0", minWidth: 120, color: "var(--ink)"
              }}>
                {["EN", "PT", "ES", "FR", "KO", "JA"].map((l) => (
                  <button key={l}
                    onClick={() => { onLang(l); setLangOpen(false); }}
                    style={{
                      display: "block", width: "100%", textAlign: "left", padding: "8px 16px",
                      ...navBtn, fontWeight: l === lang ? 600 : 400,
                      color: l === lang ? "var(--porto)" : "var(--ink)"
                    }}>
                    {({ EN: "English", PT: "Português", ES: "Español", FR: "Français", KO: "한국어", JA: "日本語" })[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="btn btn--sm" onClick={onBook}
            style={{
              borderColor: scrolled ? "var(--ink)" : "var(--bone)",
              color: scrolled ? "var(--ink)" : "var(--bone)"
            }}>
            {t.nav.book} <span className="arr"></span>
          </button>
        </div>

        <button className="show-mobile" onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
          style={{ ...navBtn, padding: "12px 14px", minHeight: 44 }}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="show-mobile" style={{
          position: "fixed",
          inset: 0,
          background: "var(--paper)",
          color: "var(--ink)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          padding: "clamp(96px, 14vh, 140px) clamp(24px, 6vw, 48px) clamp(32px, 6vh, 56px)",
          overflowY: "auto"
        }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
            {[
              [`${homePrefix}#stays`, t.nav.stays, false],
              [`${homePrefix}#story`, t.nav.story, false],
              [`${homePrefix}#porto`, t.nav.porto, false],
              [recsHref, t.nav.recs, recsActive],
              [`${homePrefix}#contact`, t.nav.contact, false]
            ].map(([h, l, active]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(36px, 9vw, 56px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: active ? "var(--porto)" : "var(--ink)"
                }}>
                {l}
              </a>
            ))}
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 28,
            borderTop: "1px solid var(--rule-soft)"
          }}>
            {["EN", "PT", "ES", "FR", "KO", "JA"].map((l) => (
              <button key={l}
                onClick={() => { onLang(l); setOpen(false); }}
                aria-label={({ EN: "English", PT: "Português", ES: "Español", FR: "Français", KO: "한국어", JA: "日本語" })[l]}
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(20px, 5vw, 26px)",
                  fontWeight: l === lang ? 500 : 300,
                  color: l === lang ? "var(--ink)" : "var(--granite-2)",
                  padding: 4,
                  minHeight: 44
                }}>
                {l}
              </button>
            ))}
          </div>

          <button className="btn btn--primary"
            onClick={() => { onBook(); setOpen(false); }}
            style={{ width: "100%", justifyContent: "center" }}>
            {t.nav.book}
          </button>
        </div>
      )}
    </nav>
  );
}

// ── HERO ────────────────────────────────────────────────
function VTHero({ t, onBook }) {
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.2);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" style={{ position: "relative", minHeight: "100vh", overflow: "hidden", color: "var(--bone)" }}>
      <div style={{ position: "absolute", inset: 0, transform: `translateY(${parallax}px) scale(1.05)`, transition: "transform 0.05s linear" }}>
        <img src="assets/porto-view.jpg" alt="" className="img-cover" style={{ height: "100%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,18,15,0.5) 0%, rgba(20,18,15,0.2) 40%, rgba(20,18,15,0.55) 100%)" }} />
      </div>

      <div className="container" style={{
        position: "relative", minHeight: "100vh",
        display: "grid", gridTemplateRows: "1fr auto",
        paddingTop: "clamp(120px, 18vh, 168px)",
        paddingBottom: "clamp(40px, 7vh, 72px)",
        gap: "clamp(48px, 8vh, 96px)"
      }}>
        <div style={{ alignSelf: "center", width: "100%" }}>
          <h1 className="display-xl" style={{ fontStyle: "italic", letterSpacing: "-0.025em", whiteSpace: "pre-line", textShadow: "0 2px 24px rgba(20,18,15,0.4), 0 0 8px rgba(20,18,15,0.2)" }}>
            {t.hero.title}
          </h1>
          <p className="body-lg" style={{ color: "rgba(250,248,244,0.9)", maxWidth: 540, marginTop: 36, textShadow: "0 1px 12px rgba(20,18,15,0.35)" }}>
            {t.hero.sub}
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 44, flexWrap: "wrap" }}>
            <button className="btn btn--ghost" onClick={onBook} style={{ background: "var(--bone)", color: "var(--ink)", borderColor: "var(--bone)" }}>
              {t.hero.cta} <span className="arr"></span>
            </button>
            <a href="#stays" className="btn btn--ghost">
              {t.hero.ctaAlt}
            </a>
          </div>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85
        }}>
          <div>41.143° N · 8.614° W</div>
          <div>MMXXVI</div>
        </div>
      </div>
    </header>
  );
}

// ── STORY ───────────────────────────────────────────────
function VTStory({ t }) {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  return (
    <section id="story" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <SecHead num={t.secStory.num} label={t.secStory.label} title={t.secStory.title} />

        <div className="vt-story-grid">
          <div ref={r1} className="reveal">
            <div className="img-frame" style={{ aspectRatio: "4/5" }}>
              <img src="assets/doors.jpg" alt={t.storyCaption} className="img-cover" />
            </div>
            <p className="cap">{t.storyCaption}</p>
          </div>

          <div ref={r2} className="reveal" style={{ paddingTop: 32 }}>
            <div style={{ display: "grid", gap: 20, color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.7 }}>
              {t.storyBody.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div ref={r3} className="reveal vt-heritage-grid" style={{ marginTop: 56 }}>
              {t.storyHeritage.map(([k, v], i) => (
                <div key={i}>
                  <div className="serif" style={{ fontSize: 32, fontStyle: "italic", letterSpacing: "-0.01em" }}>{k}</div>
                  <div className="eyebrow" style={{ marginTop: 6, fontSize: 10 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── APARTMENTS ──────────────────────────────────────────
function VTApartments({ t, lang, onBook }) {
  const [active, setActive] = useState("penthouse");
  const apts = VT_DATA.apartments;
  const apt = apts.find(a => a.id === active);
  const ref = useReveal();
  const tx = (a) => (a.i18n[lang] || a.i18n.EN);
  const aptT = tx(apt);

  return (
    <section id="stays" className="section" style={{ background: "var(--bone)" }}>
      <div className="container">
        <SecHead num={t.secStay.num} label={t.secStay.label} title={t.secStay.title} />

        {/* tabs */}
        <div ref={ref} className="reveal" style={{
          display: "flex", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
          marginBottom: 56, overflowX: "auto", scrollSnapType: "x mandatory"
        }}>
          {apts.map((a) => (
            <button key={a.id}
              onClick={() => setActive(a.id)}
              style={{
                flex: "1 1 0", minWidth: 160, textAlign: "left",
                padding: "clamp(18px, 4vw, 26px) clamp(16px, 3vw, 24px)",
                background: active === a.id ? "var(--ink)" : "transparent",
                color: active === a.id ? "var(--bone)" : "var(--ink)",
                borderRight: "1px solid var(--rule)",
                transition: "background 0.4s ease, color 0.4s ease",
                scrollSnapAlign: "start",
              }}>
              <div className="numeral" style={{ color: active === a.id ? "var(--ochre)" : "var(--ochre-deep)", marginBottom: 6 }}>
                № {a.number}
              </div>
              <div className="serif" style={{ fontSize: 22, fontStyle: "italic", marginBottom: 4 }}>{tx(a).name}</div>
              <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: "0.05em" }}>
                {a.sleeps} {t.apt.guests} · {a.sqm}m² · {t.apt.from} €{a.price}
              </div>
            </button>
          ))}
        </div>

        {/* content */}
        <div key={apt.id} className="vt-apt-content" style={{ animation: "fadeUp 0.7s ease" }}>
          <div>
            <div className="img-frame" style={{ aspectRatio: "4/3", marginBottom: 12 }}>
              <img key={apt.images[0]} src={apt.images[0]} alt={aptT.name} className="img-cover"
                style={{ animation: "fadeIn 0.7s ease" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {apt.images.slice(1, 4).map((src, i) => (
                <div key={src} className="img-frame" style={{ aspectRatio: "1/1" }}>
                  <img src={src} alt="" className="img-cover" />
                </div>
              ))}
            </div>
          </div>

          <div style={{ paddingTop: 8 }}>
            <div className="eyebrow" style={{ color: "var(--ochre-deep)", marginBottom: 18 }}>
              № {apt.number} · {aptT.tagline}
            </div>
            <h3 className="display-md" style={{ marginBottom: 28 }}>{aptT.name}</h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 28, rowGap: 12, paddingBlock: 20, borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", marginBottom: 28, fontSize: 13, color: "var(--ink-soft)" }}>
              <span><strong style={{ color: "var(--ink)" }}>{apt.sleeps}</strong> {t.apt.guests}</span>
              <span><strong style={{ color: "var(--ink)" }}>{apt.beds}</strong> {apt.beds > 1 ? t.apt.beds : t.apt.bed}</span>
              <span><strong style={{ color: "var(--ink)" }}>{apt.baths}</strong> {apt.baths > 1 ? t.apt.baths : t.apt.bath}</span>
              <span><strong style={{ color: "var(--ink)" }}>{apt.sqm}</strong> m²</span>
            </div>

            <p className="body-lg" style={{ marginBottom: 32 }}>{aptT.description}</p>

            <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px 24px", marginBottom: 36 }}>
              {aptT.features.map((f) => (
                <li key={f} style={{ fontSize: 14, color: "var(--ink-soft)", display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ width: 4, height: 4, background: "var(--ochre)", transform: "rotate(45deg)", flexShrink: 0, marginTop: 8 }}></span>
                  {f}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingTop: 28, borderTop: "1px solid var(--rule)" }}>
              <div>
                <div className="serif" style={{ fontSize: 36, lineHeight: 1 }}>€{apt.price}</div>
                <div className="eyebrow" style={{ marginTop: 6, fontSize: 10 }}>{t.apt.perNight}</div>
              </div>
              <button className="btn btn--primary" onClick={() => onBook(apt.id)}>
                {t.apt.reserve} № {apt.number} <span className="arr"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
}

Object.assign(window, {
  VTNav, VTHero, VTStory, VTApartments, useReveal, SecHead
});
