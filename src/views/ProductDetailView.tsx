"use client";

import { productType } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { PiCircleNotchBold } from "react-icons/pi";

const ProductDetailView = ({ product, isLoading }: { product: productType, isLoading: boolean }) => {
  const [activePicture, setActivePicture] = useState<number>(0);

  return (
    <div className="px-8 py-5 bg-primary-bg">
      <div className="flex justify-between">
        <div className="flex text-primary items-center gap-2">
          <Link href={"/"} className="hover:text-primary-hover">
            Home
          </Link>
          <IoIosArrowForward />
          <Link href={"/products"} className="hover:text-primary-hover">
            Produk
          </Link>
          <IoIosArrowForward />
          <Link
            href={"/products/123"}
            className="font-bold hover:text-primary-hover"
          >
            {product?.name}
          </Link>
        </div>
      </div>
      <div className="relative min-h-96">
        {isLoading ? (
          <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
            <PiCircleNotchBold
              size={100}
              className="animate-spin text-primary"
            />
          </div>
        ) : (
          <div className="rounded-md grid grid-cols-12 gap-6 my-6">
            <div className="bg-white col-span-8 grid grid-cols-2 rounded-md px-12 p-8 gap-8">
              <div>
                <div className="h-[84%]">
                  <Image
                    src={
                      product?.images?.[activePicture] ||
                      "/images/placeholder-card.jpg"
                    }
                    width={500}
                    height={500}
                    alt="Foto Produk"
                    className="rounded-md h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-12 gap-2 mt-4">
                  {[0, 1, 2, 3].map((num) => (
                    <button
                      key={num}
                      className={`col-span-3 rounded-md border-primary ${
                        activePicture === num ? "border-4" : "hover:border-4"
                      }`}
                      onClick={() => setActivePicture(num)}
                    >
                      <Image
                        src={
                          product?.images?.[num] ||
                          "/images/placeholder-card.jpg"
                        }
                        width={500}
                        height={500}
                        alt="Foto Produk"
                        className="h-full"
                        style={{ objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-bold">{product?.name}</h1>
                  <p className="text-slate-500 my-3">
                    {product?.description}
                  </p>
                  <hr />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-4">
                    {product && product.price !== undefined
                      ? product.price.toLocaleString("ID-id", {
                          style: "currency",
                          currency: "IDR",
                        })
                      : "???"}
                  </p>
                  <Link
                    className="flex justify-center items-center mt-2 px-5 py-2 gap-2 bg-primary-2 border-white border rounded-md mx-auto w-full hover:bg-primary-hover"
                    href={"https://wa.me/6287737982020"}
                  >
                    <p className="text-white">Pesan Sekarang</p>
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="Custom Icon"
                      className="w-6 h-6"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-4 bg-white border border-slate-300 rounded-md p-5">
              <div className="relative">
                <Image
                  src={"/images/placeholder-card.jpg"}
                  width={500}
                  height={500}
                  alt="UMKM"
                  style={{ objectFit: "contain" }}
                  className="rounded-lg h-52"
                />
                <div className="rounded-lg absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
              </div>
              <hr className="bg-slate-300 h-px border-0 mt-4" />
              <div className="px-10 py-4">
                <div className="py-2">
                  <h3 className="text-2xl font-bold">
                    {product?.umkmDetail?.name}
                  </h3>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="flex gap-3">
                      <div className="flex">
                        <MdLocationPin
                          className="text-primary-2 mt-0.5"
                          size={20}
                        />
                      </div>
                      <p>
                        {product?.umkmDetail?.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <BsBoxSeamFill className="text-primary-2" size={20} />
                      <p>
                        <span className="pe-1">
                          {product?.umkmDetail?.totalProducts}
                        </span>
                        Produk
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="text-primary-2" size={20} />
                      <p>{product?.umkmDetail?.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={`/umkm/${product?.umkmId}`}
                className="block py-4 px-3 w-full text-center font-bold bg-primary 
              text-white text-md rounded-b-lg hover:bg-primary-hover"
              >
                Produk Lainnya
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailView;
