import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const information = {
  address:
    "Tanjungrejo, Kec. Buluspesantren, Kabupaten Kebumen, Jawa Tengah 54391",
  phone: "087737982020",
  email: "desatanjungrejo20@gmail.com",
};

const Footer = () => {
  return (
    <div className="text-white">
      <div className="p-12 lg:grid lg:grid-cols-3 bg-primary-dark flex flex-col gap-8 pt-20 lg:pt-12">
        <div>
          <div className="lg:w-[50%] lg:mx-auto">
            <h3 className="font-bold mb-3 text-primary-2 text-xl">PORTAL UMKM</h3>
            <div className="flex items-center">
              <Link
                href={"/"}
                className="flex gap-3 items-center justify-center"
              >
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
        </div>
        <div>
          <div className="lg:w-[70%] lg:mx-auto">
            <h3 className="font-bold mb-3">Hubungi Kami</h3>
            <div className="flex flex-col gap-3 text-white">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" size={20} />
                <a
                  href={`tel:${information.phone}`}
                  className="hover:text-primary-bg"
                >
                  {information.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <IoIosMail className="text-primary" size={20} />
                <a
                  href={`mailto:${information.email}`}
                  className="hover:text-primary-bg"
                >
                  {information.email}
                </a>
              </div>
              <div className="flex gap-3 w-[80%]">
                <div className="lg:flex">
                  <MdLocationPin className="text-primary mt-0.5" size={20} />
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${information.address}`}
                  target="_blank"
                  className="hover:text-primary-bg"
                >
                  {information.address}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:w-[55%] lg:mx-auto">
            <h3 className="font-bold mb-3">Ada Kendala?</h3>
            <p>
              Silahkan hubungi Admin Website, jika terdapat masalah atau
              pertanyaan terkait Website UMKM Desa Tanjungrejo
            </p>
            <Link
              className="flex justify-center items-center mt-2 px-5 py-2 gap-2 bg-primary-2 border-white border rounded-md mx-auto w-full hover:bg-primary"
              href={"https://wa.me/6287737982020"}
            >
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
      </div>
      <div className="bg-primary text-center lg:py-3 lg:gap-1 py-6">
        <div className="items-center mx-auto w-[60%]">
        <div className="">
          <p className="font-bold">&copy; 2025 Desa Tanjungrejo</p>
        </div>
        <div className="">
          <p className="text-sm">
            By: KKN AA.82 (125 & 126) UPN Veteran Yogyakarta
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
