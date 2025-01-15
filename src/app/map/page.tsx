"use client";

import GoogleMapComponent from "@/components/GoogleMapComponent";
import listUmkm, { UMKMType } from "@/data/umkm";
// import { retrieveData } from "@/lib/firebase/service";
import Image from "next/image";
import { useEffect, useState } from "react";
import {} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const dusun = ["Ketileng", "Ganggeng", "Gebyog", "Tinesek"];

const Map = () => {
  const [checkedDusun, setCheckedDusun] = useState<string[]>(dusun);
  const [umkm, setUMKM] = useState<UMKMType[]>([])
  const [showDusun, setShowDusun] = useState<string[]>(dusun);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(true);

  useEffect(() => { 
    // const digi = async () => { 
    //   console.log("daww");
    //   const data = await retrieveData("location");
    //   console.log(data);
    //   console.log("daw");
    // } 

    // digi();
    // console.log("arab");
    setUMKM(listUmkm);
  }, [])

  useEffect(() => { 
    const newUMKM = listUmkm.filter((umkm) => showDusun.includes(umkm.dusun));
    setUMKM(newUMKM);
  }, [showDusun])

  return (
    <div className="h-screen">
      <div className="bg-primary py-3">
        <div className="mx-auto w-[70%]">
          <Image
            src={"/images/map-h1.png"}
            width={1000}
            height={1000}
            alt="-"
            className="flex mx-auto w-[60%] pointer-events-none"
          />
        </div>
      </div>
      <div className="h-[90%] relative">
        <GoogleMapComponent disabled={false} data={umkm} />
        <div
          className={`absolute left-0 top-28 border-4 border-primary rounded-e-lg 
        bg-slate-100 px-2 h-[70%] transition-all ease-out duration-1000 py-12 ${!isActiveFilter ? "max-w-0" : "px-8"}`}
        >
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
                        <ImCheckboxChecked className="text-primary" size={20} />
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
  );
};

export default Map;
