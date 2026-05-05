// Vitoria's Terrace — Recommendations section
// Editorial concierge guide with map, side drawer, walking-direction deep links, and i18n.
// Globally exposes: VTRecommendations

const VT_APARTMENT_COORDS = [41.1428, -8.6155];          // Rua de São Miguel 15
const VT_APARTMENT_LABEL = "Rua de São Miguel 15, Porto";

// Tag → color (oklch) for the map pins. Matches our existing palette tokens.
const TAG_COLOR = {
  Eat:       "oklch(0.55 0.16 30)",   // warm rust
  Shop:      "oklch(0.60 0.10 75)",   // ochre
  Hear:      "oklch(0.45 0.12 295)",  // plum
  Practical: "oklch(0.50 0.04 60)",   // granite
  Do:        "oklch(0.42 0.13 245)"   // porto blue
};

// Build a Google Maps walking-directions URL from the apartment to a destination.
function gmapsDirectionsUrl(item) {
  if (item.external) return item.external;
  const dest = item.coords
    ? `${item.coords[0]},${item.coords[1]}`
    : `${item.name}, ${item.addr}`;
  const origin = encodeURIComponent(VT_APARTMENT_LABEL);
  return `https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=${origin}&destination=${encodeURIComponent(dest)}`;
}

// Pick the per-locale value out of a {EN, PT, ...} object, falling back to EN.
function tr(field, lang) {
  if (field == null) return null;
  if (typeof field === "string") return field;
  return field[lang] || field.EN;
}

// ── MAP ─────────────────────────────────────────────────────
function VTMap({ recs, lang, activeId, onPinClick }) {
  const ref = React.useRef(null);
  const mapRef = React.useRef(null);
  const markerRefs = React.useRef({});

  React.useEffect(() => {
    if (!ref.current || !window.maplibregl) return;
    const m = new window.maplibregl.Map({
      container: ref.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "&copy; OpenStreetMap contributors"
          }
        },
        layers: [{
          id: "osm",
          type: "raster",
          source: "osm",
          paint: { "raster-saturation": -0.4, "raster-contrast": 0.05 }
        }]
      },
      center: [VT_APARTMENT_COORDS[1], VT_APARTMENT_COORDS[0]],
      zoom: 14.4,
      attributionControl: false
    });
    m.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), "top-right");
    m.addControl(new window.maplibregl.AttributionControl({ compact: true }));

    // Apartment pin — solid ink dot with a subtle ring
    const apt = document.createElement("div");
    apt.className = "vt-pin vt-pin--apartment";
    apt.title = VT_APARTMENT_LABEL;
    new window.maplibregl.Marker({ element: apt }).setLngLat([VT_APARTMENT_COORDS[1], VT_APARTMENT_COORDS[0]]).addTo(m);

    mapRef.current = m;
    return () => m.remove();
  }, []);

  // Add / refresh category pins whenever the recs change
  React.useEffect(() => {
    const m = mapRef.current;
    if (!m) return;
    Object.values(markerRefs.current).forEach((mk) => mk.remove());
    markerRefs.current = {};

    recs.forEach((r) => {
      r.items.forEach((it, k) => {
        if (!it.coords) return;
        const el = document.createElement("button");
        el.className = "vt-pin vt-pin--cat";
        el.style.setProperty("--pin", TAG_COLOR[r.tag] || "var(--ink)");
        el.title = `${it.name} — ${tr(r.title, lang)}`;
        el.addEventListener("click", () => onPinClick(r.id));
        const mk = new window.maplibregl.Marker({ element: el }).setLngLat([it.coords[1], it.coords[0]]).addTo(m);
        markerRefs.current[`${r.id}-${k}`] = mk;
      });
    });
  }, [recs, lang]);

  // Highlight pins for the active category
  React.useEffect(() => {
    Object.entries(markerRefs.current).forEach(([key, mk]) => {
      const el = mk.getElement();
      if (!activeId) {
        el.classList.remove("vt-pin--dim", "vt-pin--bright");
      } else if (key.startsWith(activeId + "-")) {
        el.classList.add("vt-pin--bright");
        el.classList.remove("vt-pin--dim");
      } else {
        el.classList.add("vt-pin--dim");
        el.classList.remove("vt-pin--bright");
      }
    });
  }, [activeId]);

  return <div ref={ref} className="vt-map" />;
}

