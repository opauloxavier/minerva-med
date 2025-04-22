import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { CONTATOS } from "../constants/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <Image
          src="/logo-colorida-vertical.svg"
          alt="Minerva Logo"
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
        <a
          href={CONTATOS.LINK_WHATSAPP}
          target="_blank"
          className="mt-8 text-white py-2 px-4 rounded-full sm:text-xl md:text-2xl lg:text-3xl button-transition"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
          Fale Conosco
        </a>
      </div>
      <footer className="flex justify-center space-x-4 pb-4">
        <a
          href="mailto:contato@minervamedicina.com.br"
          target="_blank"
          className="text-white"
          aria-label="Email"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </a>
        <a
          href={CONTATOS.INSTAGRAM}
          target="_blank"
          className="text-white"
          aria-label="Instagram"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </a>
      </footer>
    </div>
  );
}
