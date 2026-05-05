// Vitoria's Terrace — Recommendations section
// A friendly, editorial concierge guide. Filter by tag, click a card to expand.
// Globally exposes: VTRecommendations

function VTRecommendations({ t }) {
  const recs = window.VT_DATA.recommendations;
  const tags = ["All", ...Array.from(new Set(recs.map(r => r.tag)))];
  const [filter, setFilter] = React.useState("All");
  const [openId, setOpenId] = React.useState(null);

  const filtered = filter === "All" ? recs : recs.filter(r => r.tag === filter);
  const tagLabel = (tag) => tag === "All" ? t.recs.all : (t.recs.tags[tag] || tag);

  return (
    <section id="recs" className="section" style={{ background: "var(--bone-2)", position: "relative" }}>
      <div className="container">
        {/* Header — frame as a personal note from Rita */}
        <div className="sec-head">
          <div className="num">v.</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>{t.recs.eyebrow}</div>
              <h2 className="display-md" style={{ whiteSpace: "pre-line" }}>{t.recs.heading}</h2>
            </div>
            <div className="body" style={{ maxWidth: 360, fontSize: 15, fontStyle: "italic", color: "var(--ink-soft)" }}>
              {t.recs.byline}
            </div>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{
          display: "flex", gap: 8, flexWrap: "wrap",
          paddingBlock: 20, marginBottom: 48,
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)"
        }}>
          <span className="eyebrow" style={{ alignSelf: "center", marginRight: 12 }}>{t.recs.filter}</span>
          {tags.map((tag) => (
            <button key={tag} onClick={() => setFilter(tag)}
              style={{
                padding: "8px 18px",
                fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500,
                border: "1px solid " + (filter === tag ? "var(--ink)" : "var(--rule)"),
                background: filter === tag ? "var(--ink)" : "transparent",
                color: filter === tag ? "var(--bone)" : "var(--ink-soft)",
                transition: "all 0.3s ease"
              }}>
              {tagLabel(tag)}
              <span style={{ marginLeft: 8, opacity: 0.6, fontSize: 10 }}>
                {tag === "All" ? recs.length : recs.filter(r => r.tag === tag).length}
              </span>
            </button>
          ))}
          <div style={{ flex: 1 }}></div>
          <button onClick={() => window.print()} className="hide-mobile" style={{
            padding: "8px 18px",
            fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500,
            color: "var(--granite)", border: "1px solid transparent"
          }}>
            {t.recs.print}
          </button>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 1,
          background: "var(--rule)",
          border: "1px solid var(--rule)"
        }}>
          {filtered.map((r) => {
            const isOpen = openId === r.id;
            return (
              <article key={r.id}
                style={{
                  background: "var(--paper)",
                  padding: "32px 32px 28px",
                  display: "flex", flexDirection: "column",
                  transition: "background 0.4s ease",
                  cursor: "pointer"
                }}
                onClick={() => setOpenId(isOpen ? null : r.id)}>

                {/* Card header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                  <div className="numeral">{r.icon}</div>
                  <span style={{
                    fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase",
                    color: "var(--ochre-deep)", border: "1px solid var(--ochre)",
                    padding: "4px 10px"
                  }}>{tagLabel(r.tag)}</span>
                </div>

                <h3 className="serif" style={{ fontSize: 26, fontStyle: "italic", lineHeight: 1.15, marginBottom: 8 }}>
                  {r.title}
                </h3>
                <div className="body" style={{ fontSize: 13, marginBottom: 20, color: "var(--granite)" }}>
                  {r.kind}
                </div>

                {/* Preview list (always shows, when not expanded shows just first 2) */}
                <ul style={{ listStyle: "none", display: "grid", gap: 14, marginTop: "auto" }}>
                  {(isOpen ? r.items : r.items.slice(0, 2)).map((it, i) => (
                    <li key={i} style={{ paddingTop: 14, borderTop: i === 0 ? "1px solid var(--rule-soft)" : "1px solid var(--rule-soft)" }}>
                      <div className="serif" style={{ fontSize: 17, marginBottom: 4 }}>{it.name}</div>
                      <div style={{ fontSize: 11, color: "var(--granite-2)", letterSpacing: "0.04em", marginBottom: 6, fontFamily: "var(--mono)" }}>
                        {it.addr}
                      </div>
                      {(isOpen || r.items.length <= 2) && (
                        <div className="body" style={{ fontSize: 13, fontStyle: "italic", color: "var(--ink-soft)" }}>
                          — {it.note}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Show more / less */}
                {r.items.length > 2 && (
                  <button onClick={(e) => { e.stopPropagation(); setOpenId(isOpen ? null : r.id); }}
                    style={{
                      marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule-soft)",
                      fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                      color: "var(--porto)", textAlign: "left", fontWeight: 500,
                      display: "flex", alignItems: "center", gap: 10
                    }}>
                    {isOpen
                      ? <>{t.recs.showLess} <span style={{ display: "inline-block", transition: "transform 0.3s", transform: "rotate(180deg)" }}>↓</span></>
                      : <>+ {r.items.length - 2} {t.recs.more} <span>↓</span></>}
                  </button>
                )}
              </article>
            );
          })}
        </div>

        {/* WhatsApp aside note */}
        <div style={{
          marginTop: 56, padding: "32px 36px",
          border: "1px solid var(--rule)",
          background: "var(--paper)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 8, color: "var(--porto)" }}>{t.recs.whatsappEyebrow}</div>
            <div className="serif" style={{ fontSize: 22, fontStyle: "italic" }}>
              {t.recs.whatsappTitle}
            </div>
            <div className="body" style={{ fontSize: 13, marginTop: 6 }}>
              {t.recs.whatsappBody}
            </div>
          </div>
          <a href={`https://wa.me/351960178336`} className="btn" style={{ flexShrink: 0 }}>
            {t.recs.whatsappCta} <span className="arr"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

window.VTRecommendations = VTRecommendations;
