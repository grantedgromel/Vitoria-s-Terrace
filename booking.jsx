// Vitoria's Terrace: booking request panel
// Globally exposes: VTBookingModal
//
// There is no booking backend. The panel collects dates and contact details,
// then hands a pre-filled message to the guest's own email app or WhatsApp.
// Nothing is sent until the guest presses send there, and the copy says so.

const VT_DATE_LOCALES = { EN: "en-GB", PT: "pt-PT", ES: "es-ES", FR: "fr-FR", KR: "ko-KR", JA: "ja-JP" };
// Porto municipal tourist tax: €3 per guest aged 13+ per night, capped at 7 nights
// (in force since 1 Dec 2024, Câmara Municipal do Porto).
const VT_CITY_TAX = { perNight: 3, maxNights: 7 };
const DAY = 86400000;

// Dates are "YYYY-MM-DD" strings in the guest's local calendar.
const vtIso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const vtAddDays = (s, n) => { const [y, m, d] = s.split("-").map(Number); return vtIso(new Date(y, m - 1, d + n)); };
const vtNights = (a, b) => Math.round((new Date(b + "T00:00:00Z") - new Date(a + "T00:00:00Z")) / DAY);

function VTBookingModal({ open, onClose, t, lang, initialAptId }) {
  const tx = (a) => (a.i18n[lang] || a.i18n.EN);
  const today = vtIso(new Date());
  const panelRef = React.useRef(null);

  const [step, setStep] = useState(0);
  const [checkin, setCheckin] = useState(vtAddDays(today, 1));
  const [checkout, setCheckout] = useState(vtAddDays(today, 4));
  const [guests, setGuests] = useState(2);
  const [aptId, setAptId] = useState(initialAptId || "");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  useDialog(open, onClose, panelRef);

  useEffect(() => {
    if (open) { setStep(0); setShowErrors(false); setAptId(initialAptId || ""); }
  }, [open, initialAptId]);

  // Move focus to the top of each new step so keyboard and screen-reader users start there.
  useEffect(() => {
    if (!open || !panelRef.current || step === 0) return;
    const h = panelRef.current.querySelector("[data-step-focus]");
    if (h) h.focus();
  }, [step]);

  const apts = VT_DATA.apartments;
  const maxSleeps = Math.max(...apts.map((a) => a.sleeps));
  const apt = apts.find((a) => a.id === aptId);

  // A chosen apartment that no longer fits the party is cleared, not kept silently.
  useEffect(() => { if (apt && apt.sleeps < guests) setAptId(""); }, [guests]);

  const nights = vtNights(checkin, checkout);
  const datesOk = checkin >= today && nights >= 1;
  const rate = apt && apt.price && datesOk ? apt.price * nights : null;
  const cityTax = guests * Math.min(Math.max(nights, 0), VT_CITY_TAX.maxNights) * VT_CITY_TAX.perNight;

  const dateFmt = new Intl.DateTimeFormat(VT_DATE_LOCALES[lang] || "en-GB", { timeZone: "UTC", day: "numeric", month: "short", year: "numeric" });
  const showDate = (s) => dateFmt.format(new Date(s + "T00:00:00Z"));
  const nameOk = Boolean(first.trim() && last.trim());
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const aptName = apt ? tx(apt).name : t.book.any;

  const lines = [
    [t.book.checkin, showDate(checkin)],
    [t.book.checkout, showDate(checkout)],
    [t.book.nightsLabel, String(nights)],
    [t.book.guests, String(guests)],
    [t.book.apartment, aptName],
    [t.book.nameL, `${first.trim()} ${last.trim()}`.trim()],
    [t.book.emailL, email.trim()],
    [t.book.phoneL, phone.trim()],
    [t.book.notesL, notes.trim()]
  ].filter(([, v]) => v);
  const subject = `${t.book.requestSubject}: ${showDate(checkin)} / ${showDate(checkout)}`;
  const body = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  const mailHref = `mailto:${VT_DATA.meta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const waHref = `https://wa.me/${VT_DATA.meta.whatsapp}?text=${encodeURIComponent(subject + "\n\n" + body)}`;

  const steps = [t.book.stepDates, t.book.details, t.book.stepSend];

  const next0 = () => { if (datesOk) { setShowErrors(false); setStep(1); } else setShowErrors(true); };
  const next1 = () => { if (nameOk && emailOk) { setShowErrors(false); setStep(2); } else setShowErrors(true); };

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="book-modal open" onClick={onClose}>
      <div className="book-modal__panel" role="dialog" aria-modal="true" aria-labelledby="vt-book-title"
        ref={panelRef} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        <div className="vt-panel-head">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
            <div>
              <h2 id="vt-book-title" className="serif" tabIndex={-1} data-autofocus=""
                style={{ fontSize: 32, lineHeight: 1.1, fontWeight: 400 }}>{t.book.title}</h2>
              <p className="body" style={{ fontSize: 15, marginTop: 8 }}>{t.book.sub}</p>
            </div>
            <button onClick={onClose} className="vt-panel-close">{t.book.close}</button>
          </div>
          <ol className="vt-steps" style={{ listStyle: "none" }}>
            {steps.map((s, i) => (
              <li key={s} aria-current={i === step ? "step" : undefined}>{i + 1}. {s}</li>
            ))}
          </ol>
        </div>

        {step === 0 && (
          <div className="vt-panel-body">
            <div className="vt-form-row">
              <label className="vt-field">
                <span className="vt-field__label">{t.book.checkin}</span>
                <input type="date" className="vt-input" value={checkin} min={today} required
                  aria-invalid={!datesOk ? "true" : undefined} aria-describedby={!datesOk ? "vt-err-dates" : undefined}
                  onChange={(e) => {
                    if (!e.target.value) return;
                    const v = e.target.value < today ? today : e.target.value;
                    setCheckin(v);
                    if (vtNights(v, checkout) < 1) setCheckout(vtAddDays(v, 3));
                  }} />
              </label>
              <label className="vt-field">
                <span className="vt-field__label">{t.book.checkout}</span>
                <input type="date" className="vt-input" value={checkout} min={vtAddDays(checkin, 1)} required
                  aria-invalid={!datesOk ? "true" : undefined} aria-describedby={!datesOk ? "vt-err-dates" : undefined}
                  onChange={(e) => e.target.value && setCheckout(e.target.value)} />
              </label>
            </div>
            {!datesOk && <p id="vt-err-dates" className="vt-error" role="alert">{t.book.errDates}</p>}
            <p className="vt-summary__note" style={{ margin: "-8px 0 24px" }}>{t.arrival}</p>

            <div className="vt-field">
              <span className="vt-field__label" id="vt-guests-label">{t.book.guests}</span>
              <div className="vt-stepper" role="group" aria-labelledby="vt-guests-label">
                <span className="serif" style={{ fontSize: 24 }} aria-live="polite">{guests}</span>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} aria-label={t.book.fewer}>−</button>
                  <button onClick={() => setGuests(Math.min(8, guests + 1))} aria-label={t.book.more}>+</button>
                </div>
              </div>
            </div>

            <div className="vt-field">
              <span className="vt-field__label" style={{ marginBottom: 10 }}>{t.book.apartment}</span>
              <div style={{ display: "grid", gap: 8 }}>
                <button className="vt-choice" aria-pressed={aptId === ""} onClick={() => setAptId("")}>
                  <span>
                    <span className="serif" style={{ fontSize: 20, display: "block" }}>{t.book.any}</span>
                    <span style={{ fontSize: 14, color: "var(--granite)" }}>{guests > maxSleeps ? t.book.groupNote : t.book.anyNote}</span>
                  </span>
                </button>
                {apts.map((a) => (
                  <button key={a.id} className="vt-choice" aria-pressed={aptId === a.id}
                    disabled={a.sleeps < guests} onClick={() => setAptId(a.id)}>
                    <span>
                      <span className="serif" style={{ fontSize: 20, display: "block" }}>{vtName(tx(a).name)}</span>
                      <span style={{ fontSize: 14, color: "var(--granite)" }}>{vtCount(t, "guests", a.sleeps)} · {a.sqm} m²</span>
                    </span>
                    <span style={{ fontSize: 15, whiteSpace: "nowrap" }}>
                      {a.price ? vtFrom(t, a.price, lang) : t.apt.onRequest}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="vt-summary">
              <div className="eyebrow" style={{ marginBottom: 10 }}>{t.book.summary}</div>
              {rate !== null ? (
                <>
                  <div className="vt-summary__row">
                    <span>{nights} × {vtEur(apt.price, lang)}</span><span>{vtEur(rate, lang)}</span>
                  </div>
                  <div className="vt-summary__row" style={{ color: "var(--granite)" }}>
                    <span>{t.book.cityTax}</span><span>{vtEur(cityTax, lang)}</span>
                  </div>
                  <div className="vt-summary__row" style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--rule)" }}>
                    <span className="serif" style={{ fontSize: 20 }}>{t.book.total}</span>
                    <span className="serif" style={{ fontSize: 22 }}>{vtEur(rate + cityTax, lang)}</span>
                  </div>
                  <p className="vt-summary__note">{t.book.estimateNote}</p>
                </>
              ) : (
                <p style={{ fontSize: 15 }}>
                  {datesOk ? `${nights} ${nights === 1 ? t.book.night : t.book.nights}. ` : ""}{t.book.estimateNone}
                </p>
              )}
            </div>

            <button className="btn btn--primary" style={{ width: "100%" }} onClick={next0}>{t.book.next}</button>
          </div>
        )}

        {step === 1 && (
          <div className="vt-panel-body">
            <h3 className="visually-hidden" tabIndex={-1} data-step-focus="">{t.book.details}</h3>
            <div className="vt-form-row">
              <label className="vt-field">
                <span className="vt-field__label">{t.book.first}</span>
                <input className="vt-input" autoComplete="given-name" required value={first}
                  aria-invalid={showErrors && !first.trim() ? "true" : undefined}
                  aria-describedby={showErrors && !nameOk ? "vt-err-name" : undefined}
                  onChange={(e) => setFirst(e.target.value)} />
              </label>
              <label className="vt-field">
                <span className="vt-field__label">{t.book.last}</span>
                <input className="vt-input" autoComplete="family-name" required value={last}
                  aria-invalid={showErrors && !last.trim() ? "true" : undefined}
                  aria-describedby={showErrors && !nameOk ? "vt-err-name" : undefined}
                  onChange={(e) => setLast(e.target.value)} />
              </label>
            </div>
            {showErrors && !nameOk && <p id="vt-err-name" className="vt-error" role="alert">{t.book.errName}</p>}
            <label className="vt-field">
              <span className="vt-field__label">{t.book.emailL}</span>
              <input type="email" className="vt-input" autoComplete="email" required value={email}
                aria-invalid={showErrors && !emailOk ? "true" : undefined}
                aria-describedby={showErrors && !emailOk ? "vt-err-email" : undefined}
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            {showErrors && !emailOk && <p id="vt-err-email" className="vt-error" role="alert">{t.book.errEmail}</p>}
            <label className="vt-field">
              <span className="vt-field__label">{t.book.phoneL} ({t.book.optional})</span>
              <input type="tel" className="vt-input" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className="vt-field">
              <span className="vt-field__label">{t.book.notes}</span>
              <textarea rows={3} className="vt-input" style={{ resize: "vertical" }} value={notes} onChange={(e) => setNotes(e.target.value)} />
            </label>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn" onClick={() => setStep(0)}>{t.book.back}</button>
              <button className="btn btn--primary" style={{ flex: 1 }} onClick={next1}>{t.book.confirm}</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="vt-panel-body">
            <h3 className="serif" tabIndex={-1} data-step-focus=""
              style={{ fontSize: 26, fontWeight: 400, marginBottom: 8 }}>{t.book.readyTitle}</h3>
            <p className="body" style={{ marginBottom: 24 }}>{t.book.readySub}</p>

            <dl className="vt-review-list">
              {lines.map(([k, v]) => (<React.Fragment key={k}><dt>{k}</dt><dd>{v}</dd></React.Fragment>))}
            </dl>

            <div style={{ display: "grid", gap: 10 }}>
              <a className="btn btn--primary" href={mailHref}>{t.book.sendEmail}</a>
              <a className="btn" href={waHref} target="_blank" rel="noopener">{t.book.sendWhatsapp}</a>
              <button className="btn" onClick={() => setStep(1)}>{t.book.back}</button>
            </div>

            <p className="body" style={{ fontSize: 14, marginTop: 20 }}>
              {t.book.readyNote} <a className="link-u" href={`mailto:${VT_DATA.meta.email}`}>{VT_DATA.meta.email}</a>
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

window.VTBookingModal = VTBookingModal;
