import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Guido Simon – IT-Manager, Tech Lead & AI Infrastructure aus Köln",
  description:
    "Guido Simon ist ein generalistischer IT-Manager aus Köln. Erfahren in Softwareentwicklung, Site Reliability Engineering, AI-Infrastruktur und dem Aufbau leistungsstarker Tech-Teams.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.guidosimon.de",
    siteName: "Guido Simon",
    title: "Guido Simon – IT-Manager, Tech Lead & AI Infrastructure aus Köln",
    description:
      "Generalistischer IT-Manager aus Köln. Softwareentwicklung, SRE, AI-Infrastruktur und High-Performing Teams.",
    images: [
      {
        url: "https://www.guidosimon.de/guido-simon-it-manager-koeln.webp",
        width: 320,
        height: 320,
        alt: "Guido Simon – IT-Manager aus Köln",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Guido Simon – IT-Manager aus Köln",
    description:
      "Generalistischer IT-Manager. Softwareentwicklung, SRE, AI-Infrastruktur und High-Performing Teams.",
    images: ["https://www.guidosimon.de/guido-simon-it-manager-koeln.webp"],
  },
  alternates: {
    canonical: "https://www.guidosimon.de",
  },
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
