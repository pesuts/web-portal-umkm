"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaUserCircle } from "react-icons/fa";

const links = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "UMKM",
    link: "/umkm",
  },
  {
    name: "Produk",
    link: "/products",
  },
  {
    name: "Peta",
    link: "/map",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="bg-slate-100 w-full grid grid-cols-12 items-center px-16 py-4">
      <div className="col-span-3">
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
      <div className="col-span-6 mx-auto">
        <ul className="flex gap-10">
          {links.map((link, i) => (
            <li className="group transition duration-300 overflow-hidden" key={i}>
              <Link
                href={"#"}
                className={`hover:text-primary hover:font-bold overflow-hidden px-1 ${
                  link.link === pathname ? "font-bold text-primary" : ""
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
      <div className="col-span-3 flex justify-end">
        <button className="px-4 py-2 bg-primary rounded-md hover:bg-primary-dark">
          <div className="flex items-center justify-center gap-2">
            <FaUserCircle color="white" size={20} />
            <p className="font-semibold text-white">Admin</p>
          </div>
        </button>
      </div>
    </div>
  );
}
