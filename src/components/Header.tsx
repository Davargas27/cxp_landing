"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import DynamicImage from "./DynamicImage";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-secondary pt-[25px] pb-[46px] xl:px-[96px] lg:px-[46px]">
      <div className="w-full flex justify-between items-center max-w-[1728px]mx-auto">
        <div className="flex items-center justify-between">
          <DynamicImage type="LogoCPX" alt="wu-menu" width={296} height={50} />
        </div>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="font-semibold text-white">Inicio</Link>
          <Link href="#" className="text-gray-300 hover:text-white">CXP Academia</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Opera</Link>
          <div className="relative group">
            <button className="flex items-center text-gray-300 hover:text-white">
              CXP Blog <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200"> pendiente</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200"> pendiente</Link>
            </div>
          </div>
          <Link href="#" className="text-gray-300 hover:text-white">Precios</Link>
          <Link href="#" className="text-gray-300 hover:text-white">Hype</Link>
        </nav>

    
        <div className="hidden md:flex space-x-2">
          <Link href="/registro" className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold">Regístrate</Link>
          <Link href="/login" className="bg-gray-300 text-black px-4 py-2 rounded">Inicia sesión</Link>
        </div>

        {/* Menú Responsive */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 p-4 mt-2">
          <Link href="/" className="block text-white py-2">Inicio</Link>
          <Link href="#" className="block text-gray-300 py-2">CXP Academia</Link>
          <Link href="#" className="block text-gray-300 py-2">Opera</Link>
          <Link href="#" className="block text-gray-300 py-2">CXP Blog</Link>
          <Link href="#" className="block text-gray-300 py-2">Precios</Link>
          <Link href="#" className="block text-gray-300 py-2">Hype</Link>
          <Link href="#" className="block bg-yellow-500 text-black px-4 py-2 rounded font-semibold mt-2">Regístrate</Link>
          <Link href="#" className="block bg-gray-300 text-black px-4 py-2 rounded mt-2">Inicia sesión</Link>
        </nav>
      )}
    </header>
  );
}
