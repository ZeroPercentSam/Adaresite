import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Inter is a variable font by default
});

export const metadata: Metadata = {
  title: "ADARE | Tampa Bay's Premier Longevity & Wellness Practice",
  description: "Exclusive, invitation-based wellness practice for high-performers. NAD+ therapy, hormone optimization, regenerative aesthetics, and concierge medicine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          cormorant.variable,
          inter.variable,
          "antialiased min-h-screen bg-navy text-ivory flex flex-col"
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
