"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="mt-2 flex items-center justify-center content-center">
      <div className="text-center mx-auto p-8 mb-5">
        <Image src={"/images/404.png"} width={300} height={300} alt="404" className="w-[80%] mx-auto"/>
        <div className="">
          <p className="text-primary font-bold text-2xl">Halaman Tidak Ditemukan</p>
          <Link
            href={"/"}
            // onClick={() => router.back()}
            className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md mt-4 mb-2 block"
          >
            Kembali ke Beranda
          </Link>
        </div>
        <button
          onClick={() => router.back()}
          className="text-primary hover:underline hover:font-semibold"
        >
          Ke halaman sebelumnya
        </button>
      </div>
    </div>
  );
}
