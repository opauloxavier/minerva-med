// app/components/ContatoSection.tsx
// or pages/components/ContatoSection.tsx

import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const Contato: React.FC = () => {
  return (
    <section className="bg-white text-[#1a1a1a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Small Section Label */}
        <span className="uppercase text-sm text-[#c3a07a] tracking-wider">
          Contato
        </span>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-[#1a1a1a]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#1a1a1a] hover:text-[#c3a07a] transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#1a1a1a] hover:text-[#c3a07a] transition-colors"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a1a1a] hover:text-[#c3a07a] transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Address & Phone */}
        <p className="text-[#1a1a1a] mb-2">
          Avenida Doutor Mário Guimarães, 318 - Sala 1004, Centro, Nova Iguaçu
        </p>
        <p className="text-[#1a1a1a] mb-6">+55 21 97627-4141</p>

        {/* Operating Hours */}
        <p className="text-[#1a1a1a] font-semibold">Horário de Funcionamento</p>
        <p className="text-[#1a1a1a] mb-6">
          Segunda à Sexta: 09h às 19h <br />
          Sábado: 08h às 13h
        </p>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-[#c3a07a] text-white font-medium py-3 px-6 rounded-full hover:bg-[#a98c68] transition-colors"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </section>
  );
};
