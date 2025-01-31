import Hero from '@/components/Hero';
import ImageScroll from "@/components/ImagesScroll";
import HeroCycle from "@/components/HeroCycle";

export default function Home() {
  return (
    <div className='bg-primary'>
      <Hero
        title="Lo mejor de crypto en un solo lugar."
        subtitle="En CXP, accede a un equipo de expertos, herramientas especializadas, formación en  criptomonedas y una comunidad activa, todo lo que necesitas en un solo lugar."
        imageSrc="/images/hero.png" // Asegúrate de tener esta imagen en la carpeta 'public/images'
        buttonText="Regístrate"
        buttonLink="#"
      />
       <ImageScroll />
      <div className="py-12">
        <HeroCycle />
      </div>
    </div>
  );
}
