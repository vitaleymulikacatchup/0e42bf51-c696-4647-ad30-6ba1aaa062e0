import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemeCoin Fiesta",
  description: "Create a playful, single-page landing that explains the meme token, how to buy, and tokenomics, with clear CTAs and a friendly UX.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${poppins.variable} antialiased`}>
        <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "highlight" }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}