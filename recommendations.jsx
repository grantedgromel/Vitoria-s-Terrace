// Vitoria's Terrace — Recommendations section (v2: image-led, 4 super-sections)
// Globally exposes: VTRecommendations

const VT_APARTMENT_LABEL = "Rua de São Miguel 15, Porto";

// Build a Google Maps walking-directions URL from the apartment to a place.
function gmapsDirectionsUrl(item) {
  if (item.external) return item.external;
  const dest = item.coords ? `${item.coords[0]},${item.coords[1]}` : `${item.name}, ${item.addr}`;
  const origin = encodeURIComponent(VT_APARTMENT_LABEL);
  return `https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=${origin}&destination=${encodeURIComponent(dest)}`;
}

// Pick the per-locale value out of a {EN, PT, ...} object, falling back to EN.
function tr(field, lang) {
  if (field == null) return null;
  if (typeof field === "string") return field;
  return field[lang] || field.EN;
}

// ── DRAWER ──────────────────────────────────────────────────
function VTRecDrawer({ item, subTags, lang, t, onClose }) {
  React.useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;
  const subTagLabel = item.subTag && subTags[item.subTag] ? tr(subTags[item.subTag], lang) : "";
  const note = item.note ? tr(item.note, lang) : null;
  const ctaLabel = tr({ EN: "Walking directions", PT: "Direções a pé", ES: "Cómo llegar", FR: "Itinéraire à pied", KR: "길찾기", JA: "道順を見る" }, lang);
  const reserveLabel = tr({ EN: "Reservation recommended", PT: "Reserva recomendada", ES: "Reserva recomendada", FR: "Réservation recommandée", KR: "예약 권장", JA: "事前予約推奨" }, lang);

  return (
    <div className="vt-drawer-shade open" onClick={onClose}>
      <aside className="vt-drawer" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="vt-drawer__close" aria-label="Close">{t.book.close} ×</button>
        {item.image && (
          <div className="vt-drawer__photo">
            <img src={item.image} alt={item.name} />
          </div>
        )}
        <div className="vt-drawer__body">
          <div className="eyebrow vt-drawer__subtag">
            {subTagLabel}{item.walk ? ` · ${item.walk}` : ""}
          </div>
          <h3 className="serif vt-drawer__name">{item.name}</h3>
          <div className="vt-drawer__addr">{item.addr}</div>
          {item.reserveAhead && (
            <div className="vt-drawer__reserve">{reserveLabel}</div>
          )}
          {note && <div className="vt-drawer__note">— {note}</div>}
          <a href={gmapsDirectionsUrl(item)} target="_blank" rel="noopener" className="btn btn--primary vt-drawer__cta">
            {ctaLabel} <span className="arr"></span>
          </a>
        </div>
      </aside>
    </div>
  );
}

// ── IMAGE CARD ──────────────────────────────────────────────
function VTRecCard({ item, subTags, lang, onOpen, featured }) {
  const subTagLabel = item.subTag && subTags[item.subTag] ? tr(subTags[item.subTag], lang) : "";
  return (
    <article className={"vt-rec-card" + (featured ? " is-featured" : "")} onClick={() => onOpen(item)}>
      <div className="vt-rec-card__photo">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="vt-rec-card__body">
        <h4 className="serif vt-rec-card__name">{item.name}</h4>
        <div className="vt-rec-card__meta">
          {subTagLabel && <span>{subTagLabel}</span>}
          {item.walk && <span>· {item.walk}</span>}
          {item.reserveAhead && <span className="vt-rec-card__reserve">· {tr({EN:"Reserve",PT:"Reservar",ES:"Reservar",FR:"Réserver",KR:"예약",JA:"要予約"}, lang)}</span>}
        </div>
      </div>
    </article>
  );
}

