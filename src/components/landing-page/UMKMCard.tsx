import Image from "next/image";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const UMKMCard = () => {
  return (
    <div>
      <div className="border border-slate-300 rounded-md p-5 relative bg-white">
        <div className="absolute top-8 left-0 bg-white border-primary-2 border-2 border-s-0 flex items-center gap-1 px-2 py-0.5 z-10 rounded-e-lg">
          <MdLocationPin className="text-primary-2" />
          <p className="text-primary-2">Gebyog</p>
        </div>
        <div className="relative">
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
        <div className="my-4">
          <hr className="bg-slate-300 h-px border-0" />
          <div className="py-2">
            <h3 className="text-xl font-bold">Pabrik Tahu</h3>
            <div className="flex gap-3 my-2">
              <div className="flex">
                <MdLocationPin className="text-primary-2 mt-0.5" size={20}/>
              </div>
              <p>
                Gebyog, Tanjungrejo, Kec. Buluspesantren, Kabupaten Kebumen,
                Jawa Tengah 54391
              </p>
            </div>
            <div className="flex items-center gap-3">
              <BsBoxSeamFill className="text-primary-2" size={20}/>
              <p>2 Produk</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="py-2 px-3 bg-primary-2 text-white text-md rounded-md hover:bg-primary">
            Lihat Produk
          </button>
        </div>
      </div>
    </div>
  );
};

export default UMKMCard;
