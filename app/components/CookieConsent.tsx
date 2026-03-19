"use client";

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "ga_consent";

export type ConsentStatus = "granted" | "denied" | null;

export function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "granted" || value === "denied") return value;
  return null;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsentStatus() === null) {
      setVisible(true);
    }
  }, []);

  const handleConsent = useCallback((granted: boolean) => {
    const status = granted ? "granted" : "denied";
    localStorage.setItem(CONSENT_KEY, status);
    setVisible(false);
    window.dispatchEvent(new Event("consent-update"));
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        <p style={styles.text}>
          Diese Website verwendet Google Analytics, um die Nutzung der Website zu
          analysieren. Dabei werden Cookies gesetzt und Daten an Google
          übermittelt. Weitere Informationen finden Sie in unserer{" "}
          <a href="/datenschutz" style={styles.link}>
            Datenschutzerklärung
          </a>
          .
        </p>
        <div style={styles.buttons}>
          <button
            onClick={() => handleConsent(false)}
            style={styles.btnDecline}
          >
            Ablehnen
          </button>
          <button
            onClick={() => handleConsent(true)}
            style={styles.btnAccept}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    pointerEvents: "none",
  },
  banner: {
    pointerEvents: "auto",
    maxWidth: "560px",
    width: "100%",
    backgroundColor: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
  },
  text: {
    fontSize: "0.85rem",
    lineHeight: 1.6,
    color: "#b0b0b0",
    margin: 0,
  },
  link: {
    color: "#0077b5",
    textDecoration: "underline",
  },
  buttons: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "1rem",
    justifyContent: "flex-end",
  },
  btnDecline: {
    padding: "0.5rem 1.25rem",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.15)",
    backgroundColor: "transparent",
    color: "#a0a0a0",
    fontSize: "0.85rem",
    cursor: "pointer",
    fontWeight: 500,
  },
  btnAccept: {
    padding: "0.5rem 1.25rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0077b5",
    color: "#fff",
    fontSize: "0.85rem",
    cursor: "pointer",
    fontWeight: 500,
  },
};
