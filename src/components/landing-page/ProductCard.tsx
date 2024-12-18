import Image from "next/image";
import Link from "next/link";
import { BsFillDashCircleFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const ProductCard = () => {
  return (
    <div className="border shadow-md border-slate-300 rounded-md p-5 relative bg-white">
      <div className="absolute top-8 left-0 bg-white border-primary-2 border-2 border-s-0 flex items-center gap-1 px-2 py-0.5 z-10 rounded-e-lg">
        <MdLocationPin className="text-primary-2" />
        <p className="text-primary-2">Gebyog</p>
      </div>
      <div className="relative overflow-hidden bg-no-repeat">
        <Image
          src={"/images/golak.png"}
          width={500}
          height={500}
          alt="Golak"
          className="rounded-lg h-60 transition duration-300 ease-in-out hover:scale-110"
          style={{ objectFit: "contain" }}
        />
        <div className="rounded-lg absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
      </div>
      <div className="my-4">
        <hr className="bg-slate-300 h-px border-0" />
        <div className="py-2">
          <h3 className="text-xl font-bold">Golak</h3>
          <p className="text-slate-700 py-2">
            Golak merupakan makanan khas yang telah ada sejak nenek moyang,
            dengan tekstur yang kenyal, gurih dan bentuknya unik (menyerupai
            angka 8) sangat enak untuk camilan.
          </p>
        </div>
        <hr className="bg-slate-300 h-px border-0" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BsFillDashCircleFill />
          <p>
            Oleh <Link href={"#"}>Sulastri</Link>
          </p>
        </div>
        <Link
          href={"/products/123"}
          className="py-2 px-3 bg-primary-2 text-white text-md rounded-md hover:bg-primary"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
