"use client";

import { getData } from "@/services";
import Image from "next/image";
import { useEffect, useState } from "react";

interface statistic {
  totalProducts: number;
  totalUMKM: number;
}

const Statistic = () => {
  const [statistic, setStatistic] = useState<statistic>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("/api/statistic");
      setStatistic(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="lg:grid lg:grid-cols-2 pt-10 flex flex-col gap-16 overflow-hidden">
      <div className="relative flex items-center justify-center h-64">
        <div className="absolute -left-8 top-0 bottom-0 -right-48 lg:-left-24 lg:-right-10">
          <Image
            src={"/images/3d-map.png"}
            alt="UMKM"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="py-12 px-10">
          <h1 className="text-3xl font-poetsen text-primary">DATA UMKM</h1>
          <p className="text-slate-600 mt-2 w-[70%] lg:w-full">Statistik Data UMKM Desa Tanjungrejo</p>
          <div className="flex gap-6 items-center lg:p-8 px-4 py-6 outline outline-primary my-6 lg:me-8 rounded-2xl shadow-2xl">
            <Image
              src="/images/briefcase.png"
              alt="Briefcase"
              width={300}
              height={300}
              className="w-14"
            />
            <div>
              <h2 className="text-2xl font-extrabold">
                {statistic?.totalUMKM}
              </h2>
              <p>Total UMKM</p>
            </div>
          </div>
          <div className="flex gap-6 items-center lg:p-8 px-4 py-6 outline outline-primary my-6 lg:me-8 rounded-2xl shadow-2xl">
            <Image
              src="/images/box.png"
              alt="Box"
              width={300}
              height={300}
              className="w-14"
            />
            <div>
              <h2 className="text-2xl font-extrabold">
                {statistic?.totalProducts}
              </h2>
              <p>Total Produk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
