"use client";

import DusunFilter from "@/components/DusunFilter";
import UMKMCard from "@/components/landing-page/UMKMCard";
import { UMKMType, UMKMTypeOk, UMKMTypeEdit } from "@/data/umkm";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PiCircleNotchBold } from "react-icons/pi";

const dusun = ["Ketileng", "Ganggeng", "Gebyog", "Tinesek"];

const UMKMView = ({
  UMKM,
  isLoading,
}: {
  // UMKM: UMKMType[];
  // UMKM: UMKMTypeOk[];
  UMKM: UMKMTypeEdit[];
  isLoading: boolean;
  }) => {
  const [activeData, setActiveData] = useState<UMKMTypeEdit[]>(UMKM);
  // const [activeData, setActiveData] = useState<UMKMTypeOk[]>(UMKM);
  // const [activeData, setActiveData] = useState<UMKMType[]>(UMKM);
  const [checkedDusun, setCheckedDusun] = useState<string[]>(dusun);
  
  useEffect(() => {
    const filterProducts = UMKM.filter((umkm) => {
      return (
        umkm.dusun && checkedDusun.includes(umkm?.dusun)
      );
    });
    setActiveData(filterProducts);
  }, [checkedDusun, UMKM]);
  return (
    <div>
      <div className="bg-[url('/images/umkm-header-mobile.svg')] bg-cover lg:bg-[url('/images/umkm-header.png')] text-center py-12">
        <div className="mx-auto w-full px-8 lg:w-[70%]">
          <Image
            src={"/images/umkm-h1-mobile.svg"}
            width={500}
            height={500}
            alt="-"
            className="flex lg:hidden mx-auto w-[90%] pointer-events-none"
          />
          <Image
            src={"/images/umkm-h1.png"}
            width={500}
            height={500}
            alt="-"
            className="hidden lg:flex mx-auto w-[60%] pointer-events-none"
          />
          <p className="py-2 text-primary font-semibold">
          Dukung pengusaha lokal dengan memilih UMKM di Desa Tanjungrejo yang
          menawarkan produk inovatif dan berkualitas tinggi.
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
              UMKM
            </Link>
          </div>
          <DusunFilter
            checkedDusun={checkedDusun}
            setCheckedDusun={setCheckedDusun}
          />
        </div>
        <div className="py-5 rounded-md">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
            {isLoading ? (
              <div className="absolute left-0 right-0 h-[30%] screen flex items-center justify-center w-full">
                <PiCircleNotchBold
                  size={100}
                  className="animate-spin text-primary"
                />
              </div>
            ) : (
              activeData?.map((umkm) => <UMKMCard key={umkm.id} UMKM={umkm} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMView;
