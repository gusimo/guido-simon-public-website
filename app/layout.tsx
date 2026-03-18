import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
