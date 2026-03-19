import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Guido Simon",
  description: "Guido Simon - Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {children}
        <GoogleAnalytics />
        <CookieConsent />
      </body>
    </html>
  );
}
