import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Tent, Store, Settings, Package, Wrench } from 'lucide-react';

const servicesData = [
  {
    category: "Trailers e Unidades Móveis",
    items: [
      {
        title: "Trailers de Lanche / Food Trucks",
        description: "Projetos personalizados para gastronomia itinerante, com foco em ergonomia interna e conformidade com normas sanitárias.",
        icon: <Store className="w-8 h-8 text-ion-bronze" />
      },
      {
        title: "Trailers de Camping",
        description: "Unidades compactas e robustas, projetadas para oferecer conforto e autonomia em qualquer destino.",
        icon: <Tent className="w-8 h-8 text-ion-bronze" />
      },
      {
        title: "Motorhomes",
        description: "Transformação completa de veículos em casas sobre rodas, com acabamento de alto padrão e soluções inteligentes de espaço.",
        icon: <Truck className="w-8 h-8 text-ion-bronze" />
      }
    ]
  },
  {
    category: "Reboques e Implementos Rodoviários",
    items: [
      {
        title: "Reboques Baú",
        description: "Ideais para transporte de carga seca com total segurança e proteção contra intempéries.",
        icon: <Package className="w-8 h-8 text-ion-bronze" />
      },
      {
        title: "Pranchas e Plataformas",
        description: "Estruturas reforçadas para o transporte de veículos, máquinas ou cargas especiais.",
        icon: <Truck className="w-8 h-8 text-ion-bronze" />
      },
      {
        title: "Reboques de Uso Geral",
        description: "Fabricação sob medida para diferentes necessidades logísticas e capacidades de carga.",
        icon: <Settings className="w-8 h-8 text-ion-bronze" />
      }
    ]
  },
  {
    category: "Transformações Especiais",
    items: [
      {
        title: "Customização de Caminhões",
        description: "Adaptação técnica de caminhões para finalidades específicas (comerciais ou recreativas).",
        icon: <Wrench className="w-8 h-8 text-ion-bronze" />
      }
    ]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-ion-dark mb-4 uppercase tracking-tighter"
          >
            Nossas <span className="text-ion-bronze">Soluções</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl font-medium"
          >
            Fabricação e customização de alto padrão para todas as necessidades.
          </motion.p>
        </div>

        <div className="space-y-16">
          {servicesData.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-ion-dark mb-8 border-l-4 border-ion-bronze pl-4 uppercase tracking-wide">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                  >
                    <div className="mb-6 p-4 bg-gray-50 rounded-full inline-block group-hover:bg-ion-bronze/10 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-ion-dark mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
