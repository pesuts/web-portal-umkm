import GoogleMapComponent from "../GoogleMapComponent";

const Map = () => {
  return (
    <div className="h-screen w-full box-border py-4">
      <div className="mb-6 text-center">
        <h1 className="font-poetsen text-3xl text-primary">SEBARAN LOKASI UMKM</h1>
        <p className="text-slate-500 my-2">Temukan produk unik dari UMKM yang anda inginkan</p>
      </div>
      <div className="h-[87%] box-border">
        <GoogleMapComponent disabled={true} />
      </div>
    </div>
  );
};

export default Map;
