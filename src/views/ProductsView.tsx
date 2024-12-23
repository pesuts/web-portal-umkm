"use client"

import { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { PiCircleNotchBold } from "react-icons/pi";
import ProductCard from "@/components/landing-page/ProductCard";
import { productType } from "@/data/product";
import Image from "next/image";
import Link from "next/link";

const dusun = ["Ketileng", "Ganggeng", "Gebyog", "Tinesek"];

const ProductsView = ({
  products,
  isLoading,
}: {
  products: productType[];
  isLoading: boolean;
}) => {
  const [activeProducts, setActiveProducts] = useState<productType[]>(products);
  const [pilihDusun, setPilihDusun] = useState<boolean>(false);
  const [checkedDusun, setCheckedDusun] = useState<string[]>(dusun);
  const dropdownRef = useRef<HTMLUListElement | null>(null); 
  const buttonRef = useRef<HTMLButtonElement | null>(null); 

  useEffect(() => {
    const filterProducts = products.filter((product) => {
      return product.umkmDetail && checkedDusun.includes(product?.umkmDetail?.dusun);
    });
    setActiveProducts(filterProducts);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setPilihDusun(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setPilihDusun(!pilihDusun)}
              className={`flex border-2 border-primary ps-5 pe-2 py-2 rounded-md justify-between gap-8 items-center text-primary hover:border-primary-hover ${pilihDusun ? "bg-primary text-white border-primary-dark border-2" : "bg-primary-bg"}`}
            >
              <p>Pilih Dusun</p>
              <div onClick={(e) => { 
                e.stopPropagation();
                setCheckedDusun([]);
                setPilihDusun(true);
              }} className="hover:text-primary-hover">
                <FaXmark />
              </div>
            </button>
            {pilihDusun && (
              <ul
                ref={dropdownRef}
                style={{ zIndex: 100 }}
                className={`absolute block left-0 right-0 border border-primary p-3 rounded-md bg-primary-bg transition-all duration-500`}
              >
                {dusun.map((e) => (
                  <li key={e} className="hover:text-primary-hover py-2">
                    <button
                      onClick={() => {
                        if (checkedDusun.includes(e)) {
                          setCheckedDusun(
                            checkedDusun.filter((curr) => curr !== e)
                          );
                        } else {
                          setCheckedDusun([...checkedDusun, e]);
                        }
                      }}
                      className="flex items-center w-full gap-2 px-3"
                    >
                      {checkedDusun.includes(e) ? (
                        <ImCheckboxChecked className="text-primary" size={20} />
                      ) : (
                        <ImCheckboxUnchecked
                          className="text-primary"
                          size={20}
                        />
                      )}
                      <p className="hover:text-primary-hover">{e}</p>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
              activeProducts?.map((product) => (
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
