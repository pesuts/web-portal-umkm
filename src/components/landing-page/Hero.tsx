import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:h-[calc(100vh-88px)] bg-[url('/images/hero-bg-mobile.png')] lg:bg-[url('/images/hero-bg.png')] w-full flex flex-col gap-10 mt-20">
      <div className="bg-[url('/images/landing-asset-group-mobile.png')] lg:bg-[url('/images/landing-asset-group.png')] bg-contain bg-no-repeat flex justify-center items-center w-full py-36">
        <div className="flex flex-col text-center lg:text-left py-14">
          <h2 className="text-2xl">Selamat Datang di</h2>
          <h1 className="font-bold text-5xl font-poetsen my-2 w-[75%] mx-auto flex lg:block lg:w-full">
            Portal UMKM
          </h1>
          <h2 className="text-primary text-3xl font-poetsen">
            Desa Tanjungrejo
          </h2>
        </div>
      </div>
      <div className="relative flex items-center justify-center h-96">
        <div className="absolute -left-48 top-0 bottom-0 -right-20 lg:-left-28">
          <Image
            src={"/images/umkm.png"}
            alt="UMKM"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
