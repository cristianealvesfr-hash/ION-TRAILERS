import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* Top Section - Logo & Catalog CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black text-ion-dark tracking-tighter">ÍON</span>
              <span className="text-base font-semibold tracking-widest text-ion-bronze">TRAILERS</span>
            </div>
          </div>
        </div>

        {/* Main Footer Links - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-bold text-ion-dark mb-6 border-l-2 border-ion-bronze pl-3">Acesse</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Início</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Íon Trailers</Link></li>
              <li><a href="https://api.whatsapp.com/send?phone=5551982868640" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Contato</a></li>
              <li><Link to="/politica-de-privacidade" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold text-ion-dark mb-6 border-l-2 border-ion-bronze pl-3">Linhas</h4>
            <ul className="space-y-3">
              <li><Link to="/unidades-moveis" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Trailers e Unidades Móveis</Link></li>
              <li><Link to="/trailers-de-lanches" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Trailers de Lanche / Food Trucks</Link></li>
              <li><Link to="/motorhomes" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Motorhomes</Link></li>
              <li><Link to="/reboques" className="text-gray-600 hover:text-ion-bronze transition-colors text-sm font-medium">Reboques e Implementos Rodoviários</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold text-ion-dark mb-6 border-l-2 border-ion-bronze pl-3">Contato</h4>
            
            <div className="space-y-6">
              <div>
                <p className="font-bold text-ion-dark text-sm mb-1">Pelotas - RS</p>
                <div className="flex items-start text-gray-500 text-sm mb-3">
                  <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>Av. Engenheiro Idelfonso Simões Lopes 4312</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mr-2 text-green-500 flex-shrink-0"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Comercial (51) 98286-8640</span>
                </div>
              </div>

              <div className="flex items-center text-gray-500 text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>iontrailers@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 flex flex-col items-center justify-center">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} ÍON Trailers. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
