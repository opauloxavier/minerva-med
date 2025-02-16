import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-green-500/50 p-4">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Minerva Medicina Personalizada
        </h1>
        <h2 className="text-lg sm:text-xl text-white mt-2">
          Medicina de Precisão
        </h2>
        <p className="text-base sm:text-lg mt-4 text-white">Em breve</p>
      </div>
      <footer className="flex justify-center space-x-4 pb-4">
        <a
          href="mailto:contato@minervamedicina.com.br"
          target="_blank"
          className="text-white"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href="https://instagram.com/minervamedicina"
          target="_blank"
          className="text-white"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </footer>
    </div>
  );
}
