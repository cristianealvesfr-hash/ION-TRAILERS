import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "ÍON TRAILERS",
    subtitle: "Referência em fabricação de Trailers no Brasil!",
    category: "Fábrica trailer de lanches",
    image: "/images/food_truck_red_1.jpg",
  },
  {
    id: 2,
    title: "ÍON TRAILERS",
    subtitle: "Referência em fabricação de Trailers no Brasil!",
    category: "Trailers de Camping",
    image: "/images/trailer_camping_1.jpg",
  },
  {
    id: 3,
    title: "ÍON TRAILERS",
    subtitle: "Referência em fabricação de Trailers no Brasil!",
    category: "Motorhomes",
    image: "/images/motorhome_premium.jpg",
  },
  {
    id: 4,
    title: "ÍON TRAILERS",
    subtitle: "Referência em fabricação de Trailers no Brasil!",
    category: "Reboques",
    image: "/images/reboque_teardrop.jpg",
  },
  {
    id: 5,
    title: "ÍON TRAILERS",
    subtitle: "Referência em fabricação de Trailers no Brasil!",
    category: "Trailer Lojas",
    image: "/images/trailer_loja_1.jpg",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const whatsappLink = "https://api.whatsapp.com/send?phone=5551982868640&text=Ol%C3%A1%2C%20estou%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play feature for the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-auto min-h-[80vh] lg:min-h-[600px] overflow-hidden bg-white flex items-start pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background with diagonal split */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white w-full h-full"></div>
        
        {/* Mobile Background Image (Factory) */}
        <div className="absolute inset-0 md:hidden bg-ion-gray">
          <img 
            src="/images/fabrica_trailers.jpg" 
            alt="Fábrica Íon Trailers" 
            className="w-full h-full object-cover opacity-[0.15] grayscale"
          />
        </div>

        {/* Diagonal shape - Desktop only */}
        <div 
          className="absolute inset-0 bg-ion-dark w-full h-full hidden md:block"
          style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 25% 100%)' }}
        ></div>
        
        {/* Subtle texture/gradient over the dark area - Desktop only */}
        <div 
          className="absolute inset-0 opacity-20 bg-gradient-to-tr from-ion-bronze to-transparent hidden md:block"
          style={{ clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 25% 100%)' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-start">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          
          {/* Left Text Content */}
          <div className="flex flex-col z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-ion-dark uppercase leading-tight tracking-tighter mt-4">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ion-bronze uppercase leading-none mt-1">
                  {slides[currentSlide].subtitle}
                </h2>
                
                <h3 className="text-lg md:text-xl font-semibold text-white mt-3 bg-ion-dark inline-block px-3 py-1 rounded w-fit">
                  {slides[currentSlide].category}
                </h3>

                <p className="mt-4 text-gray-600 text-sm md:text-base max-w-lg leading-relaxed">
                  Fabricamos trailers personalizados para o seu tipo de negócio. Há mais de 10 anos fabricando Trailers e Motorhomes, que rodam pelas estradas do mundo inteiro!
                </p>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-ion-bronze hover:bg-white text-ion-dark font-bold py-2 px-6 rounded uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl text-center text-sm">
                    Solicitar Orçamento
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="border-2 border-ion-dark text-ion-dark hover:bg-ion-dark hover:text-white font-bold py-2 px-6 rounded uppercase tracking-wider transition-all duration-300 text-center text-sm">
                    Detalhes
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Content (Carousel) */}
          <div className="relative aspect-video sm:h-[400px] md:h-[500px] w-full flex justify-center items-center z-20 mt-8 md:mt-0 px-2 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute top-0 left-0 w-full h-full p-0 sm:p-4 md:p-8"
              >
                {/* Adding a sleek metallic border effect */}
                <div className="w-full h-full rounded-lg p-2 bg-gradient-to-br from-gray-400 via-gray-200 to-gray-500 shadow-2xl relative overflow-hidden group">
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].category} 
                    className="w-full h-full object-cover rounded shadow-inner"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-ion-dark/80 backdrop-blur text-white p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold uppercase text-ion-bronze">{slides[currentSlide].category}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Controls */}
            <div className="absolute -bottom-6 right-1/2 translate-x-1/2 md:translate-x-0 md:right-20 flex space-x-2 z-30">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white text-ion-dark shadow-lg flex justify-center items-center hover:bg-ion-bronze hover:text-white transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white text-ion-dark shadow-lg flex justify-center items-center hover:bg-ion-bronze hover:text-white transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
