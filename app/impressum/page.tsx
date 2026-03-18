import styles from "../legal.module.css";

export const metadata = {
  title: "Impressum – Guido Simon",
};

export default function Impressum() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <a href="/" className={styles.backLink}>
          &larr; Zurück
        </a>
        <h1 className={styles.title}>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Guido Simon
          <br />
          c/o Codeflix GmbH
          <br />
          Dürener Str. 220-222
          <br />
          50931 Köln
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:info@guidosimon.de">info@guidosimon.de</a>
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
      </div>
    </main>
  );
}
