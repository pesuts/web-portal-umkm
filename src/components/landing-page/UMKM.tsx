import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import UMKMCard from "./UMKMCard";

const UMKM = () => {
  return (
    <div className="p-20">
      <div className="flex mb-8 justify-between">
        <div className="flex gap-5 justify-center items-center">
          <button>
            <BsArrowLeftCircle size={50} className="hover:text-primary" />
          </button>
          <button>
            <BsArrowRightCircle size={50} className="hover:text-primary" />
          </button>
        </div>
        <div>
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
        <UMKMCard />
        <UMKMCard />
        <UMKMCard />
      </div>
    </div>
  );
};

export default UMKM;
