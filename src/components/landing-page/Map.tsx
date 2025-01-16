import umkm from "@/data/umkm";
import GoogleMapComponent from "../GoogleMapComponent";
import Link from "next/link";

const Map = () => {
  return (
    <div className="lg:h-screen w-full box-border lg:py-4">
      <div className="mb-6 text-center py-10 lg:py-2">
        <Link href={"/map"}>
          <h1 className="font-poetsen text-3xl text-primary hover:text-primary-hover">
            SEBARAN LOKASI UMKM
          </h1>
        </Link>
        <p className="text-slate-500 mt-2 mb-4 w-[80%] lg:w-full lg:block flex mx-auto">
          Temukan produk unik dari UMKM yang anda inginkan
        </p>
        <Link
          href={"/map"}
          className="px-4 py-2 bg-primary text-white text-md rounded-md hover:bg-primary-hover"
        >
          Selengkapnya
        </Link>
      </div>
      <div className="h-[480px] lg:h-[75%] box-border">
        <GoogleMapComponent disabled={true} data={umkm} />
      </div>
    </div>
  );
};

export default Map;
