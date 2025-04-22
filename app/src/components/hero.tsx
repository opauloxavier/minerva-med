import { FC } from "react";
import { CONTATOS } from "../constants/constants";

export const Hero: FC = () => {
  return (
    <section className="bg-white py-8 px-4 text-center md:py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-[#2f1e0f] text-3xl md:text-4xl font-bold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          magna quam, tincidunt ut dui at, tincidunt convallis lorem. Vestibulum
          nec augue risus.
        </p>
        <a
          href={CONTATOS.LINK_WHATSAPP}
          className="inline-block bg-[#c3a07a] text-white font-medium py-3 px-6 rounded-full hover:bg-[#a98c68] transition-colors"
        >
          Agendar consulta
        </a>
      </div>
    </section>
  );
};
