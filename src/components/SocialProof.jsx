import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  return (
    <section className="relative pt-24 pb-20 bg-ion-dark overflow-hidden mt-16 md:mt-24 lg:mt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/social_proof_bg.jpg" 
          alt="Ion Trailers Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ion-dark/70 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left: White Card with Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl border-l-4 border-ion-bronze"
          >
            <h2 className="text-3xl md:text-5xl font-black text-ion-dark leading-tight">
              Uma das <span className="text-ion-bronze">maiores Fábricas</span> de Trailers do Brasil com mais de <span className="text-ion-bronze underline decoration-4 underline-offset-4">600 entregues</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              Qualidade, conforto e segurança para você viver as melhores aventuras pelo mundo.
            </p>
          </motion.div>

          {/* Right: Quality Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative group cursor-pointer">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-ion-bronze to-ion-bronze-light rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Shield Badge */}
              <div className="relative flex flex-col items-center justify-center p-10 bg-gradient-to-b from-ion-dark to-gray-900 border-2 border-ion-bronze rounded-[2rem] shadow-2xl transform transition-transform duration-300 group-hover:-translate-y-2">
                <ShieldCheck size={64} className="text-ion-bronze mb-4" />
                
                <h3 className="text-white text-center text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">
                  100% DE SATISFAÇÃO
                  <span className="block text-ion-bronze text-sm mt-2">DOS NOSSOS</span>
                  <span className="block text-3xl mt-1">CLIENTES</span>
                </h3>

                <div className="flex space-x-2 mt-2">
                  <Star className="text-ion-bronze fill-ion-bronze" size={24} />
                  <Star className="text-ion-bronze fill-ion-bronze" size={24} />
                  <Star className="text-ion-bronze fill-ion-bronze" size={24} />
                  <Star className="text-ion-bronze fill-ion-bronze" size={24} />
                  <Star className="text-ion-bronze fill-ion-bronze" size={24} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;
