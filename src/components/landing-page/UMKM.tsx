import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import UMKMCard from "./UMKMCard";
import { useEffect, useState } from "react";
import { UMKMType } from "@/data/umkm";
import { getData } from "@/services";

const UMKM = () => {
  const [UMKM, setUMKM] = useState<UMKMType>();

  useEffect(() => {
    // setIsLoading(true);
    const fetchData = async () => {
      const data = await getData("/api/umkm");
      setUMKM(data.data[0]);
    };
    fetchData();
  }, []);

  console.log(UMKM)

  return (
    <div className="p-20">
      <div className="flex mb-8 justify-between">
        <div className="flex gap-5 justify-center items-center">
          <button>
            <BsArrowLeftCircle
              size={50}
              className="text-primary hover:text-primary-hover"
            />
          </button>
          <button>
            <BsArrowRightCircle
              size={50}
              className="text-primary hover:text-primary-hover"
            />
          </button>
        </div>
        <div className="text-right">
          <h1 className="text-3xl text-primary font-poetsen">
            PRODUK UMKM UNGGULAN
          </h1>
          <p className="text-slate-500 my-2">
            Temukan produk unik dan berkualitas tinggi dengan dedikasi dan
            kreativitas tinggi oleh pengusaha lokal.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {UMKM && (
          <>
            <UMKMCard UMKM={UMKM} />
            <UMKMCard UMKM={UMKM} />
            <UMKMCard UMKM={UMKM} />
          </>
        )}
      </div>
    </div>
  );
};

export default UMKM;
