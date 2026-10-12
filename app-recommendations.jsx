// Vitoria's Terrace: app root (recommendations page)
// Same chrome as the home page (nav, footer, booking panel) around the
// recommendations list. Shares the localStorage-backed language choice.

function AppRecommendations() {
  const [lang, setLangState] = React.useState(vtReadLang);
  const setLang = (v) => { vtWriteLang(v); setLangState(v); };
  const [bookOpen, setBookOpen] = React.useState(false);
  const [initialApt, setInitialApt] = React.useState("");

  const t = window.VT_I18N[lang] || window.VT_I18N.EN;

  React.useEffect(() => { vtApplyPageMeta(lang, `${t.recs.heading} · Vitória's Terrace`, t.recs.byline); }, [lang]);

  // Section links (index.html#porto, ?lang=pt#stays) arrive before React has
  // rendered the target, so scroll once after the first render.
  React.useEffect(() => {
    const id = window.location.hash && decodeURIComponent(window.location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (el) el.scrollIntoView();
  }, []);

  const openBooking = (aptId) => {
    setInitialApt(typeof aptId === "string" ? aptId : "");
    setBookOpen(true);
  };

  return (
    <>
      <VTNav t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} currentPage="recs" />
      <main style={{ paddingTop: 80 }}>
        <VTRecommendations t={t} lang={lang} />
      </main>
      <VTFooter t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} currentPage="recs" />

      <VTBookingModal open={bookOpen} onClose={() => setBookOpen(false)} t={t} lang={lang} initialAptId={initialApt} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<AppRecommendations />);
