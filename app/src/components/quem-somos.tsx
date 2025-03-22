import Image from "next/image";
import { FC } from "react";

export const QuemSomos: FC = () => {
  return (
    <section className="bg-[#f9f9f9] py-8 px-4 md:py-12 pb-8">
      <div className="container mx-auto max-w-4xl md:flex md:items-center md:space-x-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f1e0f] mb-4">
            Quem somos
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque magna quam, tincidunt ut dui at, tincidunt convallis
            lorem. Vestibulum nec augue risus, elementum non scelerisque sit
            amet, lobortis a turpis.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          {/* Replace with your real image */}
          <Image
            src="https://picsum.photos/200"
            width={200}
            height={200}
            alt="Profissional"
            className="w-64 h-auto rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
