import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-slate-100 w-full grid grid-cols-12 items-center px-16 py-4">
      <div className="col-span-3">
        <div className="flex gap-2 items-center">
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
        </div>
      </div>
      <div className="col-span-6 mx-auto">
        <ul className="flex gap-10">
          <li>
            <Link href={"#"} className="hover:text-primary">
              Beranda
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-primary">
              UMKM
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-primary">
              Produk
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-primary">
              Peta
            </Link>
          </li>
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
