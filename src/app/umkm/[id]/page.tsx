"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const ProductPage = () => {
  const pathname = usePathname().split("/")[1];

  console.log(pathname);
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
            Golak
          </Link>
        </div>
      </div>
      <div className="border-2 shadow-lg bg-white border-slate-300 rounded-2xl p-5 my-6">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <div className="relative h-full">
              <Image
                src={"/images/placeholder-card.jpg"}
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
                <h3 className="text-3xl font-bold">Pabrik Tahu</h3>
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col gap-5 mb-2">
                    <div className="flex gap-3">
                      <div className="flex">
                        <MdLocationPin
                          className="text-primary-2 mt-0.5"
                          size={35}
                        />
                      </div>
                      <p className="-ms-1 mt-2">
                        Gebyog, Tanjungrejo, Kec. Buluspesantren, Kabupaten
                        Kebumen, Jawa Tengah 54391
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <BsBoxSeamFill
                        className="text-primary-2 mx-1"
                        size={25}
                      />
                      <p>2 Produk</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="text-primary-2 mx-1" size={25} />
                      <p>087737982020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="py-4 px-8 w-full text-center bg-primary 
              text-white text-md rounded-b-lg grid grid-cols-2"
            >
              <div className="justify-self-start text-left">
                <p>Kotak Person</p>
                <p className="font-bold text-2xl">+62 812 1234 5678</p>
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
                  href={"https://wa.me/6287737982020"}
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
        <hr className="bg-slate-300 h-px border-0 mt-4" />
      </div>
    </div>
  );
};

export default ProductPage;
