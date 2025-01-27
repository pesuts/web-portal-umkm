"use client";

import ProductCard from "@/components/landing-page/ProductCard";
import { UMKMType, UMKMTypeEdit } from "@/data/umkm";
import capitalizeFirstLetter from "@/utils/capital";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { PiCircleNotchBold } from "react-icons/pi";

// const categories = ["makanan", "jasa"];
const categories = ["makanan"];

const UMKMDetailView = ({
  UMKM,
  isLoading,
}: {
  UMKM: UMKMTypeEdit;
  // UMKM: UMKMType;
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
            <div className="lg:grid lg:grid-cols-12 lg:gap-10 flex-col">
              <div className="col-span-4">
                <div className="relative h-full">
                  <Image
                    // src={UMKM?.image ?? "/images/placeholder-card.jpg"}
                    src={UMKM?.imageUrl ?? "/images/placeholder-card.jpg"}
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
                <div className="lg;px-10 px-4 py-4 h-full">
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
                          {/* <p className="-ms-1 mt-2">{UMKM?.address}</p> */}
                          <p className="-ms-1 mt-2">{UMKM?.contact?.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <BsBoxSeamFill
                            className="text-primary-2 mx-1"
                            size={25}
                          />
                          <p>{UMKM?.totalProducts} Produk</p>
                        </div>
                        {/* <div className="flex items-center gap-3">
                          <FaPhoneAlt
                            className="text-primary-2 mx-1"
                            size={25}
                          />
                          <p>{UMKM?.contact?.phone}</p>
                        </div> */}
                        <div className="flex items-center gap-3">
                          <FaUser className="text-primary-2 mx-1" size={25} />
                          <p>{UMKM?.owner}</p>
                        </div>
                        <div className="flex items-center gap-3 text-primary">
                          <BiSolidCategoryAlt
                            className="text-primary-2 mt-0.5"
                            size={35}
                          />
                          {/* {categories.map((category, i) => { */}
                          {/* {product?.category?.map((cate, i) => { */}
                          {categories.map((cate, i) => {
                            {
                              return (
                                <Link
                                  href={"#"}
                                  key={i}
                                  className="text-primary-2 hover:text-primary-hover pt-1"
                                >
                                  {capitalizeFirstLetter(cate)}
                                  {categories && i !== categories.length - 1
                                    ? // {capitalizeFirstLetter(cate?.name)}
                                      // {product?.category &&
                                      // i !== product.category.length - 1
                                      ", "
                                    : ""}
                                </Link>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="py-4 px-8 w-full text-center bg-primary-2 
              text-white text-md rounded-b-lg flex flex-col gap-2 lg:grid lg:grid-cols-2"
                >
                  <div className="justify-self-start text-left">
                    <p>Kotak Person</p>
                    <p className="font-bold text-xl lg:text-2xl">
                      {/* {UMKM?.phoneNumber} */}
                      {UMKM?.contact?.phone}
                    </p>
                  </div>
                  <div className="justify-self-end flex flex-col lg:grid lg:grid-cols-12 items-center gap-3 w-full lg:px-4">
                    <div className="flex justify-center items-center gap-4 w-full lg:col-span-4">
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
                    </div>
                    <Link
                      className="w-full flex justify-center border-2 border-primary-hover items-center py-2 gap-4 lg:gap-2 lg:px-4 bg-white rounded-lg hover:bg-primary-bg lg:col-span-8"
                      // href={`https://wa.me/${UMKM?.phoneNumber?.replace(
                      href={`https://wa.me/${UMKM?.contact?.phone?.replace(
                        /\D/g,
                        ""
                      )}`}
                    >
                      <p className="text-primary text-sm lg:text-base">
                        Hubungi Sekarang
                      </p>
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="Custom Icon"
                        className="w-6 h-6 lg:hidden"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="Custom Icon"
                        className="w-6 h-6 hidden lg:block"
                        width={200}
                        height={200}
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
                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
                  {/* {UMKM?.products.map((product) => ( */}
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
