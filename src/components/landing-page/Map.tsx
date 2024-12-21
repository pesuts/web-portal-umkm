import umkm from "@/data/umkm";
import GoogleMapComponent from "../GoogleMapComponent";
import Link from "next/link";

const Map = () => {
  return (
    <div className="h-screen w-full box-border py-4">
      <div className="mb-6 text-center">
        <h1 className="font-poetsen text-3xl text-primary">SEBARAN LOKASI UMKM</h1>
        <p className="text-slate-500 mt-2 mb-4">Temukan produk unik dari UMKM yang anda inginkan</p>
        <Link href={"/map"} className="px-4 py-2 bg-primary text-white text-md rounded-md hover:bg-primary-hover">
          Selengkapnya
        </Link>
      </div>
      <div className="h-[80%] box-border">
        <GoogleMapComponent disabled={true} data={umkm}/>
      </div>
    </div>
  );
};

export default Map;
