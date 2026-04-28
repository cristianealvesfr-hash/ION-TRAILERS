import React from 'react';

import { motion } from 'framer-motion';

const Facilities = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5551982868640&text=Ol%C3%A1%2C%20estou%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";

  const facilities = [
    {
      title: "Matriz",
      highlight: "Santa Catarina",
      address: "Rodovia SC-418, 12000 KM50 Íon Trailer Campestre, Campo Alegre - SC",
      image: "/images/fac_1.jpg"
    },
    {
      title: "Filial",
      highlight: "São Paulo",
      address: "Venda, Manutenção e Camping | Estr. Da Glória, 1.100 - Três Vendas",
      image: "/images/fac_2.jpg"
    }
  ];

  const foodTrucks = [
    "/images/food_truck_red_1.jpg",
    "/images/food_truck_red_2.jpg",
    "/images/food_truck_red_3.jpg",
    "/images/food_truck_red_4.jpg"
  ];

  const trailerLojas = [
    "/images/trailer_loja_1.jpg",
    "/images/trailer_loja_2.jpg",
    "/images/trailer_loja_3.jpg"
  ];

  const trailersCamping = [
    "/images/trailer_camping_1.jpg",
    "/images/trailer_camping_2.jpg",
    "/images/trailer_camping_3.jpg"
  ];

  const [currentFT, setCurrentFT] = React.useState(0);
  const [currentTL, setCurrentTL] = React.useState(0);
  const [currentTC, setCurrentTC] = React.useState(0);
  
  React.useEffect(() => {
    const timerFT = setInterval(() => {
      setCurrentFT((prev) => (prev === foodTrucks.length - 1 ? 0 : prev + 1));
    }, 4000);
    const timerTL = setInterval(() => {
      setCurrentTL((prev) => (prev === trailerLojas.length - 1 ? 0 : prev + 1));
    }, 4500); // slightly different interval so they don't slide exactly at the same time
    const timerTC = setInterval(() => {
      setCurrentTC((prev) => (prev === trailersCamping.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => {
      clearInterval(timerFT);
      clearInterval(timerTL);
      clearInterval(timerTC);
    };
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-ion-dark mb-6"
          >
            Instalações <span className="text-ion-bronze">Próprias</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl mb-8 font-medium"
          >
            Vamos conversar sobre o seu próximo trailer?
          </motion.p>
          <motion.a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-ion-bronze hover:bg-ion-dark text-white hover:text-ion-bronze font-bold py-3 px-8 rounded uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            Saiba mais
          </motion.a>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                <div className="absolute inset-0 bg-ion-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={facility.image} 
                  alt="Instalações Íon Trailers" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Food Trucks Carousel Category */}
        <div className="mt-16 md:mt-32 border-t border-gray-100 pt-12 md:pt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-ion-dark mb-4"
            >
              Trailers de Lanche / <span className="text-ion-bronze">Food Trucks</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl font-medium"
            >
              Projetos premium personalizados, com acabamento impecável, focados em ergonomia e produtividade para o seu negócio gastronômico.
            </motion.p>
          </div>

          <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl relative">
            <motion.img 
              key={currentFT}
              src={foodTrucks[currentFT]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              alt="Food Truck Íon Trailers"
            />
            
            {/* Overlay indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
              {foodTrucks.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentFT(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentFT === idx ? 'bg-ion-bronze w-8' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trailer Lojas Carousel Category */}
        <div className="mt-12 md:mt-24 border-t border-gray-100 pt-12 md:pt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-ion-dark mb-4"
            >
              Trailer <span className="text-ion-bronze">Lojas</span> / Vitrines Móveis
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl font-medium"
            >
              Soluções sofisticadas de mobilidade comercial. Leve sua marca e produtos para eventos, exposições e pontos estratégicos com máximo impacto visual.
            </motion.p>
          </div>

          <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl relative">
            <motion.img 
              key={`tl-${currentTL}`}
              src={trailerLojas[currentTL]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              alt="Trailer Loja Íon Trailers"
            />
            
            {/* Overlay indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
              {trailerLojas.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTL(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTL === idx ? 'bg-ion-bronze w-8' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trailers de Camping Carousel Category */}
        <div className="mt-12 md:mt-24 border-t border-gray-100 pt-12 md:pt-24 mb-8 md:mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-ion-dark mb-4"
            >
              Trailers de <span className="text-ion-bronze">Camping</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl font-medium"
            >
              Conforto e autonomia em unidades compactas e robustas. Projetadas para levar você a qualquer destino com total comodidade.
            </motion.p>
          </div>

          <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl relative">
            <motion.img 
              key={`tc-${currentTC}`}
              src={trailersCamping[currentTC]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              alt="Trailer de Camping Íon Trailers"
            />
            
            {/* Overlay indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
              {trailersCamping.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTC(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTC === idx ? 'bg-ion-bronze w-8' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
