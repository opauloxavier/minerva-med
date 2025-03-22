"use client";

import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arch } from "os";

interface SlideItem {
  id: number;
  title: string;
  description: string;
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur tempor sapien vitae aliquam.",
  },
  {
    id: 2,
    title: "Pellentesque tempor quam",
    description:
      "Pellentesque tempor quam ac est euismod, et tincidunt dui lacinia. Vestibulum neque risus.",
  },
  {
    id: 3,
    title: "Vestibulum nec augue risus",
    description:
      "Vestibulum nec augue risus, elementum non scelerisque sit amet, lobortis a turpis.",
  },
];

export const Produtos: FC = () => {
  // react-slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // adaptiveHeight: true, // If you want the carousel to adapt height
    // autoplay: true,       // Enable auto-play if desired
    // autoplaySpeed: 3000,  // Adjust auto-play speed
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-sm uppercase text-[#c3a07a] font-medium tracking-wider mb-2">
          Produtos
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tempor quam ac est euismod, et tincidunt dui lacinia. Vestibulum neque
          risus, elementum non scelerisque sit amet, lobortis a turpis.
        </p>

        {/* Carousel */}
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id} className="px-4">
              <div className="bg-[#222] rounded-lg p-6 md:p-8 shadow-md">
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-[#f1f1f1]">
                  {slide.title}
                </h4>
                <p className="text-gray-300 mb-4">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
