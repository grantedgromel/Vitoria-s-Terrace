// Vitoria's Terrace: page sections, part 1
// Globally exposes: VTNav, VTHero, VTStory, VTApartments, SecTitle, VT_LANGS

const { useState, useEffect } = React;

const VT_LANGS = [
  ["EN", "English"], ["PT", "Português"], ["ES", "Español"],
  ["FR", "Français"], ["KR", "한국어"], ["JA", "日本語"]
];
const VT_LANG_NAMES = Object.fromEntries(VT_LANGS);

const VT_NUM_LOCALES = { EN: "en-GB", PT: "pt-PT", ES: "es-ES", FR: "fr-FR", KR: "ko-KR", JA: "ja-JP" };
// Euro amounts in the reader's convention: "€100" in English, "100 €" in PT/ES/FR.
function vtEur(n, lang) {
  return new Intl.NumberFormat(VT_NUM_LOCALES[lang] || "en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

// Count and price labels. Korean and Japanese put the counter word around the
// number ("침대 2개", "€100から"), so those locales supply format strings.
function vtCount(t, key, n) {
  const f = t.apt.fmt && t.apt.fmt[key];
  return f ? f.replace("{n}", n) : `${n} ${t.apt[key]}`;
}
function vtFrom(t, price, lang) {
  const f = t.apt.fmt && t.apt.fmt.from;
  const p = vtEur(price, lang);
  return f ? f.replace("{p}", p) : `${t.apt.from} ${p}`;
}

// Apartment names read "Type · View". On screen they sit on two lines (type, then
// view) so long names never break mid-word; the dot stays for screen readers.
function vtName(s) { return s.replace(/ · /g, "\u00a0· "); }
function VTAptName({ name }) {
  const [type, view] = name.split(" · ");
  if (!view) return name;
  return <>{type}<span className="visually-hidden"> · </span><span className="vt-name-view">{view}</span></>;
}

// ── Language ───────────────────────────────────────────
// The language comes from ?lang= first (so each language has a shareable URL),
// then from the choice saved in localStorage, then English.
const VT_URL_LANG = { EN: "en", PT: "pt", ES: "es", FR: "fr", KR: "ko", JA: "ja" };
const VT_HTML_LANG = { EN: "en", PT: "pt-PT", ES: "es", FR: "fr", KR: "ko", JA: "ja" };
function vtReadLang() {
  try {
    const q = (new URLSearchParams(window.location.search).get("lang") || "").toLowerCase();
    const fromUrl = Object.keys(VT_URL_LANG).find((k) => VT_URL_LANG[k] === q);
    if (fromUrl) {
      try { localStorage.setItem("vt-lang", fromUrl); } catch (_) { /* no-op */ }
      return fromUrl;
    }
  } catch (_) { /* no-op */ }
  try { return localStorage.getItem("vt-lang") || "EN"; } catch (_) { return "EN"; }
}
function vtWriteLang(v) {
  try { localStorage.setItem("vt-lang", v); } catch (_) { /* no-op */ }
  try {
    const u = new URL(window.location.href);
    if (v === "EN") u.searchParams.delete("lang"); else u.searchParams.set("lang", VT_URL_LANG[v]);
    history.replaceState(null, "", u);
  } catch (_) { /* no-op */ }
}

// Keep <html lang>, title, description, canonical and og:url in step with the
// language, so each ?lang= URL describes itself (the static HTML holds English).
function vtApplyPageMeta(lang, title, description) {
  document.documentElement.lang = VT_HTML_LANG[lang] || "en";
  document.title = title;
  const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
  set('meta[name="description"]', "content", description);
  set('meta[property="og:title"]', "content", title);
  set('meta[property="og:description"]', "content", description);
  const canon = document.querySelector('link[rel="canonical"]');
  if (canon) {
    const u = new URL(canon.getAttribute("href").split("?")[0]);
    if (lang !== "EN") u.searchParams.set("lang", VT_URL_LANG[lang]);
    canon.setAttribute("href", u.toString());
    set('meta[property="og:url"]', "content", u.toString());
  }
}

// ── Dialog behaviour ───────────────────────────────────
// Shared by the booking panel and the recommendation detail panel. Both render
// into document.body, so the page behind (#app) can be made inert while open:
// focus moves into the panel, Tab cannot reach the page, Escape closes, and focus
// returns to whatever opened the panel.
function useDialog(open, onClose, panelRef) {
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const app = document.getElementById("app");
    if (app) app.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    const target = panelRef.current && (panelRef.current.querySelector("[data-autofocus]") || panelRef.current);
    if (target) target.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      if (app) app.removeAttribute("inert");
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      if (opener && opener.focus) opener.focus();
    };
  }, [open]);
}

// ── Section title ──────────────────────────────────────
function SecTitle({ children }) {
  return <h2 className="display-md sec-title">{children}</h2>;
}

