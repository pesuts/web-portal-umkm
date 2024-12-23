import type { productType } from "@/data/product";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

const ProductCard = ({
  product,
  dusun,
}: {
  product: productType;
  dusun?: string;
}) => {
  return (
    <div className="border shadow-md border-slate-300 rounded-md p-3 relative bg-white h-[560px]">
      <div className="absolute top-8 left-0 bg-white border-primary-2 border-2 border-s-0 flex items-center gap-1 px-2 py-0.5 z-10 rounded-e-lg">
        <MdLocationPin className="text-primary-2" />
        <p className="text-primary-2">{dusun ?? product?.umkmDetail?.dusun}</p>
      </div>
      <div className="relative overflow-hidden bg-no-repeat">
        <Image
          src={`${product?.images?.[0] ?? "/images/placeholder-card.jpg"}`}
          width={500}
          height={500}
          alt="Golak"
          className="rounded-lg h-64 transition duration-300 ease-in-out hover:scale-110"
          style={{ objectFit: "cover" }}
        />
        <div className="rounded-lg absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
      </div>
      <hr className="bg-slate-300 h-px border-0 mt-4" />
      <div className="flex flex-col h-[48%] justify-between">
        <div className="px-4 mb-4">
          <div className="py-2">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-xl font-bold hover:text-primary-hover">
                {product?.name}
              </h3>
            </Link>
            <div className="h-[130px] overflow-hidden">
              <p className="text-slate-700 py-2">{product?.description}</p>
            </div>
          </div>
          <hr className="bg-slate-300 h-px border-0" />
        </div>
        <div className="px-4 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex items-start gap-2">
              <BiSolidUserCircle className="text-primary" size={30} />
              <p className="my-0.5">
                Oleh{" "}
                <Link
                  href={`/umkm/${product?.umkmId}`}
                  className="font-semibold text-primary hover:text-primary-hover"
                >
                  {/* {product?.umkmName} */}
                  {product?.umkmName}
                </Link>
              </p>
            </div>
          </div>
          <Link
            href={`/products/${product.id}`}
            className="py-2 px-3 bg-primary-2 text-white text-md rounded-md hover:bg-primary"
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
