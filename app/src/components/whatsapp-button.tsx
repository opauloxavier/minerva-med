import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTATOS } from "../constants/constants";
// npm install react-icons

export const WhatsappButton: FC = () => {
  return (
    <a
      href={CONTATOS.LINK_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
};
