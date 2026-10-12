// Vitoria's Terrace: app root (home page)

// Soft-redirect old `#recs` deep links to the dedicated page.
if (typeof window !== "undefined" && window.location.hash === "#recs") {
  window.location.replace("recommendations.html");
}

function App() {
  const [lang, setLangState] = React.useState(vtReadLang);
  const setLang = (v) => { vtWriteLang(v); setLangState(v); };
  const [bookOpen, setBookOpen] = React.useState(false);
  const [initialApt, setInitialApt] = React.useState("");

  React.useEffect(() => { document.documentElement.lang = VT_HTML_LANG[lang] || "en"; }, [lang]);

  const t = window.VT_I18N[lang] || window.VT_I18N.EN;

  const openBooking = (aptId) => {
    setInitialApt(typeof aptId === "string" ? aptId : "");
    setBookOpen(true);
  };

  return (
    <>
      <VTNav t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} currentPage="home" />
      <main>
        <VTHero t={t} onBook={() => openBooking()} />
        <VTApartments t={t} lang={lang} onBook={openBooking} />
        <VTStory t={t} />
        <VTPorto t={t} />
        <VTAmenities t={t} />
        <VTReviews t={t} />
      </main>
      <VTFooter t={t} lang={lang} onLang={setLang} onBook={() => openBooking()} currentPage="home" />

      <VTBookingModal open={bookOpen} onClose={() => setBookOpen(false)} t={t} lang={lang} initialAptId={initialApt} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
