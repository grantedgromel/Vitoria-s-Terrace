// Vitoria's Terrace — page sections part 2
// Globally exposes: VTPorto, VTAmenities, VTReviews, VTFooter, VTBookingModal


// ── PORTO / Location ────────────────────────────────────
function VTPorto({ t }) {
  return (
    <section id="porto" className="section" style={{ background: "var(--ink)", color: "var(--bone)" }}>
      <div className="container">
        <div className="sec-head reveal" ref={useReveal()}>
          <div className="num" style={{ color: "var(--ochre)" }}>{t.secPorto.num}</div>
          <div>
            <div className="eyebrow" style={{ color: "var(--ochre)", marginBottom: 18 }}>{t.secPorto.label}</div>
            <h2 className="display-md" style={{ whiteSpace: "pre-line", color: "var(--bone)" }}>{t.secPorto.title}</h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)", gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }}>
          <div className="img-frame" style={{ aspectRatio: "4/3", width: "100%" }}>
            <img src="assets/porto-view.jpg" alt="" className="img-cover" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <p className="display-sm" style={{ color: "var(--bone)", fontWeight: 300, textWrap: "balance" }}>
              {t.portoLead}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(250,248,244,0.15)" }}>
              {t.walkingDistances.map(([k, v], i) => (
                <div key={i} style={{ background: "var(--ink)", padding: "20px 24px" }}>
                  <div className="serif italic" style={{ fontSize: 26, color: "var(--ochre)" }}>{k}</div>
                  <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginTop: 4 }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: 24, borderTop: "1px solid rgba(250,248,244,0.15)" }}>
              <div className="eyebrow" style={{ color: "var(--ochre)", marginBottom: 12 }}>{t.portoAddressLabel}</div>
              <div className="serif" style={{ fontSize: 22, fontStyle: "italic" }}>{VT_DATA.meta.address}</div>
              <div style={{ fontSize: 12, opacity: 0.6, marginTop: 8, fontFamily: "var(--mono)" }}>{VT_DATA.meta.coords}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── AMENITIES ───────────────────────────────────────────
function VTAmenities({ t }) {
  return (
    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: "clamp(32px, 5vw, 96px)" }}>
          <div>
            <SecHead num={t.secAmen.num} label={t.secAmen.label} title={t.secAmen.title} />
            <p className="body-lg" style={{ maxWidth: 380 }}>
              {t.amenitiesIntro}
            </p>
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--rule)", border: "1px solid var(--rule)" }}>
              {t.amenities.map((a, i) => (
                <div key={i} style={{ background: "var(--paper)", padding: "26px 28px" }}>
                  <div className="numeral" style={{ marginBottom: 8 }}>{String(i + 1).padStart(2, "0")}</div>
                  <div className="serif" style={{ fontSize: 22, marginBottom: 4 }}>{a.label}</div>
                  <div className="body" style={{ fontSize: 13 }}>{a.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── REVIEWS — real scores grid + real quotes carousel ──
function VTReviews({ t }) {
  const scores = VT_DATA.reviewScores;
  const quotes = VT_DATA.reviewQuotes;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalCount = scores.reduce((s, x) => s + (x.count || 0), 0);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((x) => (x + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, [quotes.length, paused]);

  const goPrev = () => setI((x) => (x - 1 + quotes.length) % quotes.length);
  const goNext = () => setI((x) => (x + 1) % quotes.length);

  return (
    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <SecHead num={t.secReviews.num} label={t.secReviews.label} title={t.secReviews.title} />

        {/* Scores grid — one tile per platform, consistent layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 1,
          background: "var(--rule)",
          border: "1px solid var(--rule)",
          marginBottom: 64
        }}>
          {scores.map((s, k) => (
            <a key={s.platform} href={s.url} target="_blank" rel="noopener"
              style={{ background: "var(--paper)", padding: "28px 28px 24px", display: "flex", flexDirection: "column", gap: 14, position: "relative", transition: "background 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--bone-2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--paper)"}>
              <div className="eyebrow" style={{ color: "var(--ochre-deep)" }}>{s.platform}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span className="serif italic" style={{ fontSize: 56, lineHeight: 0.95, letterSpacing: "-0.01em" }}>{s.score}</span>
                <span className="serif" style={{ fontSize: 18, color: "var(--granite)", fontStyle: "italic" }}>/ {s.outOf}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--ochre-deep)" }}>
                {"★★★★★".split("").map((c, j) => <span key={j} style={{ fontSize: 11 }}>{c}</span>)}
                <span style={{ fontSize: 11, color: "var(--granite)", marginLeft: 4 }}>· {s.count.toLocaleString()} {s.count === 1 ? t.reviews.reviewsLabelOne : t.reviews.reviewsLabel}</span>
              </div>
              <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--rule-soft)" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, color: "var(--porto)", marginBottom: 4 }}>{s.badge}</div>
                <div className="body" style={{ fontSize: 11, color: "var(--granite)" }}>{s.subtitle}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Aggregate strip */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          padding: "28px 0", marginBottom: 56,
          borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
          flexWrap: "wrap", gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <span className="serif italic" style={{ fontSize: 32, color: "var(--ink)" }}>{totalCount.toLocaleString()}+</span>
            <span className="eyebrow">{t.reviews.reviewsLabel} {t.reviews.acrossLabel} {scores.length} {scores.length === 1 ? "platform" : "platforms"}</span>
          </div>
          <div className="eyebrow" style={{ color: "var(--ochre-deep)" }}>★ Guests' Choice · Travellers' Choice · Loved by Guests</div>
        </div>

        {/* Quote — single, auto-rotating, large prev/next chevrons flanking the quote */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            display: "grid",
            gridTemplateColumns: "auto minmax(0, 1fr) auto",
            alignItems: "center",
            gap: "clamp(16px, 3vw, 40px)",
            maxWidth: 1080, margin: "0 auto",
            paddingBlock: "clamp(24px, 4vw, 48px)"
          }}>
          {/* Prev chevron */}
          <button onClick={goPrev} aria-label="Previous review"
            style={{
              width: 56, height: 56, borderRadius: "50%",
              border: "1px solid var(--rule)", background: "transparent",
              display: "grid", placeItems: "center",
              fontSize: 22, color: "var(--ink-soft)",
              transition: "all 0.3s ease", flexShrink: 0
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--bone)"; e.currentTarget.style.borderColor = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ink-soft)"; e.currentTarget.style.borderColor = "var(--rule)"; }}>
            ←
          </button>

          {/* Quote */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, color: "var(--ochre-deep)", marginBottom: 28 }}>
              {"★★★★★".split("").map((c, k) => <span key={k} style={{ fontSize: 16 }}>{c}</span>)}
            </div>

            <div key={i} style={{ animation: "fadeUp 0.6s ease", minHeight: 200 }}>
              <blockquote className="serif italic" style={{
                fontSize: "clamp(22px, 2.4vw, 32px)",
                lineHeight: 1.35, color: "var(--ink)", textWrap: "balance",
                margin: 0, marginBottom: 32, fontWeight: 300
              }}>
                &ldquo;{quotes[i].text}&rdquo;
              </blockquote>

              <div className="serif" style={{ fontSize: 18, fontStyle: "italic", color: "var(--ink)", marginBottom: 4 }}>
                {quotes[i].name}
              </div>
              <div className="eyebrow" style={{ fontSize: 10, color: "var(--granite)" }}>
                {quotes[i].location} · {quotes[i].platform}
              </div>
            </div>

            {/* Position indicator + progress bar */}
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ width: "min(280px, 80%)", height: 1, background: "var(--rule)", position: "relative", overflow: "hidden" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  width: `${((i + 1) / quotes.length) * 100}%`,
                  background: "var(--ink)",
                  transition: "width 0.5s ease"
                }} />
              </div>
              <div className="eyebrow" style={{ fontSize: 10, color: "var(--granite)" }}>
                {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Next chevron */}
          <button onClick={goNext} aria-label="Next review"
            style={{
              width: 56, height: 56, borderRadius: "50%",
              border: "1px solid var(--rule)", background: "transparent",
              display: "grid", placeItems: "center",
              fontSize: 22, color: "var(--ink-soft)",
              transition: "all 0.3s ease", flexShrink: 0
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--bone)"; e.currentTarget.style.borderColor = "var(--ink)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ink-soft)"; e.currentTarget.style.borderColor = "var(--rule)"; }}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ──────────────────────────────────────────────
function VTFooter({ t, lang, onLang, onBook }) {
  return (
    <footer id="contact" style={{ background: "var(--ink)", color: "var(--bone)", paddingTop: 96, paddingBottom: 40 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, 1fr)", gap: 56, marginBottom: 72 }}>
          <div>
            <img src="assets/logo.png" alt="Vitória's Terrace"
              style={{ height: 96, width: "auto", filter: "invert(1) brightness(1.05)", marginBottom: 20 }} />
            <div className="eyebrow" style={{ color: "var(--ochre)", marginBottom: 24 }}>{t.hero.eyebrow}</div>
            <p className="body" style={{ color: "rgba(250,248,244,0.7)", maxWidth: 380, fontSize: 14 }}>
              {t.footer.tagline}
            </p>

            <button className="btn btn--ghost" onClick={onBook} style={{ marginTop: 32 }}>
              {t.footer.reserve} <span className="arr"></span>
            </button>
          </div>

          <div>
            <div className="eyebrow" style={{ color: "var(--ochre)", marginBottom: 20 }}>{t.footer.visit}</div>
            <div className="serif" style={{ fontSize: 18, fontStyle: "italic", marginBottom: 6 }}>{VT_DATA.meta.address}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, opacity: 0.6, marginBottom: 32 }}>{VT_DATA.meta.coords}</div>

            <div className="eyebrow" style={{ color: "var(--ochre)", marginBottom: 12 }}>{t.footer.contact}</div>
            <div style={{ fontSize: 14, lineHeight: 1.9 }}>
              <a href={`mailto:${VT_DATA.meta.email}`} style={{ borderBottom: "1px solid rgba(250,248,244,0.3)" }}>{VT_DATA.meta.email}</a><br/>
              <a href={`tel:${VT_DATA.meta.phone.replace(/\s/g, '')}`} style={{ opacity: 0.85 }}>{VT_DATA.meta.phone}</a><br/>
              <a href="https://instagram.com/vitoriasterrace" target="_blank" rel="noopener" style={{ opacity: 0.85, borderBottom: "1px solid rgba(250,248,244,0.3)" }}>Instagram · {VT_DATA.meta.instagram}</a>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ color: "var(--ochre)", marginBottom: 20 }}>{t.footer.wander}</div>
            <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
              <a href="#stays">{t.nav.stays}</a>
              <a href="#story">{t.nav.story}</a>
              <a href="#porto">{t.nav.porto}</a>
              <a href="#recs">{t.nav.recs}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>

            <div className="eyebrow" style={{ color: "var(--ochre)", marginTop: 32, marginBottom: 16 }}>{t.footer.language}</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["EN", "PT", "ES", "FR", "KR"].map((l) => (
                <button key={l} onClick={() => onLang(l)}
                  style={{
                    fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
                    padding: "6px 10px", border: "1px solid rgba(250,248,244,0.25)",
                    color: l === lang ? "var(--ink)" : "var(--bone)",
                    background: l === lang ? "var(--bone)" : "transparent"
                  }}>{l}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="azulejo-strip" style={{ marginBottom: 40 }}></div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "rgba(250,248,244,0.5)", flexWrap: "wrap", gap: 16
        }}>
          <div>© 2026 Vitória's Terrace · Made in Porto</div>
          <div>RNAL nº TBD / AL{/* TODO confirm registration number */}</div>
          <div>Privacy · Terms</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  VTPorto, VTAmenities, VTReviews, VTFooter
});
