import React from 'react';
import { motion } from 'framer-motion';

const Lanches = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="container mx-auto px-4 py-20 min-h-[60vh]"
    >
      <h1 className="text-4xl md:text-5xl font-black text-ion-dark mb-8 text-center uppercase">
        Trailers de Lanche / <span className="text-ion-bronze">Food Trucks</span>
      </h1>
      
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
        Projetos personalizados para gastronomia itinerante, com foco em ergonomia interna e conformidade com normas sanitárias.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/images/food_truck_red_1.jpg" 
            alt="Food Truck Exterior" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/images/food_truck_red_2.jpg" 
            alt="Food Truck Exterior Aberto" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/images/food_truck_red_3.jpg" 
            alt="Food Truck Interior" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/images/food_truck_red_4.jpg" 
            alt="Food Truck Interior Bancada" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Lanches;
