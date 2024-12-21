"use client";

import ProductCard from "@/components/landing-page/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const ProductPage = () => {
  const pathname = usePathname().split("/")[1];

  console.log(pathname);
  return (
    <div>
      <div className="bg-[url('/images/umkm-header.png')] text-center py-12">
        <div className="mx-auto w-[70%]">
          <Image
            src={"/images/products-h1.png"}
            width={1000}
            height={1000}
            alt="-"
            className="flex mx-auto w-[60%] pointer-events-none"
          />
          <p className="py-2 text-primary font-semibold">
            Jelajahi keberagaman Produk UMKM di Desa Tanjungrejo melalui galeri
            kami. Temukan produk unik dan berkualitas dengan dedikasi dan
            kreativitas tinggi oleh pengusaha lokal.
          </p>
        </div>
        {/* <h1
          className="text-[2.5rem] font-poetsen text-white"
          // style={{
          //   textShadow: "1px 1px 2px #528D5C",
          // }}
          // style={{
          //   WebkitTextStroke: "5px #528D5C",
          // }}
        >
          GALERI PRODUK UMKM DESA TANJUNGREJO
        </h1> */}
      </div>
      <div className="px-8 py-5 bg-primary-bg">
        <div className="flex justify-between">
          <div className="flex text-primary items-center gap-2">
            <Link href={"/"} className="hover:text-primary-hover">
              Home
            </Link>
            <IoIosArrowForward />
            <Link href={"/"} className="font-bold hover:text-primary-hover">
              Produk
            </Link>
          </div>
          <button className="flex border-2 border-primary ps-5 pe-2 py-2 rounded-md justify-between gap-8 items-center text-primary hover:border-primary-hover">
            <p>Pilih Dusun</p>
            <div className="hover:text-primary-hover">
              <FaXmark />
            </div>
          </button>
        </div>
        <div className="py-5 rounded-md">
          <div className="grid grid-cols-3 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
