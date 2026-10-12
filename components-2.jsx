// Vitoria's Terrace: page sections, part 2
// Globally exposes: VTPorto, VTAmenities, VTReviews, VTFooter

// ── LOCATION ────────────────────────────────────────────
function VTPorto({ t }) {
  return (
    <section id="porto" className="section section--bone">
      <div className="container">
        <SecTitle>{t.sec.porto}</SecTitle>

        <div className="vt-porto-grid">
          <div className="img-frame vt-porto-grid__media">
            <img src="assets/porto-section.jpg" alt={t.portoPhotoAlt} className="img-cover" loading="lazy" />
          </div>

          <div className="vt-porto-side">
            <p className="display-sm" style={{ textWrap: "pretty" }}>{t.portoLead}</p>

            <div>
              <div className="eyebrow">{t.portoAddressLabel}</div>
              <div className="vt-porto-address">{VT_DATA.meta.address}</div>
            </div>

            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>{t.portoWalkLabel}</div>
              <ul className="vt-walk">
                {t.walkingDistances.map(([time, place]) => (
                  <li key={place}><span className="vt-walk__time">{time}</span><span>{place}</span></li>
                ))}
              </ul>
            </div>

            {/* Static map; the pin sits at the building's position on this crop. */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+de+S%C3%A3o+Miguel+15+Porto"
              target="_blank" rel="noopener"
              className="vt-porto-map"
            >
              <img src="assets/map.jpg" alt={t.mapAlt} loading="lazy" />
              <span className="vt-porto-map__pin" style={{ left: "29.79%", top: "44.53%" }} aria-hidden="true"></span>
              <span className="vt-porto-map__cta">{t.openInMaps}</span>
              <span className="vt-porto-map__attr">© OpenStreetMap</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── INCLUDED ────────────────────────────────────────────
function VTAmenities({ t }) {
  return (
    <section className="section section--paper">
      <div className="container">
        <div className="vt-amenities-outer">
          <div>
            <SecTitle>{t.sec.amen}</SecTitle>
            <p className="body-lg" style={{ maxWidth: 380 }}>{t.amenitiesIntro}</p>
            <div className="vt-arrival">
              <h3 className="eyebrow">{t.arrivalLabel}</h3>
              <p>{t.arrival}</p>
            </div>
          </div>

          <ul className="vt-amenities">
            {t.amenities.map((a) => (
              <li key={a.label}>
                <div className="vt-amenities__label">{a.label}</div>
                <div className="vt-amenities__note">{a.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ── REVIEWS ─────────────────────────────────────────────
// Scores only, each linked to the platform where the reviews were written.
// Counts are left out on purpose: they change weekly and go stale on a static site.
function VTReviews({ t }) {
  const scores = VT_DATA.reviewScores;
  return (
    <section id="reviews" className="section section--bone">
      <div className="container">
        <SecTitle>{t.sec.reviews}</SecTitle>

        <table className="vt-scores">
          <thead>
            <tr>
              <th scope="col">{t.reviews.platform}</th>
              <th scope="col">{t.reviews.score}</th>
              <th scope="col"><span className="visually-hidden">{t.reviews.read}</span></th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s) => (
              <tr key={s.platform}>
                <td className="vt-scores__platform">{s.platform}</td>
                <td>
                  <span className="vt-scores__score">{s.score}</span>
                  <span className="vt-scores__out">&nbsp;/&nbsp;{s.outOf}</span>
                </td>
                <td><a href={s.url} target="_blank" rel="noopener">{t.reviews.read}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="vt-scores-total">{t.reviews.note}</p>
      </div>
    </section>
  );
}

// ── FOOTER ──────────────────────────────────────────────
function VTFooter({ t, lang, onLang, onBook, currentPage }) {
  const isHome = currentPage !== "recs";
  const homePrefix = isHome ? "" : "index.html";
  const meta = VT_DATA.meta;
  // Legal pages exist in English and Portuguese; other languages get the English text.
  const legalHash = lang === "PT" ? "#pt" : "";
  return (
    <footer id="contact" className="vt-footer">
      <div className="container">
        <div className="vt-footer-grid">
          <div>
            <img src="assets/logo.png" alt="Vitória's Terrace" className="vt-footer__logo" loading="lazy" />
            <p className="vt-footer__muted" style={{ maxWidth: 360 }}>{t.footer.tagline}</p>
            <button className="btn btn--outline-light" onClick={onBook} style={{ marginTop: 28 }}>
              {t.footer.reserve}
            </button>
          </div>

          <div>
            <div className="vt-footer__label">{t.footer.visit}</div>
            <p className="serif" style={{ fontSize: 21, fontStyle: "italic", marginBottom: 28 }}>{meta.address}</p>

            <div className="vt-footer__label">{t.footer.contact}</div>
            <div className="vt-footer__list">
              <a href={`mailto:${meta.email}`}>{meta.email}</a>
              <a href={`tel:${meta.phone.replace(/\s/g, "")}`}>{meta.phone}</a>
              <a href={`https://wa.me/${meta.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
              <a href="https://instagram.com/vitoriasterrace" target="_blank" rel="noopener">Instagram {meta.instagram}</a>
            </div>
          </div>

          <div>
            <div className="vt-footer__label">{t.footer.wander}</div>
            <div className="vt-footer__list">
              <a href={`${homePrefix}#stays`}>{t.nav.stays}</a>
              <a href={`${homePrefix}#story`}>{t.nav.story}</a>
              <a href={`${homePrefix}#porto`}>{t.nav.porto}</a>
              <a href="recommendations.html" aria-current={!isHome ? "page" : undefined}>{t.nav.recs}</a>
            </div>

            <div className="vt-footer__label" style={{ marginTop: 28 }}>{t.footer.language}</div>
            <div className="vt-lang-row">
              {VT_LANGS.map(([code]) => (
                <button key={code} aria-pressed={code === lang} lang={VT_HTML_LANG[code]} aria-label={VT_LANG_NAMES[code]}
                  onClick={() => onLang(code)}>{VT_URL_LANG[code].toUpperCase()}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="vt-footer__base">
          <span>© 2026 Vitória&apos;s Terrace</span>
          <a href={`privacy.html${legalHash}`}>{t.footer.privacy}</a>
          <a href={`terms.html${legalHash}`}>{t.footer.terms}</a>
          <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener">{t.footer.complaints}</a>
          {meta.rnal && meta.rnal.length > 0 && (
            <span>{t.footer.license}: {meta.rnal.join(", ")}</span>
          )}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { VTPorto, VTAmenities, VTReviews, VTFooter });
