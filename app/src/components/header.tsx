"use client";

import { FC, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
// Make sure you have installed @heroicons/react: `npm i @heroicons/react`

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#2f1e0f] text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          {/* Replace with your actual logo image if you have one */}
          <Image
            src="/logo-colorida-vertical.svg"
            alt="Minerva Logo"
            width={50}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Hamburger Icon (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links (hidden on mobile, shown on md+) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-[#c3a07a]">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c3a07a]">
                Produtos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c3a07a]">
                Serviços
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
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="bg-[#2f1e0f] md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="#" className="block py-2 hover:text-[#c3a07a]">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#c3a07a]">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-[#c3a07a]">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
