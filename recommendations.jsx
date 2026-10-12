// Vitoria's Terrace: Recommendations page body
// Globally exposes: VTRecommendations

const VT_APARTMENT_LABEL = "Rua de São Miguel 15, Porto";

// Google Maps walking directions from the apartment to a place.
function gmapsDirectionsUrl(item) {
  if (item.external) return item.external;
  const dest = item.coords ? `${item.coords[0]},${item.coords[1]}` : `${tr(item.name, "EN")}, ${tr(item.addr, "EN")}`;
  const origin = encodeURIComponent(VT_APARTMENT_LABEL);
  return `https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=${origin}&destination=${encodeURIComponent(dest)}`;
}

// Pick the per-locale value out of a {EN, PT, ...} object, falling back to EN.
function tr(field, lang) {
  if (field == null) return null;
  if (typeof field === "string") return field;
  return field[lang] || field.EN;
}

const VT_REC_LABELS = {
  directions: { EN: "Walking directions", PT: "Direções a pé", ES: "Cómo llegar a pie", FR: "Itinéraire à pied", KR: "도보 길찾기", JA: "徒歩ルートを見る" },
  website:    { EN: "Open website", PT: "Abrir o site", ES: "Abrir la web", FR: "Ouvrir le site", KR: "웹사이트 열기", JA: "サイトを開く" },
  reserve:    { EN: "Book ahead", PT: "Convém reservar", ES: "Conviene reservar", FR: "Réservation conseillée", KR: "사전 예약", JA: "要予約" },
  reserveLong:{ EN: "Book a table or ticket in advance.", PT: "Reserve mesa ou bilhete com antecedência.", ES: "Reserva mesa o entrada con antelación.", FR: "Réservez une table ou un billet à l'avance.", KR: "자리나 티켓을 미리 예약하세요.", JA: "席やチケットは事前に予約してください。" },
  walk:       { EN: "on foot", PT: "a pé", ES: "a pie", FR: "à pied", KR: "도보", JA: "徒歩" }
};

// item.walk is stored as "6 min"; Korean and Japanese write "도보 6분" / "徒歩6分".
function walkText(item, lang) {
  if (!item.walk) return "";
  const label = tr(VT_REC_LABELS.walk, lang);
  const mins = parseInt(item.walk, 10);
  if (lang === "KR") return `${label} ${mins}분`;
  if (lang === "JA") return `${label}${mins}分`;
  return `${item.walk} ${label}`;
}

// ── DETAIL PANEL ────────────────────────────────────────────
function VTRecDrawer({ item, subTags, lang, t, onClose }) {
  const panelRef = React.useRef(null);
  useDialog(Boolean(item), onClose, panelRef);

  if (!item) return null;
  const subTagLabel = item.subTag && subTags[item.subTag] ? tr(subTags[item.subTag], lang) : "";
  const note = item.note ? tr(item.note, lang) : null;
  const meta = [subTagLabel, walkText(item, lang)].filter(Boolean).join(" · ");
  const name = tr(item.name, lang);

  return ReactDOM.createPortal(
    <div className="vt-drawer-shade" onClick={onClose}>
      <aside className="vt-drawer" role="dialog" aria-modal="true" aria-labelledby="vt-drawer-title"
        ref={panelRef} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        <div className="vt-drawer__bar">
          <button onClick={onClose} className="vt-panel-close">{t.book.close}</button>
        </div>
        {item.image && (
          <div className="vt-drawer__photo">
            <img src={item.image} alt={name} />
          </div>
        )}
        <div className="vt-drawer__body">
          <div className="vt-drawer__subtag">{meta}</div>
          <h2 id="vt-drawer-title" className="serif vt-drawer__name" tabIndex={-1} data-autofocus="">{name}</h2>
          <div className="vt-drawer__addr">{tr(item.addr, lang)}</div>
          {item.reserveAhead && <div className="vt-drawer__reserve">{tr(VT_REC_LABELS.reserveLong, lang)}</div>}
          {note && <p className="vt-drawer__note">{note}</p>}
          <a href={gmapsDirectionsUrl(item)} target="_blank" rel="noopener" className="btn btn--primary vt-drawer__cta">
            {tr(item.external ? VT_REC_LABELS.website : VT_REC_LABELS.directions, lang)}
          </a>
        </div>
      </aside>
    </div>,
    document.body
  );
}

