// "use client";

import GoogleMapComponent from "@/components/GoogleMapComponent";
import listUmkm, { UMKMType } from "@/data/umkm";
import MapView from "@/views/MapView";
// import { retrieveData } from "@/lib/firebase/service";
import Image from "next/image";
import { useEffect, useState } from "react";
import {} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const dusun = ["Ketileng", "Ganggeng", "Gebyog", "Tinesek"];

let isLoading = false;

async function fetchUMKM() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/umkm`, {
    cache: "no-store"
  });
  const data = await res.json();
  isLoading = false;
  return data.data;
}

export default async function Map(){
// const Map = () => {
  // const [checkedDusun, setCheckedDusun] = useState<string[]>(dusun);
  // const [umkm, setUMKM] = useState<UMKMType[]>([]);
  // const [showDusun, setShowDusun] = useState<string[]>(dusun);
  // const [isActiveFilter, setIsActiveFilter] = useState<boolean>(true);

  // useEffect(() => {
  //   setUMKM(listUmkm);
  // }, []);

  // useEffect(() => {
  //   const newUMKM = listUmkm.filter((umkm) => showDusun.includes(umkm.dusun));
  //   setUMKM(newUMKM);
  // }, [showDusun]);
  const UMKM = await fetchUMKM();

  return (
    <MapView UMKM={UMKM} isLoading={isLoading} />
  );
};

// export default Map;
