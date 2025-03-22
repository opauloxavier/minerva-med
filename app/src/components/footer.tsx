import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-8">
          <img
            src="/logo-colorida-vertical.svg"
            alt="Minerva Medicina Personalizada"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#c3a07a]">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c3a07a]">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c3a07a]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c3a07a]">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c3a07a]">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c3a07a]">
                    Agendar consulta
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Address Section */}
          <div>
            <p className="text-gray-300 mb-2 font-bold flex items-center">
              <FaMapMarkerAlt className="text-[#c3a07a] mr-4" size={14} />
              <a
                href="https://www.google.com/maps?q=Rua+Comendador+Soares,+194+-+Sala+602,+Centro,+Nova+Iguaçu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c3a07a]"
              >
                Rua Comendador Soares, 194 - Sala 602,
                <br />
                Centro - Nova Iguaçu
                <br />
                Edifício São Paulo, próximo à Praça do Skate
              </a>
            </p>
            <p className="text-gray-300 mb-6 flex items-center">
              <FaPhoneAlt className="text-[#c3a07a] mr-4" size={14} />
              <a href="tel:+5521976274141" className="hover:text-[#c3a07a]">
                (21) 97627-4141
              </a>
            </p>
            <p className="text-gray-300 font-semibold">
              Horário de Funcionamento
            </p>
            <p className="text-gray-300 mb-6">Segunda à Sexta: 13h às 18h</p>
          </div>

          {/* Social Icons and Legal Links */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex justify-evenly mb-6 w-full">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-[#c3a07a] mr-4"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-[#c3a07a]"
              >
                Política de Privacidade
              </a>
            </div>

            <div className="flex space-x-4 justify-center md:justify-center items-center w-full">
              <a
                href="#"
                className="text-white hover:text-[#c3a07a] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#c3a07a] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#c3a07a] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 text-center mt-8">
          © 2025 Minerva Medicina Personalizada. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
