import Image from "next/image";
import { TbTargetArrow, TbUsersGroup } from "react-icons/tb";

const About = () => {
  return (
    <div className="p-20 text-white">
      <div className="py-20 bg-primary rounded-3xl grid grid-cols-2">
        <div className="ps-20">
          <h1 className="text-3xl font-poetsen">Tentang</h1>
          <hr className="my-4 w-[50%]"/>
          <div className="flex items-center gap-6">
            <div className="flex justify-center items-center gap-1">
              <TbTargetArrow />
              <p>UMKM</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <TbUsersGroup />
              <p>Masyarakat</p>
            </div>
          </div>
          <p className="mt-10 pe-14">
            Portal UMKM Desa Tanjungrejo adalah sebuah platform digital yang
            dirancang untuk memfasilitasi pendataan, pemantauan, dan pengelolaan
            Usaha Mikro, Kecil, dan Menengah (UMKM) di Desa Tanjungrejo,
            Kecamatan Buluspesantren. Portal ini bertujuan untuk memberikan
            akses yang mudah bagi pelaku UMKM, pemerintah desa, dan masyarakat
            dalam mendapatkan informasi terkait UMKM lokal.
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            src={"/images/tukang-sayur.jpg"}
            alt="Tukang Sayur"
            width={500}
            height={500}
            className="rounded-s-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
