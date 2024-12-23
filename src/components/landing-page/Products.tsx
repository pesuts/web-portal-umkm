import { product } from "@/data/product";
import ProductCard from "./ProductCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const Products = () => {
  return (
    <div className="border-primary border-8 p-20">
      <div className="flex mb-8 justify-between">
        <div>
          <Link href={"/products"}>
            <h1 className="text-3xl text-primary font-poetsen hover:text-primary-hover">
              PRODUK UMKM UNGGULAN
            </h1>
          </Link>
          <h1 className="text-3xl text-primary font-poetsen"></h1>
          <p className="text-slate-500 my-2">
            Temukan produk unik dan berkualitas tinggi dengan dedikasi dan
            kreativitas tinggi oleh pengusaha lokal.
          </p>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <button>
            <BsArrowLeftCircle
              size={50}
              className="text-primary hover:text-primary-hover"
            />
          </button>
          <button>
            <BsArrowRightCircle
              size={50}
              className="text-primary hover:text-primary-hover"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        {/* <ProductCard product={product} />
        <ProductCard product={product} /> */}
        {/* <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
};

export default Products;
