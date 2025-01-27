"use client"

import GoogleMapComponent from "@/components/GoogleMapComponent";
import { UMKMTypeEdit } from "@/data/umkm";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const dusun = ["Ketileng", "Ganggeng", "Gebyog", "Tinesek"];

const MapView = ({
  UMKM,
  isLoading,
}: {
  UMKM: UMKMTypeEdit[];
  isLoading?: boolean;
}) => {
  const [checkedDusun, setCheckedDusun] = useState<string[]>(dusun);
  const [umkm, setUMKM] = useState<UMKMTypeEdit[]>(UMKM);
  // const [umkm, setUMKM] = useState<UMKMTypeEdit[]>([]);
  const [showDusun, setShowDusun] = useState<string[]>(dusun);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(true);

  // useEffect(() => {
  //   setUMKM(listUmkm);
  // }, []);

  useEffect(() => {
    const newUMKM = umkm.filter((_: UMKMTypeEdit) => showDusun.includes(_.dusun));
    // const newUMKM = listUmkm.filter((umkm) => showDusun.includes(umkm.dusun));
    setUMKM(newUMKM);
  }, [showDusun]);

  return (
    <div className="lg:h-screen h-[600px] mb-28 lg:mb-0">
      <div className="bg-primary py-3">
        <div className="mx-auto w-[70%]">
          <Image
            src={"/images/map-h1-mobile.svg"}
            width={500}
            height={500}
            alt="-"
            className="flex mx-auto w-[90%] pointer-events-none lg:hidden"
          />
          <Image
            src={"/images/map-h1.png"}
            width={500}
            height={500}
            alt="-"
            className="lg:flex mx-auto w-[60%] pointer-events-none hidden"
          />
        </div>
      </div>
      <div className="lg:h-[90%] relative h-full">
        {/* <GoogleMapComponent disabled={false} data={umkm} satellite={true} /> */}
        <GoogleMapComponent
          disabled={false}
          data={umkm}
          mapTypeId="satellite"
        />
        <div
          className={`absolute left-0 top-0 bottom-0 lg:top-28 border-4 border-primary rounded-e-lg 
        bg-slate-100 px-2 lg:h-[70%] transition-all ease-out duration-1000 py-12 flex items-center justify-center ${
          !isActiveFilter ? "max-w-0" : "px-8"
        }`}
        >
          <div>
            <div
              className={`flex flex-col gap-6 ${
                !isActiveFilter ? "opacity-0" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <FaMapLocationDot size={30} className="text-primary" />
                <h2 className="text-primary font-bold text-2xl">Dusun UMKM</h2>
              </div>
              <div className="mx-auto px-8">
                <ul className="text-primary flex flex-col gap-4">
                  {dusun.map((dusun) => (
                    <li key={dusun}>
                      <button
                        onClick={() => {
                          if (checkedDusun.includes(dusun)) {
                            setCheckedDusun(
                              checkedDusun.filter((curr) => curr !== dusun)
                            );
                          } else {
                            setCheckedDusun([...checkedDusun, dusun]);
                          }
                        }}
                        className="flex items-center gap-2"
                      >
                        {checkedDusun.includes(dusun) ? (
                          <ImCheckboxChecked
                            className="text-primary"
                            size={20}
                          />
                        ) : (
                          <ImCheckboxUnchecked
                            className="text-primary"
                            size={20}
                          />
                        )}
                        <p className="hover:text-primary-hover">{dusun}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setShowDusun(checkedDusun)}
                className="bg-primary text-white text-center font-semibold 
          text-lg px-6 py-2 rounded-md hover:bg-primary-hover"
              >
                <p>Terapkan</p>
              </button>
            </div>
            <div className="absolute top-[50%] -right-5">
              <button onClick={() => setIsActiveFilter(!isActiveFilter)}>
                {isActiveFilter ? (
                  <IoIosArrowForward
                    className="text-white bg-primary rounded-full p-2 hover:bg-primary-hover"
                    size={35}
                  />
                ) : (
                  <IoIosArrowBack
                    className="text-white bg-primary rounded-full p-2 hover:bg-primary-hover"
                    size={35}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
