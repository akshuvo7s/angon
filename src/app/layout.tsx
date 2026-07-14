import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angon | South Asian Heritage & Culture",
  description:
    "A community space for South Asian heritage, folk music, and traditional lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
