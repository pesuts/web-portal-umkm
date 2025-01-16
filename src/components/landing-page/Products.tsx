"use client";

import Slider, { Settings } from "react-slick";
import { productType } from "@/data/product";
import ProductCard from "./ProductCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getData } from "@/services";

// const settings: Settings = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   dots: false,
//   arrows: false,
// };

const Products = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
  });

  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 768) {
        setSliderSettings({
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        });
      } else {
        setSliderSettings({
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          arrows: false,
        });
      }
    };

    // Initialize settings on load
    updateSettings();

    // Add event listener for window resize
    window.addEventListener('resize', updateSettings);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("/api/products/featured");
      setProducts(data.data);
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
    <div className="border-primary border-8 lg:p-20 p-6">
      <div className="flex lg:mb-8 mb-4 justify-between">
        <div>
          <Link href={"/products"}>
            <h1 className="text-3xl text-primary font-poetsen hover:text-primary-hover w-[70%] lg:w-full">
              PRODUK UMKM UNGGULAN
            </h1>
          </Link>
          <h1 className="text-3xl text-primary font-poetsen"></h1>
          <p className="text-slate-500 my-2">
            Temukan produk unik dan berkualitas tinggi dengan dedikasi dan
            kreativitas tinggi oleh pengusaha lokal.
          </p>
        </div>
        <div className="flex gap-5 justify-center items-start lg:items-center">
          <button onClick={handlePrev}>
            <BsArrowLeftCircle
              size={50}
              className="text-primary hover:text-primary-hover hidden lg:block"
            />
          </button>
          <button onClick={handleNext}>
            <BsArrowRightCircle
              size={50}
              className="lg:text-primary text-white lg:bg-white bg-primary rounded-full hover:text-primary-hover"
            />
          </button>
        </div>
      </div>
      <div className="slider-container mb-6">
        {/* <Slider ref={sliderRef} {...settings}> */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {products &&
            products.map((product) => (
              <div key={product.id} className="px-3 min-h-72">
                <ProductCard product={product} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
