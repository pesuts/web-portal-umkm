"use client";

import ProductCard from "@/components/landing-page/ProductCard";
import { UMKMType } from "@/data/umkm";
import Image from "next/image";
import Link from "next/link";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { PiCircleNotchBold } from "react-icons/pi";

const UMKMDetailView = ({
  UMKM,
  isLoading,
}: {
  UMKM: UMKMType;
  isLoading: boolean;
}) => {
  return (
    <div className="px-8 py-5 bg-primary-bg">
      <div className="flex justify-between">
        <div className="flex text-primary items-center gap-2">
          <Link href={"/"} className="hover:text-primary-hover">
            Home
          </Link>
          <IoIosArrowForward />
          <Link href={"/umkm"} className="hover:text-primary-hover">
            UMKM
          </Link>
          <IoIosArrowForward />
          <Link
            href={"/umkm/123"}
            className="font-bold hover:text-primary-hover"
          >
            {UMKM?.name}
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
          <div className="border-2 bg-white shadow-lg rounded-2xl p-5 my-6">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-4">
                <div className="relative h-full">
                  <Image
                    src={UMKM?.image ?? "/images/placeholder-card.jpg"}
                    width={500}
                    height={500}
                    alt="UMKM"
                    style={{ objectFit: "contain" }}
                    className="rounded-lg w-[100%]"
                  />
                  <div className="rounded-lg absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
                </div>
              </div>
              <div className="col-span-8 flex flex-col justify-between">
                <div className="px-10 py-4 h-full">
                  <div className="py-2 h-full">
                    <h3 className="text-3xl font-bold">{UMKM?.name}</h3>
                    <div className="flex items-center h-full">
                      <div className="flex flex-col gap-5 mb-2">
                        <div className="flex gap-3">
                          <div className="flex">
                            <MdLocationPin
                              className="text-primary-2 mt-0.5"
                              size={35}
                            />
                          </div>
                          <p className="-ms-1 mt-2">{UMKM?.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <BsBoxSeamFill
                            className="text-primary-2 mx-1"
                            size={25}
                          />
                          <p>{UMKM?.totalProducts} Produk</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaPhoneAlt
                            className="text-primary-2 mx-1"
                            size={25}
                          />
                          <p>{UMKM?.phoneNumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="py-4 px-8 w-full text-center bg-primary-2 
              text-white text-md rounded-b-lg grid grid-cols-2"
                >
                  <div className="justify-self-start text-left">
                    <p>Kotak Person</p>
                    <p className="font-bold text-2xl">{UMKM?.phoneNumber}</p>
                  </div>
                  <div className="justify-self-end flex items-center gap-3 px-4">
                    <Link href={"#"}>
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                        alt="Instagram Icon"
                        className="w-8 h-8"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"#"}>
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                        alt="Facebook Icon"
                        className="w-8 h-8"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link
                      className="flex justify-center border-2 border-primary-hover items-center py-2 gap-2 px-5 bg-white rounded-md hover:bg-primary-bg"
                      href={`https://wa.me/${UMKM?.phoneNumber?.replace(
                        /\D/g,
                        ""
                      )}`}
                    >
                      <p className="text-primary">Hubungi Sekarang</p>
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
            </div>
            <hr className="bg-slate-300 h-px border-0 my-4" />
            {UMKM?.products && (
              <div className="bg-primary-bg rounded-md p-4">
                <h1 className="text-3xl text-white font-bold text-center mb-6 bg-primary py-4 rounded-md">
                  Produk UMKM
                </h1>
                <div className="grid grid-cols-3 gap-8">
                  {UMKM?.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      dusun={UMKM.dusun}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UMKMDetailView;
