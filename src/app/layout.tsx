import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

// Reliable fallback for Bangla text — always available, no manual font files needed.
// SolaimanLipi / AdorshoLipi (see globals.css) take priority once you add those files.
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "আঙন | Angon — South Asian Heritage & Culture",
  description:
    "দক্ষিণ এশিয়ার ঐতিহ্য, লোকসংগীত ও চিরায়ত জীবনধারার একটি কমিউনিটি স্পেস।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body
        className={`${notoBengali.variable} min-h-screen bg-stone-50 text-stone-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
