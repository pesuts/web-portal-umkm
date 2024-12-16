import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 h-[calc(100vh-88px)] bg-[url('/images/hero-bg.png')] w-full">
      <div className="bg-[url('/images/landing-asset-group.png')] bg-contain bg-no-repeat flex justify-center items-center">
        <div>
          <h2 className="text-2xl">Selamat Datang di</h2>
          <h1 className="font-bold text-5xl font-poetsen my-2">Portal UMKM</h1>
          <h2 className="text-primary text-3xl font-poetsen">
            Desa Tanjungrejo
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/umkm.png"}
          alt="UMKM"
          width={500}
          height={500}
          className="w-[100%]"
        />
      </div>
    </div>
  );
};

export default Hero;
