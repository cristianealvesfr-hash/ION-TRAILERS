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
        Trailer <span className="text-ion-bronze">Lojas</span> / Unidades Móveis
      </h1>
      
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
        Customização de Trailers para finalidades específicas comerciais. Ideal para vitrines móveis, lojas pop-up, exposições e eventos corporativos.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="w-full aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/images/trailer_loja_1.jpg" 
            alt="Trailer Loja Exterior Dourado" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="w-full aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/images/trailer_loja_2.jpg" 
            alt="Trailer Loja Interior Amplo" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/images/trailer_loja_3.jpg" 
            alt="Trailer Loja Prateleiras" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UnidadesMoveis;
