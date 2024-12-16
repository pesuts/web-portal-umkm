import Image from "next/image";

const Statistic = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[url('/images/3d-map.png')] -ms-[25%] bg-contain bg-no-repeat">
        {/* <Image src={"/images/3d-map.png"} alt="UMKM" width={500} height={500} className="bg-fuchsia-300 w-full bg-contain"/> */}
      </div>
      <div className="flex items-center justify-center">
        <div className="py-12">
          <h1 className="text-3xl font-poetsen text-primary">DATA UMKM</h1>
          <p className="text-slate-600">Statistik Data UMKM Desa Tanjungrejo</p>
          <div className="flex gap-6 items-center p-8 outline outline-primary my-6 me-8 rounded-2xl shadow-2xl">
            <Image
              src="/images/briefcase.png"
              alt="Briefcase"
              width={300}
              height={300}
              className="w-14"
            />
            <div>
              <h2 className="text-2xl font-extrabold">12</h2>
              <p>Total UMKM</p>
            </div>
          </div>
          <div className="flex gap-6 items-center p-8 outline outline-primary my-6 me-8 rounded-2xl shadow-2xl">
            <Image
              src="/images/box.png"
              alt="Box"
              width={300}
              height={300}
              className="w-14"
            />
            <div>
              <h2 className="text-2xl font-extrabold">24</h2>
              <p>Total Produk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