// ── NAV ─────────────────────────────────────────────────
// `currentPage` is "home" or "recs". Anchors that target home sections need an
// `index.html` prefix when we're on the recommendations page.
function VTNav({ t, lang, onLang, onBook, currentPage }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = React.useRef(null);
  const menuBtnRef = React.useRef(null);
  const focusLangBtn = () => langRef.current && langRef.current.querySelector("button").focus();
  const isHome = currentPage !== "recs";
  const homePrefix = isHome ? "" : "index.html";
  const recsActive = currentPage === "recs";

  const links = [
    [`${homePrefix}#stays`, t.nav.stays, false],
    [`${homePrefix}#story`, t.nav.story, false],
    [`${homePrefix}#porto`, t.nav.porto, false],
    ["recommendations.html", t.nav.recs, recsActive],
    ["#contact", t.nav.contact, false]
  ];

  useEffect(() => {
    if (!langOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") { setLangOpen(false); focusLangBtn(); }
    };
    const onDown = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false); };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => { window.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onDown); };
  }, [langOpen]);

  return (
    <nav className="vt-nav" aria-label={t.nav.mainLabel}>
      <div className="container vt-nav__row">
        <a href={isHome ? "#top" : "index.html"} className="vt-nav__logo" aria-label={t.nav.homeLabel}>
          <img src="assets/logo.png" alt="Vitória's Terrace" width="52" height="52" />
        </a>

        <div className="vt-nav__links">
          {links.map(([h, l, active]) => (
            <a key={h} href={h} className="vt-nav__link" aria-current={active ? "page" : undefined}>{l}</a>
          ))}

          <div className="vt-nav__lang" ref={langRef}>
            <button className="vt-nav__lang-btn" onClick={() => setLangOpen(!langOpen)}
              aria-label={`${t.footer.language}: ${VT_LANG_NAMES[lang]}`} aria-expanded={langOpen}>
              {VT_URL_LANG[lang].toUpperCase()}
            </button>
            {langOpen && (
              <div className="vt-nav__lang-menu">
                {VT_LANGS.map(([code, name]) => (
                  <button key={code} lang={VT_HTML_LANG[code]}
                    aria-current={code === lang ? "true" : undefined}
                    onClick={() => { onLang(code); setLangOpen(false); focusLangBtn(); }}>
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="btn btn--sm" onClick={onBook}>
            {t.nav.book}
          </button>
        </div>

        <button className="vt-nav__menu-btn" ref={menuBtnRef} onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? t.book.close : t.nav.menu}
        </button>
      </div>

      {open && (
        <div className="vt-nav__sheet">
          {links.map(([h, l, active]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined}>{l}</a>
          ))}

          <div className="eyebrow" style={{ margin: "24px 0 10px" }}>{t.footer.language}</div>
          <div className="vt-lang-row">
            {VT_LANGS.map(([code]) => (
              <button key={code} aria-pressed={code === lang} lang={VT_HTML_LANG[code]} aria-label={VT_LANG_NAMES[code]}
                onClick={() => { menuBtnRef.current.focus(); onLang(code); setOpen(false); }}>{VT_URL_LANG[code].toUpperCase()}</button>
            ))}
          </div>

          <button className="btn btn--primary" onClick={() => { menuBtnRef.current.focus(); setOpen(false); onBook(); }}
            style={{ marginTop: 24, width: "100%" }}>
            {t.nav.book}
          </button>
        </div>
      )}
    </nav>
  );
}

// ── HERO ────────────────────────────────────────────────
function VTHero({ t, onBook }) {
  return (
    <header id="top" className="vt-hero">
      <img src="assets/porto-view.jpg" alt="" className="vt-hero__photo" fetchpriority="high" />
      <div className="vt-hero__scrim" />

      <div className="container vt-hero__inner">
        <h1 className="display-xl" style={{ fontStyle: "italic", whiteSpace: "pre-line" }}>{t.hero.title}</h1>
        <p className="body-lg vt-hero__sub">{t.hero.sub}</p>
        <div className="vt-hero__actions">
          <button className="btn btn--light" onClick={onBook}>{t.hero.cta}</button>
          <a href="#stays" className="link-u">{t.hero.ctaAlt}</a>
        </div>
      </div>
    </header>
  );
}

// ── STORY ───────────────────────────────────────────────
function VTStory({ t }) {
  return (
    <section id="story" className="section section--paper">
      <div className="container">
        <SecTitle>{t.sec.story}</SecTitle>

        <div className="vt-story-grid">
          <figure>
            <div className="img-frame" style={{ aspectRatio: "962/768" }}>
              <img src="assets/doors.jpg" alt={t.storyCaption} className="img-cover" loading="lazy" />
            </div>
            <figcaption className="cap">{t.storyCaption}</figcaption>
          </figure>

          <div className="vt-story-text">
            {t.storyBody.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── APARTMENTS ──────────────────────────────────────────
// Tabs follow the WAI-ARIA tab pattern: one Tab stop, arrow keys move between tabs.
function VTApartments({ t, lang, onBook }) {
  const apts = VT_DATA.apartments;
  const [active, setActive] = useState(apts[0].id);
  const tabRefs = React.useRef({});
  const apt = apts.find(a => a.id === active);
  const tx = (a) => (a.i18n[lang] || a.i18n.EN);
  const aptT = tx(apt);

  const rateLine = (a) => a.price ? vtFrom(t, a.price, lang) : t.apt.onRequest;

  const onTabKey = (e) => {
    const i = apts.findIndex((a) => a.id === active);
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: apts.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const id = apts[(next + apts.length) % apts.length].id;
    setActive(id);
    tabRefs.current[id] && tabRefs.current[id].focus();
  };

  return (
    <section id="stays" className="section section--bone">
      <div className="container">
        <SecTitle>{t.sec.stays}</SecTitle>
        <p className="body-lg" style={{ marginTop: -24, marginBottom: 32 }}>{t.sec.staysIntro}</p>

        <div className="vt-tabs" role="tablist" aria-label={t.sec.stays} onKeyDown={onTabKey}>
          {apts.map((a) => (
            <button key={a.id} role="tab" className="vt-tab"
              ref={(el) => { tabRefs.current[a.id] = el; }}
              id={`tab-${a.id}`} aria-controls="apt-panel"
              aria-selected={active === a.id}
              tabIndex={active === a.id ? 0 : -1}
              onClick={() => setActive(a.id)}>
              <div className="vt-tab__name"><VTAptName name={tx(a).name} /></div>
              <div className="vt-tab__meta">
                {vtCount(t, "guests", a.sleeps)} · {a.sqm} m² · {rateLine(a)}
              </div>
            </button>
          ))}
        </div>

        <div id="apt-panel" role="tabpanel" tabIndex={0} aria-labelledby={`tab-${apt.id}`} className="vt-apt-content">
          <div>
            <div className="eyebrow vt-apt-tagline">{aptT.tagline}</div>
            <h3 className="display-md"><VTAptName name={aptT.name} /></h3>

            <div className="vt-apt-specs">
              <span>{vtCount(t, "guests", apt.sleeps)}</span>
              <span>{vtCount(t, apt.beds > 1 ? "beds" : "bed", apt.beds)}</span>
              <span>{vtCount(t, apt.baths > 1 ? "baths" : "bath", apt.baths)}</span>
              <span>{apt.sqm} m²</span>
            </div>

            <p className="body-lg">{aptT.description}</p>
          </div>

          <div>
            <ul className="vt-features">
              {aptT.features.map((f) => <li key={f}>{f}</li>)}
            </ul>

            <div className="vt-apt-price">
              <div>
                {apt.price ? (
                  <>
                    <div className="vt-apt-price__amount">{vtEur(apt.price, lang)}</div>
                    <div className="vt-apt-price__label">{t.apt.perNight}</div>
                  </>
                ) : (
                  <>
                    <div className="vt-apt-price__amount vt-apt-price__amount--note">{t.apt.onRequest}</div>
                    <div className="vt-apt-price__label">{t.apt.onRequestNote}</div>
                  </>
                )}
              </div>
              <button className="btn btn--primary" onClick={() => onBook(apt.id)}>{t.apt.reserve}</button>
            </div>
          </div>
        </div>

        <VTGallery t={t} />
      </div>
    </section>
  );
}

// ── PHOTOS ──────────────────────────────────────────────
function VTGallery({ t }) {
  const photos = VT_DATA.gallery;
  const [photo, setPhoto] = useState(0);
  return (
    <div className="vt-gallery">
      <h3 className="display-sm">{t.sec.photos}</h3>
      <p className="vt-gallery__note">{t.photosNote}</p>
      <div className="img-frame vt-gallery__main">
        <img src={photos[photo]} alt={t.galleryAlt[photo]} className="img-cover" loading="lazy" />
      </div>
      <div className="vt-gallery__thumbs">
        {photos.map((src, i) => (
          <button key={src} className="img-frame vt-apt-thumb" aria-pressed={photo === i}
            aria-label={`${t.galleryAlt[i]} (${i + 1} / ${photos.length})`}
            onClick={() => setPhoto(i)}>
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { VTNav, VTHero, VTStory, VTApartments, VTGallery, SecTitle, VT_LANGS, VT_LANG_NAMES, VT_URL_LANG, VT_NUM_LOCALES, VT_HTML_LANG, vtReadLang, vtWriteLang, vtApplyPageMeta, useDialog, vtCount, vtFrom, vtName, VTAptName, vtEur });
