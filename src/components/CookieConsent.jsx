import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      // Check if user has already given consent
      const consent = localStorage.getItem('ion_cookie_consent');
      if (!consent) {
        // Small delay so it doesn't pop up instantly on first paint
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      // Fallback for browsers blocking localStorage (e.g., strict incognito)
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('ion_cookie_consent', 'true');
    } catch (error) {
      console.warn('LocalStorage is disabled');
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth spring
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-5xl bg-white shadow-2xl rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 relative pointer-events-auto">
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors md:hidden"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>

            <div className="flex-1 text-center md:text-left pr-0 md:pr-4 mt-2 md:mt-0">
              <p className="text-gray-700 text-xs md:text-sm leading-snug">
                <strong className="text-ion-dark mr-1">Privacidade (LGPD):</strong>
                Utilizamos cookies essenciais para oferecer a melhor experiência em nosso site. Ao "Aceitar", você concorda com a nossa{' '}
                <Link to="/politica-de-privacidade" className="text-ion-bronze font-bold hover:underline">
                  Política de Privacidade
                </Link>.
              </p>
            </div>

            <div className="flex flex-row justify-center gap-3 w-full md:w-auto shrink-0 mt-1 md:mt-0">
              <Link 
                to="/politica-de-privacidade"
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 border-2 border-gray-200 text-gray-600 font-bold rounded-md hover:bg-gray-50 transition-colors text-xs uppercase tracking-wider whitespace-nowrap"
              >
                Ler Política
              </Link>
              <button 
                onClick={handleAccept}
                className="px-6 py-2 bg-ion-bronze hover:bg-ion-dark text-white font-bold rounded-md transition-colors shadow-md text-xs uppercase tracking-wider whitespace-nowrap"
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
