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

        <h2>3. Keine Cookies</h2>
        <p>
          Diese Website verwendet keine Cookies und setzt keine Tracking- oder
          Analyse-Tools ein.
        </p>

        <h2>4. Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites (z.&nbsp;B.
          LinkedIn). Beim Klick auf einen externen Link werden Sie auf die
          Website des jeweiligen Anbieters weitergeleitet. Dort gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters. Ich habe keinen
          Einfluss auf die Datenverarbeitung durch Dritte.
        </p>

        <h2>5. Ihre Rechte</h2>
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