// ── DRAWER ──────────────────────────────────────────────────
function VTRecDrawer({ rec, lang, t, onClose }) {
  React.useEffect(() => {
    if (!rec) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [rec, onClose]);

  if (!rec) return null;

  return (
    <div className={`vt-drawer-shade ${rec ? "open" : ""}`} onClick={onClose}>
      <aside className="vt-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="vt-drawer__head">
          <div className="numeral">{rec.icon}</div>
          <span className="vt-tag" style={{ "--tag": TAG_COLOR[rec.tag] }}>{tr(t.recs.tags, lang)?.[rec.tag] || rec.tag}</span>
          <button onClick={onClose} aria-label="Close" className="vt-drawer__close">{t.book.close} ×</button>
        </div>
        <h3 className="serif" style={{ fontSize: 36, fontStyle: "italic", lineHeight: 1.1, margin: "16px 0 8px" }}>
          {tr(rec.title, lang)}
        </h3>
        <div className="body" style={{ fontSize: 14, color: "var(--granite)", marginBottom: 36, fontStyle: "italic" }}>
          {tr(rec.kind, lang)}
        </div>

        <ul style={{ listStyle: "none", display: "grid", gap: 24 }}>
          {rec.items.map((it, k) => {
            const note = it.note ? tr(it.note, lang) : null;
            const url = gmapsDirectionsUrl(it);
            return (
              <li key={k} className="vt-rec-item">
                <a href={url} target="_blank" rel="noopener" className="vt-rec-item__name serif">
                  {it.name}
                  <span className="vt-rec-item__arrow" aria-hidden>↗</span>
                </a>
                <div className="vt-rec-item__addr">{it.addr}</div>
                <div className="vt-rec-item__meta">
                  {it.walk && <span>{it.walk} {t.apt.guests === "guests" ? "walk" : "•"}</span>}
                  {it.reserveAhead && <span style={{ color: "var(--porto)" }}>{tr({EN:"Reserve ahead",PT:"Reserve antes",ES:"Reserva antes",FR:"Réserver à l'avance",KR:"사전 예약"}, lang)}</span>}
                </div>
                {note && <div className="vt-rec-item__note">— {note}</div>}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

// ── CATEGORY CARD ───────────────────────────────────────────
function VTRecCard({ rec, lang, t, onOpen }) {
  return (
    <article className="vt-rec-card" onClick={() => onOpen(rec.id)}>
      <div className="vt-rec-card__head">
        <div className="numeral">{rec.icon}</div>
        <span className="vt-tag" style={{ "--tag": TAG_COLOR[rec.tag] }}>
          {(t.recs.tags && t.recs.tags[rec.tag]) || rec.tag}
        </span>
      </div>

      <h3 className="serif vt-rec-card__title">{tr(rec.title, lang)}</h3>
      <div className="body vt-rec-card__kind">{tr(rec.kind, lang)}</div>

      <ul className="vt-rec-card__items">
        {rec.items.slice(0, 3).map((it, k) => (
          <li key={k}>
            <div className="serif vt-rec-card__item-name">{it.name}</div>
            <div className="vt-rec-card__item-addr">{it.addr.split(",")[0]}{it.walk ? ` · ${it.walk}` : ""}</div>
          </li>
        ))}
      </ul>

      <div className="vt-rec-card__cta">
        {rec.items.length > 3
          ? <>+ {rec.items.length - 3} {t.recs.more} <span aria-hidden>→</span></>
          : <>{tr({EN:"Open",PT:"Abrir",ES:"Abrir",FR:"Ouvrir",KR:"열기"}, lang)} <span aria-hidden>→</span></>}
      </div>
    </article>
  );
}

// ── ROOT ────────────────────────────────────────────────────
function VTRecommendations({ t, lang }) {
  const recs = window.VT_DATA.recommendations;
  const tags = ["All", ...Array.from(new Set(recs.map(r => r.tag)))];
  const [filter, setFilter] = React.useState("All");
  const [drawerId, setDrawerId] = React.useState(null);

  // Split: visit gets full-width treatment, everything else stays in the grid.
  const visit = recs.find((r) => r.id === "visit");
  const cards = recs.filter((r) => r.id !== "visit");

  const filtered = filter === "All" ? cards : cards.filter(r => r.tag === filter);
  const showVisit = filter === "All" || (visit && visit.tag === filter);

  const tagLabel = (tag) => {
    if (tag === "All") return t.recs.all;
    return (t.recs.tags && t.recs.tags[tag]) || tag;
  };
  const drawerRec = drawerId ? recs.find((r) => r.id === drawerId) : null;

  // Live recs feed for the map (full set, regardless of filter, so the map shows everything).
  return (
    <section id="recs" className="section vt-recs" style={{ background: "var(--bone-2)", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div className="sec-head vt-recs__head">
          <div className="num">v.</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>{t.recs.eyebrow}</div>
              <h2 className="display-md" style={{ whiteSpace: "pre-line" }}>{t.recs.heading}</h2>
            </div>
            <div className="body vt-recs__byline">{t.recs.byline}</div>
          </div>
        </div>

        {/* Map */}
        <div className="vt-recs__map-wrap">
          <VTMap recs={recs} lang={lang} activeId={drawerId} onPinClick={setDrawerId} />
          <div className="vt-recs__map-legend">
            <div className="vt-legend-row">
              <span className="vt-legend-pin" style={{ background: "var(--ink)" }}></span>
              <span>{tr({EN:"The house",PT:"A casa",ES:"La casa",FR:"La maison",KR:"이 집"}, lang)}</span>
            </div>
            {tags.filter((tg) => tg !== "All").map((tg) => (
              <div key={tg} className="vt-legend-row">
                <span className="vt-legend-pin" style={{ background: TAG_COLOR[tg] }}></span>
                <span>{tagLabel(tg)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter + Print bar */}
        <div className="vt-recs__filter-bar">
          <span className="eyebrow" style={{ alignSelf: "center", marginRight: 12 }}>{t.recs.filter}</span>
          {tags.map((tg) => (
            <button key={tg} onClick={() => setFilter(tg)}
              className={"vt-chip" + (filter === tg ? " is-active" : "")}>
              {tagLabel(tg)}
              <span className="vt-chip__count">
                {tg === "All" ? recs.length : recs.filter(r => r.tag === tg).length}
              </span>
            </button>
          ))}
          <div style={{ flex: 1 }}></div>
          <button onClick={() => window.print()} className="vt-print-btn hide-mobile">
            {t.recs.print}
          </button>
        </div>

        {/* Cards grid (12 cards — visit excluded) */}
        {filtered.length > 0 && (
          <div className="vt-recs__grid">
            {filtered.map((r) => (
              <VTRecCard key={r.id} rec={r} lang={lang} t={t} onOpen={setDrawerId} />
            ))}
          </div>
        )}

        {/* "What to visit" — full-width long-list */}
        {visit && showVisit && (
          <div className="vt-visit" id="visit-block">
            <div className="vt-visit__head">
              <div className="numeral">{visit.icon}</div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8, color: "var(--ochre-deep)" }}>
                  {(t.recs.tags && t.recs.tags[visit.tag]) || visit.tag}
                </div>
                <h3 className="serif vt-visit__title">{tr(visit.title, lang)}</h3>
                <div className="body vt-visit__kind">{tr(visit.kind, lang)}</div>
              </div>
              <button onClick={() => setDrawerId(visit.id)} className="vt-visit__open hide-mobile">
                {tr({EN:"Open in detail",PT:"Ver em detalhe",ES:"Ver en detalle",FR:"Ouvrir en détail",KR:"자세히 보기"}, lang)} <span aria-hidden>→</span>
              </button>
            </div>
            <ul className="vt-visit__list">
              {visit.items.map((it, k) => {
                const note = it.note ? tr(it.note, lang) : null;
                return (
                  <li key={k} className="vt-visit__item">
                    <a href={gmapsDirectionsUrl(it)} target="_blank" rel="noopener" className="serif vt-visit__name">
                      {it.name}
                      <span className="vt-visit__arrow" aria-hidden>↗</span>
                    </a>
                    {it.walk && <div className="vt-visit__walk">{it.walk}</div>}
                    {note && <div className="vt-visit__note">— {note}</div>}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* WhatsApp aside */}
        <div className="vt-whatsapp">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8, color: "var(--porto)" }}>{t.recs.whatsappEyebrow}</div>
            <div className="serif vt-whatsapp__title">{t.recs.whatsappTitle}</div>
            <div className="body" style={{ fontSize: 13, marginTop: 6 }}>{t.recs.whatsappBody}</div>
          </div>
          <a href="https://wa.me/351960178336" className="btn">
            {t.recs.whatsappCta} <span className="arr"></span>
          </a>
        </div>
      </div>

      {/* Drawer */}
      <VTRecDrawer rec={drawerRec} lang={lang} t={t} onClose={() => setDrawerId(null)} />

      {/* Print-only header & footer (revealed by @media print) */}
      <div className="vt-print-only vt-print-header">
        <div className="vt-print-logo">VITÓRIA&apos;S TERRACE</div>
        <div className="vt-print-tagline">PORTO · {tr({EN:"A short letter from Rita", PT:"Uma carta breve da Rita", ES:"Una breve carta de Rita", FR:"Une courte lettre de Rita", KR:"리타가 보내는 짧은 편지"}, lang)}</div>
      </div>
      <div className="vt-print-only vt-print-footer">
        <div>{window.VT_DATA.meta.address} · {window.VT_DATA.meta.phone} · {window.VT_DATA.meta.email}</div>
        <div>{tr({EN:"Made in Porto", PT:"Feito no Porto", ES:"Hecho en Oporto", FR:"Fait à Porto", KR:"포르투에서"}, lang)} · vitoriasterraceapartments.com</div>
      </div>
    </section>
  );
}

window.VTRecommendations = VTRecommendations;
