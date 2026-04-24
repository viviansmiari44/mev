import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import TawkChat from "@/components/tawk-chat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Flash Extract MEV",
  description: "Advanced MEV & Crypto Arbitrage Trading Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#06080F] text-slate-100`}
      >
        <Navbar />
        {children}
        <Footer />
        <TawkChat />
      </body>
    </html>
  );
}