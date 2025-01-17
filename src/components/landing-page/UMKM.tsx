"use client";

import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import UMKMCard from "./UMKMCard";
import { useEffect, useRef, useState } from "react";
import { UMKMType } from "@/data/umkm";
import { getData } from "@/services";
import Link from "next/link";

const UMKM = () => {
  const [UMKM, setUMKM] = useState<UMKMType[]>([]);
  const sliderRef = useRef<Slider>(null);
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 768) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      } else {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 3,
          slidesToScroll: 3,
        });
      }
    };

    updateSettings();

    window.addEventListener('resize', updateSettings);

    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

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
    <div className="lg:p-20 p-6 pt-16 pb-12 lg:py-16">
      <div className="flex mb-8 justify-between">
        <div className="lg:flex gap-5 justify-center items-center hidden">
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
        <Slider ref={sliderRef} {...sliderSettings}>
          {UMKM &&
            UMKM.map((umkm) => (
              <div key={umkm.id} className="px-3 min-h-72">
                <UMKMCard UMKM={umkm} />
              </div>
            ))}
        </Slider>
      </div>
      <div className="flex gap-5 justify-center items-center lg:hidden pt-8">
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
    </div>
  );
};

export default UMKM;
