"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  {
    name: "Beranda",
    link: "",
  },
  {
    name: "UMKM",
    link: "umkm",
  },
  {
    name: "Produk",
    link: "products",
  },
  {
    name: "Peta",
    link: "map",
  },
];

export default function Navbar({
  sideBar,
  isOpen,
  handleIsOpen,
}: {
  sideBar: boolean;
  isOpen?: boolean;
  // handleIsOpen?: (isOpen?: boolean) => void;
  handleIsOpen?: (isOpen: boolean) => void;
}) {
  const pathname = usePathname().split("/")[1];
  const [showNavbar, setShowNavbar] = useState(true); // Kontrol visibility navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Menyimpan posisi scroll terakhir

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Jika scroll ke bawah dan lebih dari 50px
      setShowNavbar(false);
    } else {
      // Jika scroll ke atas
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`fixed z-50 top-0 bg-slate-100 w-full justify-between lg:grid lg:grid-cols-12 items-center px-0 lg:px-16 py-4 flex ${
        sideBar ? "flex-col gap-8" : ""
      }
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      <div className="lg:col-span-3 px-8">
        <div className="flex items-center">
          <Link href={"/"} className="flex gap-2 items-center justify-center">
            <Image
              src={"/images/logo-kebumen.png"}
              width={100}
              height={100}
              alt="Brand Logo"
              className="w-10"
            />
            <div className="font-bold">
              <p>UMKM</p>
              <p className="text-primary">Tanjungrejo</p>
            </div>
          </Link>
        </div>
      </div>
      {!sideBar && (
        <button
          onClick={() => (handleIsOpen ? handleIsOpen(!isOpen) : "")}
          className="px-8 lg:hidden"
        >
          <GiHamburgerMenu size={30} className="text-primary" />
        </button>
      )}
      <div
        className={`lg:col-span-6 mx-auto ${
          sideBar ? "block" : "hidden lg:block"
        }`}
      >
        <ul className={`flex gap-10 ${sideBar ? "flex-col text-center" : ""}`}>
          {links.map((link, i) => (
            <li
              className="group transition duration-300 overflow-hidden"
              key={i}
            >
              <Link
                href={"/" + link.link}
                className={`hover:text-primary-2 hover:font-bold overflow-hidden px-1 ${
                  link.link === pathname ? "font-bold text-primary-2" : ""
                }`}
              >
                {link.name}
              </Link>
              <span
                className={`block max-w-0 bg-primary h-1 group-hover:max-w-full transition-all duration-500 ${
                  link.link === pathname ? "max-w-full" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`lg:col-span-3 justify-end ${
          sideBar ? "block" : "hidden lg:flex"
        }`}
      >
        <a
          href={`${process.env.NEXT_PUBLIC_ADMIN_URL}`}
          target="_blank"
          className="block px-4 py-2 bg-primary rounded-md hover:bg-primary-hover"
        >
          <div className="flex items-center justify-center gap-3">
            <FaUserCircle color="white" size={20} />
            <p className="font-semibold text-white">Admin</p>
          </div>
        </a>
      </div>
    </div>
  );
}
