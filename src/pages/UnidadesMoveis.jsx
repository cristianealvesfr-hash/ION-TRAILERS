import React from 'react';
import { motion } from 'framer-motion';

const UnidadesMoveis = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="container mx-auto px-4 py-20 min-h-[60vh]"
    >
      <h1 className="text-4xl md:text-5xl font-black text-ion-dark mb-8 text-center uppercase">
        Trailers e <span className="text-ion-bronze">Unidades Móveis</span>
      </h1>
      
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
        Customização de Caminhões e adaptação técnica para finalidades específicas (comerciais ou recreativas).
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl col-span-1 md:col-span-2 max-w-4xl mx-auto">
          <img 
            src="/images/fabrica_trailers.jpg" 
            alt="Fábrica Íon Trailers com Unidades Móveis" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UnidadesMoveis;
