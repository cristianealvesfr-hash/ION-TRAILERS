import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-ion-dark text-white text-sm py-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="font-semibold tracking-wide">VAMOS CONVERSAR SOBRE SEU PRÓXIMO TRAILER?</span>
          <a href="https://api.whatsapp.com/send?phone=5551982868640&text=Ol%C3%A1%2C%20estou%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="bg-ion-bronze hover:bg-ion-bronze-light text-ion-dark font-bold py-1.5 px-4 rounded text-xs transition-colors duration-300">
            Clique aqui
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs sm:text-sm">
          <a href="https://api.whatsapp.com/send?phone=5551982868640" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-ion-bronze transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
              className="mr-1 text-green-500"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Comercial (51) 98286-8640
          </a>
          <span className="font-semibold text-ion-bronze hidden lg:inline-block">
            + DE 600 EQUIPAMENTOS VENDIDOS
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
