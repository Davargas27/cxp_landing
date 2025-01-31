import { FC } from 'react';
import DynamicImage from "./DynamicImage";


interface HeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    buttonText: string;
    buttonLink: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, imageSrc, buttonText, buttonLink }) => {
    return (
        <section className="relative w-full h-full bg-cover bg-center bg-no-repeat bg-primary px-[96px]" style={{ backgroundImage: `url(${imageSrc})` }}>
            {/*  <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className='max-w-[1728px] mx-auto  flex flex-row justify-between items-center'>
                <div className="relative z-10 flex flex-col items-center justify-center w-[668px] h-[717px]">
                    <div className="w-full py-4 px-4 mb-8 relative before:absolute before:content-[''] before:bg-[url('/images/vector1.svg')] before:w-full before:h-full before:left-0 before:top-0 before:bg-no-repeat after:absolute after:content-[''] after:bg-[url('/images/vector2.svg')] after:w-full after:h-full after:right-0 after:bottom-0 after:bg-no-repeat after:bg-right-bottom ">
                        <h1 className="text-7xl text-secondary font-bold mb-4 ">{title}</h1>
                    </div>
                    <div className='p-4 bg-[#4E4B49] rounded-2xl mb-8'>
                        <p className="text-4xl text-white">{subtitle}</p>
                    </div>
                    <div className='flex justify-end w-full items-center'>
                        <a href={buttonLink} className="px-6 py-3 bg-yellow text-white text-4xl font-semibold rounded-lg shadow-md hover:bg-yellow transition duration-200" >
                            {buttonText}
                        </a>
                    </div>
                </div>
                <div className='w-2/4 h-[717px] flex justify-center items-center'>
                    <DynamicImage type="Sabio" alt="wu-menu" width={556}/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
