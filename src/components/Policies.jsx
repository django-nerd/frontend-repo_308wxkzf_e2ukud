const Container = ({ children }) => (
  <div className="min-h-screen bg-[#f8f1e5] text-[#2b2b2b]">
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto prose prose-amber">
        {children}
      </div>
    </div>
  </div>
)

export const ImpressumPage = () => (
  <Container>
    <h1 className="text-3xl font-extrabold mb-6">Impressum</h1>
    <p><strong>Caffebar Hölderlin</strong><br />Hölderlinstraße 1<br />70174 Stuttgart<br />Deutschland</p>
    <p>Telefon: +49 711 1234567<br />E-Mail: hallo@caffebar-hoelderlin.de</p>
    <p>Inhaltlich Verantwortlicher gem. § 55 Abs. 2 RStV: Max Mustermann</p>
    <p>USt-IdNr.: DE123456789</p>
  </Container>
)

export const DatenschutzPage = () => (
  <Container>
    <h1 className="text-3xl font-extrabold mb-6">Datenschutzerklärung</h1>
    <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden vertraulich und entsprechend den gesetzlichen Vorschriften der DSGVO sowie dieser Datenschutzerklärung behandelt.</p>
    <h2 className="text-xl font-bold mt-6">Server-Logs</h2>
    <p>Beim Besuch dieser Website werden automatisch Informationen in sogenannten Server-Logfiles erhoben (Browsertyp, Betriebssystem, Referrer, Uhrzeit). Diese Daten sind nicht bestimmten Personen zuordenbar.</p>
    <h2 className="text-xl font-bold mt-6">Kontaktformular</h2>
    <p>Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
    <h2 className="text-xl font-bold mt-6">Cookies</h2>
    <p>Wir verwenden nur technisch notwendige Cookies. Eine Einwilligung ist hierfür nicht erforderlich. Optional eingesetzte Analyse- oder Marketing-Cookies werden nur nach Einwilligung gesetzt.</p>
    <h2 className="text-xl font-bold mt-6">Ihre Rechte</h2>
    <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Wenden Sie sich hierzu an die oben angegebene E-Mail-Adresse.</p>
  </Container>
)

export const CookiesPage = () => (
  <Container>
    <h1 className="text-3xl font-extrabold mb-6">Cookie-Hinweis</h1>
    <p>Diese Website verwendet Cookies, um die Funktionalität sicherzustellen. Funktionale Cookies sind notwendig und werden ohne Einwilligung gesetzt. Optionale Cookies (z. B. für Statistik) werden nur nach Ihrer Zustimmung platziert.</p>
  </Container>
)

export default Container
