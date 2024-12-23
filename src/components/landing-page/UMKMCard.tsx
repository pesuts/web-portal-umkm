import { UMKMType } from "@/data/umkm";
import Image from "next/image";
import Link from "next/link";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const UMKMCard = ({ UMKM }: { UMKM: UMKMType }) => {
  return (
    <div className="border border-slate-300 rounded-md p-5 relative bg-white">
      <div className="absolute top-8 left-0 bg-white border-primary-2 border-2 border-s-0 flex items-center gap-1 px-2 py-0.5 z-10 rounded-e-lg">
        <MdLocationPin className="text-primary-2" />
        <p className="text-primary-2">{UMKM.dusun}</p>
      </div>
      <div className="px-4 relative">
        <Image
          src={"/images/placeholder-card.jpg"}
          width={500}
          height={500}
          alt="UMKM"
          style={{ objectFit: "contain" }}
          className="rounded-lg h-60"
        />
        <div className="rounded-lg absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
      </div>
      <hr className="bg-slate-300 h-px border-0 mt-4" />
      <div className="px-4 mb-2">
        <div className="py-2">
          <Link href={`/umkm/${UMKM.id}`}>
            <h3 className="text-xl font-bold hover:text-primary-hover">
              {UMKM.name}
            </h3>
          </Link>
          <div className="flex gap-3 my-2">
            <div className="flex">
              <MdLocationPin className="text-primary-2 mt-0.5" size={20} />
            </div>
            <p>
              {/* Gebyog, Tanjungrejo, Kec. Buluspesantren, Kabupaten Kebumen, Jawa
              Tengah 54391 */}
              {UMKM.address}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <BsBoxSeamFill className="text-primary-2" size={20} />
            {/* <p>2 Produk</p> */}
            <p>{UMKM.totalProducts} Produk</p>
          </div>
        </div>
      </div>
      <hr className="bg-slate-300 h-px border-0 mb-4" />
      <div className="px-4 flex items-center justify-end">
        <Link
          href={`/umkm/${UMKM.id}`}
          className="py-2 px-3 bg-primary-2 text-white text-md rounded-md hover:bg-primary"
        >
          Lihat Produk
        </Link>
      </div>
    </div>
  );
};

export default UMKMCard;
