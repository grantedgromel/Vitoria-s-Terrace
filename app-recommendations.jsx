// Vitoria's Terrace — App root (recommendations page)
// Mirrors app.jsx but renders only the chrome (nav + footer + booking modal +
// tweaks panel) around the Recommendations section. Shares the same
// localStorage-backed language state as the home page.

function readLang() {
  try {
    let v = localStorage.getItem("vt-lang") || "EN";
    // Migrate ISO 3166-1 country code "KR" to ISO 639-1 language code "KO".
    if (v === "KR") { v = "KO"; try { localStorage.setItem("vt-lang", v); } catch (_) {} }
    return v;
  } catch (_) { return "EN"; }
}
function writeLang(v) {
  try { localStorage.setItem("vt-lang", v); } catch (_) { /* no-op */ }
}

function AppRecommendations() {
  const [lang, setLangState] = React.useState(readLang);
  const setLang = (v) => { writeLang(v); setLangState(v); };
  const [bookOpen, setBookOpen] = React.useState(false);
  const [initialApt, setInitialApt] = React.useState("");

  const TWEAKS = /*EDITMODE-BEGIN*/{
    "accentBlue": "#2A3F8F",
    "accentOchre": "#B89150",
    "displayFont": "Cormorant Garamond",
    "bodyFont": "Inter"
  }/*EDITMODE-END*/;

  const [tweaks, setTweak] = window.useTweaks(TWEAKS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--porto", tweaks.accentBlue);
    root.style.setProperty("--porto-deep", tweaks.accentBlue);
    root.style.setProperty("--ochre", tweaks.accentOchre);
    root.style.setProperty("--ochre-deep", tweaks.accentOchre);
    root.style.setProperty("--serif", `"${tweaks.displayFont}", Georgia, serif`);
    root.style.setProperty("--sans", `"${tweaks.bodyFont}", system-ui, sans-serif`);
  }, [tweaks]);

  // No hero behind the nav on this page — keep it permanently in solid-paper
  // mode. A scroll listener would race with this and flicker to transparent
  // when scrolled near the top.

  const t = window.VT_I18N[lang] || window.VT_I18N.EN;

  const openBooking = (aptId) => {
    setInitialApt(typeof aptId === "string" ? aptId : "");
    setBookOpen(true);
  };

  return (
    <>
      <VTNav t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} scrolled={true} currentPage="recs" />
      <main>
        <VTRecommendations t={t} lang={lang} />
      </main>
      <VTFooter t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} currentPage="recs" />

      <VTBookingModal open={bookOpen} onClose={() => setBookOpen(false)} t={t} lang={lang} initialAptId={initialApt} />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Accent palette">
          <window.TweakColor label="Porto blue" value={tweaks.accentBlue}
            onChange={(v) => setTweak('accentBlue', v)} />
          <window.TweakColor label="Tile ochre" value={tweaks.accentOchre}
            onChange={(v) => setTweak('accentOchre', v)} />
        </window.TweakSection>

        <window.TweakSection label="Typography">
          <window.TweakSelect label="Display serif" value={tweaks.displayFont}
            options={["Cormorant Garamond", "Playfair Display", "DM Serif Display", "Fraunces", "Lora"]}
            onChange={(v) => setTweak('displayFont', v)} />
          <window.TweakSelect label="Body sans" value={tweaks.bodyFont}
            options={["Inter", "Manrope", "DM Sans", "Work Sans"]}
            onChange={(v) => setTweak('bodyFont', v)} />
        </window.TweakSection>

        <window.TweakSection label="Language preview">
          <window.TweakSelect label="Locale" value={lang}
            options={["EN", "PT", "ES", "FR", "KO", "JA"]}
            onChange={(v) => setLang(v)} />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<AppRecommendations />);
