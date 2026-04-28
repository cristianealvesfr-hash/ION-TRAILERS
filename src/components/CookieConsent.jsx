import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('ion_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly on first paint
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ion_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth spring
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-5xl bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 relative pointer-events-auto">
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors lg:hidden"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="flex-1 pr-4">
              <h3 className="text-xl font-bold text-ion-dark mb-2">Privacidade e Cookies (LGPD)</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Utilizamos cookies essenciais e tecnologias semelhantes para oferecer a melhor experiência em nosso site. Ao clicar em "Aceitar", você concorda com o uso de cookies e com a nossa{' '}
                <Link to="/politica-de-privacidade" className="text-ion-bronze font-bold hover:underline">
                  Política de Privacidade
                </Link>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 mt-4 lg:mt-0">
              <Link 
                to="/politica-de-privacidade"
                onClick={() => setIsVisible(false)}
                className="px-6 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors text-center text-sm uppercase tracking-wider"
              >
                Ler Política
              </Link>
              <button 
                onClick={handleAccept}
                className="px-8 py-3 bg-ion-bronze hover:bg-ion-dark text-white font-bold rounded-lg transition-colors shadow-lg shadow-ion-bronze/20 text-center text-sm uppercase tracking-wider"
              >
                Aceitar
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
