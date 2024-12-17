import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="p-12 grid grid-cols-3 bg-primary-dark">
        <div>
          <h3 className="font-bold mb-3 text-primary text-xl">PORTAL UMKM</h3>
          <div className="flex items-center">
            <Link href={"/"} className="flex gap-3 items-center justify-center">
              <Image
                src={"/images/logo-kebumen.png"}
                width={100}
                height={100}
                alt="Brand Logo"
                className="w-10"
              />
              <div className="font-bold">
                <p>Desa</p>
                <p>Tanjungrejo</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[70%]">
          <h3 className="font-bold mb-3">Hubungi Kami</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" size={20} />
              <p>087737982020</p>
            </div>
            <div className="flex items-center gap-3">
              <IoIosMail className="text-primary" size={20} />
              <p>desatanjungrejo20@gmail.com</p>
            </div>
            <div className="flex gap-3 w-[80%]">
              <div className="flex">
                <MdLocationPin className="text-primary mt-0.5" size={20} />
              </div>
              <p>
                Gebyog, Tanjungrejo, Kec. Buluspesantren, Kabupaten Kebumen,
                Jawa Tengah 54391
              </p>
            </div>
          </div>
        </div>
        <div className="w-[55%]">
          <h3 className="font-bold mb-3">Ada Kendala?</h3>
          <p>
            Silahkan hubungi Admin Website, jika terdapat masalah atau
            pertanyaan terkait Website UMKM Desa Tanjungrejo
          </p>
          <Link className="flex justify-center items-center mt-2 px-5 py-2 gap-2 bg-primary-2 border-white border rounded-md mx-auto w-full hover:bg-primary" href={"https://wa.me/6287737982020"}>
            <p>Hubungi Admin</p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Custom Icon"
              className="w-6 h-6"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
      <div className="bg-primary text-center">
        <p className="py-3">
          <span className="font-bold">&copy; 2025 Desa Tanjungrejo</span>
          <span> | By : KKN 82 UPN Veteran Yogyakarta</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
