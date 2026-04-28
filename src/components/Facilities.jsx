import React from 'react';

import { motion } from 'framer-motion';

const Facilities = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5551982868640&text=Ol%C3%A1%2C%20estou%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";

  const facilities = [
    {
      title: "Matriz",
      highlight: "Santa Catarina",
      address: "Rodovia SC-418, 12000 KM50 Íon Trailer Campestre, Campo Alegre - SC",
      image: "/src/assets/images/fabrica_trailers.jpg"
    },
    {
      title: "Ampliação",
      highlight: "São Paulo",
      address: "Filial | Itu-SP (Venda, Manutenção e Camping) Estr. Da Glória, 1.100 - Três Vendas",
      image: "/src/assets/images/trailer_feira.jpg"
    }
  ];

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
      </div>
    </section>
  );
};

export default Facilities;