// ── PRACTICAL LIST (no photos — utility section) ────────────
function VTPracticalList({ items, subTags, lang }) {
  return (
    <ul className="vt-practical">
      {items.map((it) => {
        const subTagLabel = it.subTag && subTags[it.subTag] ? tr(subTags[it.subTag], lang) : "";
        const note = it.note ? tr(it.note, lang) : null;
        return (
          <li key={it.id} className="vt-practical__item">
            <div className="vt-practical__main">
              <a href={gmapsDirectionsUrl(it)} target="_blank" rel="noopener" className="vt-practical__name serif">
                {it.name}
                <span className="vt-practical__arrow" aria-hidden>↗</span>
              </a>
              <div className="vt-practical__addr">{it.addr}</div>
            </div>
            <div className="vt-practical__meta">
              <span className="eyebrow">{subTagLabel}{it.walk ? ` · ${it.walk}` : ""}</span>
              {note && <div className="vt-practical__note">— {note}</div>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// ── SECTION BLOCK ───────────────────────────────────────────
function VTRecSection({ section, subTags, lang, onOpen }) {
  const isPractical = section.id === "practical";
  // Mark a few cards "featured" (span 2 cols) to give the grid editorial rhythm.
  const featuredIds = new Set([
    "cafe-santiago",   // the iconic francesinha
    "lello",           // the red staircase
    "ribeira",         // the colorful houses
    "fado-real"        // the lead Fado venue
  ]);

  return (
    <div className="vt-rec-section" id={`recs-${section.id}`}>
      <div className="vt-rec-section__head">
        <h3 className="serif vt-rec-section__title">{tr(section.title, lang)}</h3>
        <div className="body vt-rec-section__kind">{tr(section.kind, lang)}</div>
      </div>
      {isPractical ? (
        <VTPracticalList items={section.items} subTags={subTags} lang={lang} />
      ) : (
        <div className="vt-rec-section__grid">
          {section.items.map((item) => (
            <VTRecCard
              key={item.id}
              item={item}
              subTags={subTags}
              lang={lang}
              onOpen={onOpen}
              featured={featuredIds.has(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── ROOT ────────────────────────────────────────────────────
function VTRecommendations({ t, lang }) {
  const sections = window.VT_DATA.recommendations;
  const subTags = window.VT_DATA.subTags;
  const [drawerItem, setDrawerItem] = React.useState(null);

  return (
    <section id="recs" className="section vt-recs" style={{ background: "var(--bone-2)" }}>
      <div className="container">
        {/* Print-only header — first in DOM order so it prints at the top */}
        <div className="vt-print-only vt-print-header">
          <div className="vt-print-logo">VITÓRIA&apos;S TERRACE</div>
          <div className="vt-print-tagline">{t.hero.eyebrow}</div>
          <div className="vt-print-divider" aria-hidden></div>
          <div className="vt-print-byline">{t.recs.byline}</div>
        </div>

        {/* Editorial header */}
        <div className="sec-head vt-recs__head">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>{t.recs.eyebrow}</div>
              <h2 className="display-md" style={{ whiteSpace: "pre-line" }}>{t.recs.heading}</h2>
            </div>
            <div className="body vt-recs__byline">{t.recs.byline}</div>
          </div>
        </div>

        {/* Print button — stands alone now that filter chips are gone */}
        <div className="vt-recs__print-bar">
          <button onClick={() => window.print()} className="vt-print-btn hide-mobile" type="button">
            <svg className="vt-print-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9V3h12v6" />
              <rect x="6" y="14" width="12" height="7" />
              <path d="M6 18H4a2 2 0 01-2-2v-4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2" />
            </svg>
            {t.recs.print}
          </button>
        </div>

        {/* 4 super-sections */}
        {sections.map((section, idx) => (
          <VTRecSection
            key={section.id}
            section={section}
            subTags={subTags}
            lang={lang}
            onOpen={setDrawerItem}
          />
        ))}

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
      <VTRecDrawer item={drawerItem} subTags={subTags} lang={lang} t={t} onClose={() => setDrawerItem(null)} />

      {/* Print-only footer */}
      <div className="vt-print-only vt-print-footer">
        <div className="vt-print-divider" aria-hidden></div>
        <div className="vt-print-footer__line">{window.VT_DATA.meta.address} · {window.VT_DATA.meta.phone}</div>
        <div className="vt-print-footer__line">{window.VT_DATA.meta.email} · {window.VT_DATA.meta.instagram}</div>
        <div className="vt-print-footer__brand">
          {tr({EN:"Made in Porto", PT:"Feito no Porto", ES:"Hecho en Oporto", FR:"Fait à Porto", KR:"포르투에서 만들어짐", JA:"ポルトで生まれました"}, lang)} · vitoriasterraceapartments.com
        </div>
      </div>
    </section>
  );
}

window.VTRecommendations = VTRecommendations;
