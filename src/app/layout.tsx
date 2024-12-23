import {
  Poppins,
  // Poetsen_One
} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./navbar";
import Footer from "@/components/landing-page/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal UMKM - Desa Tanjungrejo",
  description: "Portal UMKM - Desa Tanjungrejo",
  authors: [{ name: "KKN 82 UPN", url: process.env.NEXT_PUBLIC_API_URL }],
  icons: {
    icon: "/kebumen.ico",
  },
  openGraph: {
    title: "Portal UMKM - Desa Tanjungrejo",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const poetsenOne = localFont({
  src: "./fonts/PoetsenOne-Regular.ttf",
  variable: "--font-poetsen-one",
  weight: "400",
});

// const poetsenOne = Poetsen_One({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-poetsen-one",
//   display: "swap",
//   adjustFontFallback: false,
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poetsenOne.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
