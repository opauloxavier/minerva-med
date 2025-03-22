"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  source: string; // e.g. "Paciente verificado | Fonte: Doctoralia"
  rating: number; // e.g. 5 for 5 stars
  text: string; // main testimonial text
  link: string; // link to Doctoralia profile or other site
}

// Example testimonial data
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Edson Melo",
    source: "Paciente verificado | Fonte: Doctoralia",
    rating: 5,
    text: "Médico é confiança, e a Doutora Carolina conquistou. Focada e detalhista.",
    link: "#",
  },
  {
    id: 2,
    name: "Maria Silva",
    source: "Paciente verificado | Fonte: Doctoralia",
    rating: 4,
    text: "Excelente atendimento e explicações detalhadas. Recomendo para todos.",
    link: "#",
  },
  {
    id: 3,
    name: "José Santos",
    source: "Paciente verificado | Fonte: Doctoralia",
    rating: 5,
    text: "Profissional exemplar! Sempre pontual, atencioso e competente.",
    link: "#",
  },
];

// Helper to render stars
const renderStars = (rating: number) => {
  return (
    <div className="flex space-x-1 mb-3">
      {Array.from({ length: rating }, (_, i) => (
        <FaStar key={i} className="text-[#c3a07a]" />
      ))}
    </div>
  );
};

export const Testemunhos: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 card per slide on small screens
    slidesToScroll: 1,
    arrows: false,
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
          slidesToShow: 2, // show 2 cards per slide on medium+
        },
      },
    ],
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <span className="uppercase text-sm text-[#c3a07a] tracking-wider">
          Depoimentos
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tempor quam ac est euismod, et tincidunt dui lacinia. Vestibulum nec
          augue risus, elementum non scelerisque sit amet, lobortis a turpis.
        </p>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-[#2a2a2a] rounded-lg shadow p-6 h-full flex flex-col">
                {/* Star Rating */}
                {renderStars(testimonial.rating)}

                {/* Name & Source */}
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {testimonial.source}
                </p>

                {/* Main Text */}
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-12">
          <a
            href="https://www.doctoralia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#c3a07a] text-[#c3a07a] rounded-full px-5 py-2 font-medium hover:bg-[#c3a07a] hover:text-black transition-colors"
          >
            Perfil no Doctoralia
          </a>
        </div>
      </div>
    </section>
  );
};
