// Vitoria's Terrace — App root + Tweaks integration

function App() {
  const [lang, setLang] = React.useState("EN");
  const [bookOpen, setBookOpen] = React.useState(false);
  const [initialApt, setInitialApt] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);

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

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = window.VT_I18N[lang] || window.VT_I18N.EN;

  const openBooking = (aptId) => {
    setInitialApt(typeof aptId === "string" ? aptId : "");
    setBookOpen(true);
  };

  return (
    <>
      <VTNav t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} scrolled={scrolled} />
      <VTHero t={t} onBook={() => openBooking()} />
      <VTApartments t={t} lang={lang} onBook={openBooking} />
      <VTStory t={t} />
      <VTPorto t={t} />
      <VTRecommendations t={t} lang={lang} />
      <VTAmenities t={t} />
      <VTReviews t={t} />
      <VTFooter t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} />

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
            options={["EN", "PT", "ES", "FR", "KR", "JA"]}
            onChange={(v) => setLang(v)} />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
