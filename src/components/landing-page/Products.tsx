import ProductCard from "./ProductCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Products = () => {
  return (
    <div className="border-primary border-8 p-20">
      <div className="flex mb-8 justify-between">
        <div>
          <h1 className="text-3xl text-primary font-poetsen">
            PRODUK UMKM UNGGULAN
          </h1>
          <p className="text-slate-500 my-2">
            Temukan produk unik dan berkualitas tinggi dengan dedikasi dan
            kreativitas tinggi oleh pengusaha lokal.
          </p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <button>
            <BsArrowLeftCircle size={50} className="text-primary hover:text-primary-hover" />
          </button>
          <button>
            <BsArrowRightCircle size={50} className="text-primary hover:text-primary-hover" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
