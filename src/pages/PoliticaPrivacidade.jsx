import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PoliticaPrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-32 pb-20"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-ion-dark mb-8 uppercase text-center">
          Política de <span className="text-ion-bronze">Privacidade</span>
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-gray-700 space-y-6">
          <p className="text-lg">
            A ÍON Trailers ("nós", "nosso", "nossa") se compromete a proteger a sua privacidade. Esta Política de Privacidade explica como suas informações pessoais são coletadas, usadas e divulgadas pela ÍON Trailers.
          </p>

          <h2 className="text-2xl font-bold text-ion-dark mt-8 mb-4">Informações que Coletamos</h2>
          <p>
            Coletamos as informações que você nos fornece diretamente. Por exemplo, coletamos informações quando você solicita um orçamento, preenche um formulário ou se comunica conosco via WhatsApp ou e-mail. Os tipos de informações que podemos coletar incluem seu nome, endereço de e-mail, número de telefone e qualquer outra informação que você escolher fornecer.
          </p>

          <h2 className="text-2xl font-bold text-ion-dark mt-8 mb-4">Como Usamos Suas Informações</h2>
          <p>Podemos usar as informações que coletamos para vários fins, incluindo:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer, manter e melhorar nossos serviços;</li>
            <li>Processar transações e enviar avisos relacionados;</li>
            <li>Responder a seus comentários, perguntas e fornecer atendimento ao cliente;</li>
            <li>Comunicar sobre produtos, serviços, ofertas e promoções.</li>
          </ul>

          <h2 className="text-2xl font-bold text-ion-dark mt-8 mb-4">Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, exceto para cumprir leis aplicáveis, regulamentos ou obrigações legais, ou se entendermos que suas ações são inconsistentes com nossos acordos de usuário.
          </p>

          <h2 className="text-2xl font-bold text-ion-dark mt-8 mb-4">Seus Direitos</h2>
          <p>
            Você tem o direito de solicitar acesso, correção ou exclusão de suas informações pessoais. Se desejar exercer qualquer um desses direitos, entre em contato conosco através do nosso e-mail ou WhatsApp.
          </p>

          <h2 className="text-2xl font-bold text-ion-dark mt-8 mb-4">Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em: <strong>iontrailers@gmail.com</strong>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PoliticaPrivacidade;
