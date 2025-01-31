"use client";

import Image from "next/image";

const HeroCycle: React.FC = () => {
  return (
    <div className="bg-[#111] text-white p-8 rounded-xl border border-gray-600 flex items-center max-w-[1728px] mx-auto relative">
      <div className="relative w-full]">
        <Image
          src="/hero-image.png" // Reemplaza con la URL de la imagen correcta
          alt="Crypto background"
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="w-1/2 pl-6">
        <h2 className="text-xl font-semibold">
          Prepárate para el ciclo más grande de{" "}
          <span className="text-yellow-400">la historia de las cryptos.</span>
        </h2>
        <p className="text-gray-300 mt-4">
          Nuestro equipo ha transformado más de 10 años de experiencia en una
          rápida y sencilla curva de aprendizaje. Estamos en el mejor momento
          para el mercado Crypto y en <b>CXP</b> te traemos todo lo necesario
          para que tú también puedas ser parte de esto.
        </p>

        <button className="mt-6 px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-all">
          Empieza Ahora
        </button>
      </div>
    </div>
  );
};

export default HeroCycle;
