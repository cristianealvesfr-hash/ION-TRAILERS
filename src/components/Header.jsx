import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = "https://api.whatsapp.com/send?phone=5551982868640&text=Ol%C3%A1%2C%20estou%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";

  const navLinks = [
    { name: 'ÍON TRAILERS', href: '/sobre' },
    { name: 'TRAILER DE LANCHES', href: '/trailers-de-lanches' },
    { name: 'MOTORHOMES', href: '/motorhomes' },
    { name: 'REBOQUES', href: '/reboques' },
    { name: 'CONTATO', href: whatsappLink, external: true },
  ];

  const subLinks = [
    { name: 'Trailers e Unidades Móveis', href: '/unidades-moveis' },
    { name: 'Trailers de Lanche / Food Trucks', href: '/trailers-de-lanches' },
    { name: 'Motorhomes', href: '/motorhomes' },
    { name: 'Reboques e Implementos Rodoviários', href: '/reboques' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-ion-dark tracking-tighter">ÍON</span>
              <span className="text-sm font-semibold tracking-widest text-ion-bronze">TRAILERS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ion-dark font-bold text-sm tracking-wider hover:text-ion-bronze relative group transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ion-bronze transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-ion-dark font-bold text-sm tracking-wider hover:text-ion-bronze relative group transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ion-bronze transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>



          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-ion-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Sub Navigation (Desktop) */}
        <div className="hidden md:flex justify-center border-t border-gray-100 py-3 space-x-12">
          {subLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-gray-500 font-medium text-xs tracking-widest hover:text-ion-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a 
                    key={link.name} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-b border-gray-50 text-ion-dark font-bold text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className="px-6 py-3 border-b border-gray-50 text-ion-dark font-bold text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="bg-gray-50 py-2">
                {subLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className="block px-6 py-2 text-gray-500 text-xs font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
