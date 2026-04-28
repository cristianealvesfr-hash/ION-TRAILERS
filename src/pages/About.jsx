import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="container mx-auto px-4 py-20 min-h-[60vh]"
    >
      <h1 className="text-4xl md:text-5xl font-black text-ion-dark mb-8 text-center uppercase">Sobre a <span className="text-ion-bronze">Empresa</span></h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <div className="w-full flex justify-center">
            <img 
              src="/images/logo.jpg" 
              alt="Íon Trailers Logo" 
              className="max-w-xs md:max-w-sm rounded shadow-lg"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-ion-dark mb-4">ÍON TRAILERS</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fabricamos trailers personalizados para o seu tipo de negócio. Há mais de 10 anos fabricando Trailers e Motorhomes, que rodam pelas estradas do mundo inteiro!
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nossa missão é entregar qualidade, inovação e o melhor custo-benefício para que o seu projeto ganhe as estradas com segurança e estilo.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