// ── PHOTO CARD ──────────────────────────────────────────────
function VTRecCard({ item, subTags, lang, onOpen }) {
  const subTagLabel = item.subTag && subTags[item.subTag] ? tr(subTags[item.subTag], lang) : "";
  const meta = [subTagLabel, walkText(item, lang)].filter(Boolean).join(" · ");
  return (
    <button type="button" className="vt-rec-card" onClick={() => onOpen(item)}>
      <div className="vt-rec-card__photo">
        <img src={item.image} alt="" loading="lazy" />
      </div>
      <div className="vt-rec-card__body">
        <h3 className="vt-rec-card__name">{tr(item.name, lang)}</h3>
        <div className="vt-rec-card__meta">
          {meta}
          {item.reserveAhead && <span className="vt-rec-card__reserve"> · {tr(VT_REC_LABELS.reserve, lang)}</span>}
        </div>
      </div>
    </button>
  );
}

// ── TEXT LIST (no photos) ───────────────────────────────────
// Used where a photo per item would mean repeating stock images.
function VTPracticalList({ items, subTags, lang }) {
  return (
    <ul className="vt-practical">
      {items.map((it) => {
        const subTagLabel = it.subTag && subTags[it.subTag] ? tr(subTags[it.subTag], lang) : "";
        const note = it.note ? tr(it.note, lang) : null;
        return (
          <li key={it.id} className="vt-practical__item">
            <div>
              <a href={gmapsDirectionsUrl(it)} target="_blank" rel="noopener" className="vt-practical__name">{tr(it.name, lang)}</a>
              <div className="vt-practical__addr">{tr(it.addr, lang)}</div>
            </div>
            <div className="vt-practical__meta">
              {[subTagLabel, walkText(it, lang)].filter(Boolean).join(" · ")}
              {it.reserveAhead && <span className="vt-rec-card__reserve"> · {tr(VT_REC_LABELS.reserve, lang)}</span>}
              {note && <div className="vt-practical__note">{note}</div>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// ── SECTION ─────────────────────────────────────────────────
const VT_LIST_SECTIONS = new Set(["do", "practical"]);

function VTRecSection({ section, subTags, lang, onOpen }) {
  return (
    <div className="vt-rec-section" id={`recs-${section.id}`}>
      <div className="vt-rec-section__head">
        <h2 className="serif vt-rec-section__title">{tr(section.title, lang)}</h2>
        <p className="vt-rec-section__kind">{tr(section.kind, lang)}</p>
      </div>
      {VT_LIST_SECTIONS.has(section.id) ? (
        <VTPracticalList items={section.items} subTags={subTags} lang={lang} />
      ) : (
        <div className="vt-rec-section__grid">
          {section.items.map((item) => (
            <VTRecCard key={item.id} item={item} subTags={subTags} lang={lang} onOpen={onOpen} />
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
  const meta = window.VT_DATA.meta;
  const [drawerItem, setDrawerItem] = React.useState(null);

  return (
    <section id="recs" className="section vt-recs" style={{ background: "var(--bone)" }}>
      <div className="container">
        {/* Print-only header, first in DOM order so it prints at the top */}
        <div className="vt-print-only vt-print-header">
          <div className="vt-print-logo">VITÓRIA&apos;S TERRACE</div>
          <div className="vt-print-tagline">{meta.address}</div>
          <div className="vt-print-byline">{t.recs.byline} {t.recs.signature}</div>
        </div>

        <div className="vt-recs__head">
          <h1 className="display-md">{t.recs.heading}</h1>
          <blockquote className="vt-recs__byline">
            <p>{t.recs.byline}</p>
            <cite>{t.recs.signature}</cite>
          </blockquote>
        </div>

        <div className="vt-recs__bar vt-recs__print-bar">
          <ul className="vt-recs__index">
            {sections.map((s) => (
              <li key={s.id}><a href={`#recs-${s.id}`}>{tr(s.title, lang)}</a></li>
            ))}
          </ul>
          <button onClick={() => window.print()} className="vt-print-btn hide-mobile" type="button">{t.recs.print}</button>
        </div>

        {sections.map((section) => (
          <VTRecSection key={section.id} section={section} subTags={subTags} lang={lang} onOpen={setDrawerItem} />
        ))}

        <div className="vt-whatsapp">
          <div>
            <div className="vt-whatsapp__title">{t.recs.whatsappTitle}</div>
            <p className="body" style={{ marginTop: 6 }}>{t.recs.whatsappBody}</p>
          </div>
          <a href={`https://wa.me/${meta.whatsapp}`} target="_blank" rel="noopener" className="btn">{t.recs.whatsappCta}</a>
        </div>
      </div>

      <VTRecDrawer item={drawerItem} subTags={subTags} lang={lang} t={t} onClose={() => setDrawerItem(null)} />

      <div className="vt-print-only vt-print-footer">
        <div className="vt-print-footer__line">{meta.address} · {meta.phone} · {meta.email}</div>
      </div>
    </section>
  );
}

window.VTRecommendations = VTRecommendations;
