"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./navbar";
import Footer from "@/components/landing-page/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, isOpen]);

  const handleIsOpen = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poetsenOne.variable} font-sans antialiased`}
      >
        <div ref={ref} className="relative">
          {isOpen && (
            <div className="fixed top-0 bottom-0 right-24 w-60 z-50 py-8 bg-slate-100 border-2 border-primary rounded-md">
              <button
                className="flex items-end justify-end self-end w-full pe-6"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <IoIosCloseCircle
                  size={35}
                  className="text-primary-2 hover:text-primary-hover"
                />
              </button>
              <div>
                <Navbar sideBar={true} />
              </div>
            </div>
          )}
        </div>
        <div className={`${isOpen ? "blur-lg" : ""}`}>
          <Navbar sideBar={false} isOpen={isOpen} handleIsOpen={handleIsOpen} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
