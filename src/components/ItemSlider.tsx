import React from "react";
import Slider from "react-slick";

const ItemSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        <div className="h-64 bg-blue-500 flex items-center justify-center">
          <h2 className="text-white">Slide 1</h2>
        </div>
        <div className="h-64 bg-green-500 flex items-center justify-center">
          <h2 className="text-white">Slide 2</h2>
        </div>
        <div className="h-64 bg-red-500 flex items-center justify-center">
          <h2 className="text-white">Slide 3</h2>
        </div>
      </Slider>
    </div>
  );
};

export default ItemSlider;
