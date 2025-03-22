"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface SlideItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    image: "https://picsum.photos/200",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur tempor sapien vitae aliquam.",
  },
  {
    id: 2,
    image: "https://picsum.photos/200",
    title: "Pellentesque tempor quam ac est euismod",
    description:
      "Pellentesque tempor quam ac est euismod, et tincidunt dui lacinia. Vestibulum nec augue risus.",
  },
  {
    id: 3,
    image: "https://picsum.photos/200",
    title: "Vestibulum nec augue risus",
    description:
      "Vestibulum nec augue risus, elementum non scelerisque sit amet, lobortis a turpis.",
  },
];

export const Servicos: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1, // Show 1 card per slide on mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // below 768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // below 1024px
        settings: {
          slidesToShow: 2, // show 2 cards per slide on medium/large screens
        },
      },
    ],
  };

  return (
    <section className="bg-white text-[#1a1a1a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <span className="uppercase text-sm text-[#c3a07a] tracking-wider">
          Serviços
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tempor quam ac est euismod, et tincidunt dui lacinia. Vestibulum nec
          augue risus, elementum non scelerisque sit amet, lobortis a turpis.
        </p>

        {/* Carousel */}
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id} className="px-4">
              <div className="bg-white rounded-lg shadow p-4">
                {/* Image + WhatsApp Icon */}
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Text */}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-700 mb-4">{slide.description}</p>
                <a
                  href="#"
                  className="text-[#c3a07a] font-medium inline-flex items-center hover:underline"
                >
                  Ver mais <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
