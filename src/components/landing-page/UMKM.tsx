"use client";

import Slider, { Settings } from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import UMKMCard from "./UMKMCard";
import { useEffect, useRef, useState } from "react";
import { UMKMType } from "@/data/umkm";
import { getData } from "@/services";
import Link from "next/link";

const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
};

const UMKM = () => {
  const [UMKM, setUMKM] = useState<UMKMType[]>([]);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("/api/umkm");
      setUMKM(data.data);
    };
    fetchData();
  }, []);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="p-20">
      <div className="flex mb-8 justify-between">
        <div className="flex gap-5 justify-center items-center">
          <button onClick={handlePrev}>
            <BsArrowLeftCircle
              size={50}
              className="text-primary hover:text-primary-hover"
            />
          </button>
          <button onClick={handleNext}>
            <BsArrowRightCircle
              size={50}
              className="text-primary hover:text-primary-hover"
            />
          </button>
        </div>
        <div className="text-right">
          <Link href={"/umkm"}>
            <h1 className="text-3xl text-primary font-poetsen hover:text-primary-hover">
              PELAKU UMKM
            </h1>
          </Link>
          <p className="text-slate-500 my-2">
            Temukan produk unik dan berkualitas tinggi dengan dedikasi dan
            kreativitas tinggi oleh pengusaha lokal.
          </p>
        </div>
      </div>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {UMKM &&
            UMKM.map((umkm) => (
              <div key={umkm.id} className="px-3 min-h-72">
                <UMKMCard UMKM={umkm} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default UMKM;
