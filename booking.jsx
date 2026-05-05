// Vitoria's Terrace — booking modal (multi-step)
// Globally exposes: VTBookingModal

function VTBookingModal({ open, onClose, t, lang, initialAptId }) {
  const tx = (a) => (a.i18n[lang] || a.i18n.EN);
  const [step, setStep] = useState(0);
  const today = new Date();
  const fmt = (d) => d.toISOString().slice(0, 10);
  const tomorrow = new Date(today.getTime() + 86400000);
  const fourth = new Date(today.getTime() + 4 * 86400000);

  const [checkin, setCheckin] = useState(fmt(tomorrow));
  const [checkout, setCheckout] = useState(fmt(fourth));
  const [guests, setGuests] = useState(2);
  const [aptId, setAptId] = useState(initialAptId || "");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (open) {
      setStep(0);
      if (initialAptId) setAptId(initialAptId);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, initialAptId]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const apts = VT_DATA.apartments;
  const apt = apts.find((a) => a.id === aptId);
  const nights = Math.max(1, Math.round((new Date(checkout) - new Date(checkin)) / 86400000));
  const subtotal = (apt ? apt.price : 240) * nights;
  const cityTax = nights * guests * 2;
  const cleaning = 45;
  const total = subtotal + cityTax + cleaning;

  const stepTitles = ["Dates & guests", t.book.details, t.book.done];

  const inputStyle = {
    width: "100%", padding: "14px 0", border: 0, borderBottom: "1px solid var(--rule)",
    background: "transparent", fontSize: 16, fontFamily: "var(--sans)",
    outline: "none", color: "var(--ink)"
  };

  const labelStyle = {
    fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
    color: "var(--granite)", fontWeight: 500, display: "block", marginBottom: 4
  };

  return (
    <div className={`book-modal ${open ? "open" : ""}`} onClick={onClose}>
      <div className="book-modal__panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: "clamp(20px, 5vw, 32px) clamp(20px, 5vw, 40px) clamp(20px, 4vw, 28px)", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <div>
              <div className="numeral" style={{ marginBottom: 6 }}>№ 0{step + 1} of 03</div>
              <h3 className="serif" style={{ fontSize: 28, fontStyle: "italic", lineHeight: 1 }}>{t.book.title}</h3>
              <div className="body" style={{ fontSize: 12, marginTop: 8 }}>{t.book.sub}</div>
            </div>
            <button onClick={onClose} aria-label="Close" style={{
              fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--granite)",
              padding: "12px 14px", minHeight: 44
            }}>{t.book.close} ×</button>
          </div>

          {/* Step rail */}
          <div style={{ display: "flex", gap: 8 }}>
            {[0, 1, 2].map((s) => (
              <div key={s} style={{
                flex: 1, height: 2,
                background: s <= step ? "var(--ink)" : "var(--rule)",
                transition: "background 0.4s ease"
              }}></div>
            ))}
          </div>
          <div className="eyebrow" style={{ marginTop: 14, fontSize: 10, color: "var(--ink)" }}>{stepTitles[step]}</div>
        </div>

        {/* Step 0 — dates & guests */}
        {step === 0 && (
          <div style={{ padding: "clamp(20px, 5vw, 40px)" }} key="s0">
            <div className="vt-form-row" style={{ marginBottom: 32 }}>
              <div>
                <label style={labelStyle}>{t.book.checkin}</label>
                <input type="date" value={checkin}
                  min={fmt(today)}
                  onChange={(e) => {
                    setCheckin(e.target.value);
                    if (new Date(e.target.value) >= new Date(checkout)) {
                      setCheckout(fmt(new Date(new Date(e.target.value).getTime() + 86400000 * 3)));
                    }
                  }}
                  style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>{t.book.checkout}</label>
                <input type="date" value={checkout}
                  min={fmt(new Date(new Date(checkin).getTime() + 86400000))}
                  onChange={(e) => setCheckout(e.target.value)}
                  style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label style={labelStyle}>{t.book.guests}</label>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBlock: 12, borderBottom: "1px solid var(--rule)" }}>
                <span className="serif italic" style={{ fontSize: 22 }}>
                  {guests} {guests === 1 ? t.book.adult : t.book.adults}
                </span>
                <div style={{ display: "flex", gap: 4 }}>
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} aria-label="Decrease guests"
                    style={{ width: 44, height: 44, border: "1px solid var(--rule)", fontSize: 18 }}>−</button>
                  <button onClick={() => setGuests(Math.min(8, guests + 1))} aria-label="Increase guests"
                    style={{ width: 44, height: 44, border: "1px solid var(--rule)", fontSize: 18 }}>+</button>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <label style={labelStyle}>{t.book.apartment}</label>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <button onClick={() => setAptId("")}
                  style={{
                    textAlign: "left", padding: "16px 20px",
                    border: "1px solid " + (aptId === "" ? "var(--ink)" : "var(--rule)"),
                    background: aptId === "" ? "var(--bone-2)" : "transparent",
                    transition: "all 0.3s ease"
                  }}>
                  <div className="serif italic" style={{ fontSize: 18 }}>{t.book.any}</div>
                  <div style={{ fontSize: 12, color: "var(--granite)", marginTop: 2 }}>We'll match you to the best fit</div>
                </button>
                {apts.map((a) => (
                  <button key={a.id} onClick={() => setAptId(a.id)}
                    disabled={a.sleeps < guests}
                    style={{
                      textAlign: "left", padding: "16px 20px",
                      border: "1px solid " + (aptId === a.id ? "var(--ink)" : "var(--rule)"),
                      background: aptId === a.id ? "var(--bone-2)" : "transparent",
                      opacity: a.sleeps < guests ? 0.4 : 1,
                      cursor: a.sleeps < guests ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease",
                      display: "flex", justifyContent: "space-between", alignItems: "center"
                    }}>
                    <div>
                      <div className="serif italic" style={{ fontSize: 18 }}>№ {a.number} · {tx(a).name}</div>
                      <div style={{ fontSize: 12, color: "var(--granite)", marginTop: 2 }}>
                        {a.sleeps} {t.book.guests.toLowerCase()} · {a.sqm}m²
                      </div>
                    </div>
                    <div className="serif" style={{ fontSize: 22 }}>€{a.price}<span style={{ fontSize: 11, color: "var(--granite)" }}>/n</span></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary preview */}
            <div style={{ background: "var(--bone-2)", padding: 24, marginBottom: 32 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>{t.book.summary}</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 14 }}>
                <span>{nights} {t.book.nights}{apt ? ` · ${tx(apt).name}` : ""}</span>
                <span>€{subtotal}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: "var(--granite)" }}>
                <span>City tax</span><span>€{cityTax}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 13, color: "var(--granite)" }}>
                <span>Cleaning</span><span>€{cleaning}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--rule)" }}>
                <span className="serif italic" style={{ fontSize: 20 }}>{t.book.total}</span>
                <span className="serif" style={{ fontSize: 24 }}>€{total}</span>
              </div>
            </div>

            <button className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setStep(1)}>
              {t.book.next} <span className="arr"></span>
            </button>
          </div>
        )}

        {/* Step 1 — details */}
        {step === 1 && (
          <div style={{ padding: "clamp(20px, 5vw, 40px)" }} key="s1">
            <div className="vt-form-row" style={{ gap: 24, marginBottom: 24 }}>
              <div>
                <label style={labelStyle}>{t.book.first}</label>
                <input style={inputStyle} value={first} onChange={(e) => setFirst(e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>{t.book.last}</label>
                <input style={inputStyle} value={last} onChange={(e) => setLast(e.target.value)} />
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>{t.book.emailL}</label>
              <input type="email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>{t.book.phoneL}</label>
              <input style={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div style={{ marginBottom: 36 }}>
              <label style={labelStyle}>{t.book.notes}</label>
              <textarea rows={3} style={{ ...inputStyle, padding: "14px 0", resize: "vertical" }}
                value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>

            <div style={{ background: "var(--bone-2)", padding: "20px 24px", marginBottom: 32, fontSize: 13 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{checkin} → {checkout} · {nights} {t.book.nights}</span>
                <span className="serif italic">€{total}</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--granite)", marginTop: 4 }}>{t.book.includes}</div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn" style={{ flex: "0 0 auto" }} onClick={() => setStep(0)}>
                ← {t.book.back}
              </button>
              <button className="btn btn--primary" style={{ flex: 1, justifyContent: "center" }}
                disabled={!first || !last || !email}
                onClick={() => setStep(2)}>
                {t.book.confirm} <span className="arr"></span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — done */}
        {step === 2 && (
          <div style={{ padding: "clamp(28px, 6vw, 56px)", textAlign: "center" }} key="s2">
            <div className="numeral" style={{ marginBottom: 24 }}>— Confirmed —</div>
            <div style={{ width: 64, height: 64, border: "1px solid var(--ochre-deep)", borderRadius: "50%", margin: "0 auto 32px", display: "grid", placeItems: "center" }}>
              <div className="serif italic" style={{ fontSize: 28, color: "var(--ochre-deep)" }}>✓</div>
            </div>
            <h3 className="display-md" style={{ marginBottom: 20 }}>{t.book.done}</h3>
            <p className="body-lg" style={{ marginBottom: 8 }}>{t.book.doneSub}</p>
            <p className="serif italic" style={{ fontSize: 20, color: "var(--ink)", marginBottom: 32 }}>{email}</p>
            <p className="body" style={{ maxWidth: 360, margin: "0 auto 40px" }}>{t.book.doneNote}</p>

            <div style={{ background: "var(--bone-2)", padding: 24, marginBottom: 32, textAlign: "left" }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Reservation</div>
              <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Reference</span><span className="mono">VT-{Date.now().toString(36).toUpperCase().slice(-6)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Stay</span><span>{checkin} → {checkout}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{t.book.apartment}</span><span>{apt ? tx(apt).name : t.book.any}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Guests</span><span>{guests}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid var(--rule)", marginTop: 4 }}>
                  <span className="serif italic" style={{ fontSize: 16 }}>{t.book.total}</span>
                  <span className="serif" style={{ fontSize: 18 }}>€{total}</span>
                </div>
              </div>
            </div>

            <button className="btn" style={{ width: "100%", justifyContent: "center" }} onClick={onClose}>
              {t.book.close}
            </button>
          </div>
        )}

        {/* tile motif footer */}
        <div className="azulejo-strip" style={{ position: "sticky", bottom: 0 }}></div>
      </div>
    </div>
  );
}

window.VTBookingModal = VTBookingModal;
