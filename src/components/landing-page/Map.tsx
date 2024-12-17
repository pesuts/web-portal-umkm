import Image from "next/image";

const Map = () => {
  return (
    // <div className="h-[calc(100vh-88px)] w-full box-border py-4">
    <div className="h-screen w-full box-border py-4">
      <div className="mb-6 text-center">
        <h1 className="font-poetsen text-3xl text-primary">SEBARAN LOKASI UMKM</h1>
        <p className="text-slate-500 my-2">Temukan produk unik dari UMKM yang anda inginkan</p>
      </div>
      <div className="h-full bg-fuchsia-300 box-border">
        <Image
          src={"/images/google-map.jpg"}
          width={500}
          height={500}
          alt="Google Map"
          // className="h-[84.5%] w-full"
          className="h-[87%] w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Map;
