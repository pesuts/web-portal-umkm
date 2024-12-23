"use client"

import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiCircleNotchBold } from "react-icons/pi";
import ProductCard from "@/components/landing-page/ProductCard";
import { productType } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import DusunFilter from "@/components/DusunFilter";

const dusun = ["Ketileng", "Ganggeng", "Gebyog", "Tinesek"];

const ProductsView = ({
  products,
  isLoading,
}: {
  products: productType[];
  isLoading: boolean;
}) => {
  const [activeData, setActiveData] = useState<productType[]>(products);
  const [checkedDusun, setCheckedDusun] = useState<string[]>(dusun);

  useEffect(() => {
    const filterProducts = products.filter((product) => {
      return product.umkmDetail && checkedDusun.includes(product?.umkmDetail?.dusun);
    });
    setActiveData(filterProducts);
  }, [checkedDusun, products]);

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
      </div>
      <div className="px-8 py-5 bg-primary-bg min-h-[300px]">
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
          <DusunFilter checkedDusun={checkedDusun} setCheckedDusun={setCheckedDusun}/>
        </div>
        <div className="py-5 rounded-md">
          <div className="grid grid-cols-3 gap-8">
            {isLoading ? (
              <div className="absolute left-0 right-0 h-[30%] screen flex items-center justify-center w-full">
                <PiCircleNotchBold
                  size={100}
                  className="animate-spin text-primary"
                />
              </div>
            ) : (
              activeData?.map((product) => (
                <ProductCard
                  key={product?.id + product?.umkmDetail?.name.replace(/ /g, "-")}
                  product={product}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
