import styles from "../legal.module.css";

export const metadata = {
  title: "Datenschutzerklärung – Guido Simon",
};

export default function Datenschutz() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <a href="/" className={styles.backLink}>
          &larr; Zurück
        </a>
        <h1 className={styles.title}>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          Guido Simon
          <br />
          c/o Codeflix GmbH
          <br />
          Dürener Str. 220-222
          <br />
          50931 Köln
          <br />
          E-Mail:{" "}
          <a href="mailto:info@guidosimon.de">info@guidosimon.de</a>
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei Amazon Web Services (AWS) gehostet. Beim Besuch
          dieser Website erfasst der Server automatisch technische Daten in
          sogenannten Server-Log-Dateien, die Ihr Browser automatisch
          übermittelt. Dazu gehören:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Adresse der aufgerufenen Seite (URL)</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
          <li>Verwendeter Browser und Betriebssystem</li>
        </ul>
        <p>
          Diese Daten werden zur Sicherstellung eines störungsfreien Betriebs
          der Website erhoben. Eine Zusammenführung dieser Daten mit anderen
          Datenquellen wird nicht vorgenommen. Die Verarbeitung erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          der technischen Bereitstellung der Website).
        </p>
        <p>
          Auftragsverarbeitung: AWS, Inc., 410 Terry Avenue North, Seattle, WA
          98109-5210, USA. AWS ist unter dem EU-US Data Privacy Framework
          zertifiziert.
        </p>

        <h2>3. Google Analytics</h2>
        <p>
          Diese Website nutzt Google Analytics, einen Webanalysedienst der Google
          Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street,
          Dublin 4, Irland. Google Analytics verwendet Cookies, die eine Analyse
          der Nutzung der Website ermöglichen.
        </p>
        <p>
          <strong>Google Analytics wird erst aktiviert, nachdem Sie Ihre
          ausdrückliche Einwilligung über den Cookie-Banner erteilt haben</strong>{" "}
          (Art. 6 Abs. 1 lit. a DSGVO). Ohne Ihre Einwilligung werden keine
          Analyse-Cookies gesetzt und keine Daten an Google übermittelt.
        </p>
        <p>Folgende Daten werden dabei verarbeitet:</p>
        <ul>
          <li>Anonymisierte IP-Adresse (IP-Anonymisierung ist aktiviert)</li>
          <li>Besuchte Seiten und Verweildauer</li>
          <li>Verwendeter Browser und Betriebssystem</li>
          <li>Herkunftsquelle (Referrer)</li>
        </ul>
        <p>
          Die erhobenen Daten werden in der Regel an einen Server von Google in
          den USA übertragen. Google ist unter dem EU-US Data Privacy Framework
          zertifiziert.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die
          gespeicherten Cookies in Ihrem Browser löschen. Beim nächsten Besuch
          der Website wird der Cookie-Banner erneut angezeigt.
        </p>
        <p>
          Weitere Informationen zum Umgang mit Nutzerdaten bei Google Analytics
          finden Sie in der{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>

        <h2>4. Cookies</h2>
        <p>
          Diese Website setzt Cookies nur ein, wenn Sie dem Einsatz von Google
          Analytics über den Cookie-Banner ausdrücklich zustimmen. Ohne Ihre
          Einwilligung werden keine Cookies gesetzt. Sie können bereits gesetzte
          Cookies jederzeit über die Einstellungen Ihres Browsers löschen.
        </p>

        <h2>5. Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites (z.&nbsp;B.
          LinkedIn). Beim Klick auf einen externen Link werden Sie auf die
          Website des jeweiligen Anbieters weitergeleitet. Dort gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters. Ich habe keinen
          Einfluss auf die Datenverarbeitung durch Dritte.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer
          personenbezogenen Daten:
        </p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte
          E-Mail-Adresse. Sie haben zudem das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren.
        </p>
      </div>
    </main>
  );
}
