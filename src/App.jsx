import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Lanches from './pages/Lanches';
import Motorhomes from './pages/Motorhomes';
import Reboques from './pages/Reboques';
import UnidadesMoveis from './pages/UnidadesMoveis';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen bg-white text-ion-dark selection:bg-ion-bronze selection:text-white overflow-x-hidden relative w-full">
        <TopBar />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/trailers-de-lanches" element={<Lanches />} />
            <Route path="/motorhomes" element={<Motorhomes />} />
            <Route path="/reboques" element={<Reboques />} />
            <Route path="/unidades-moveis" element={<UnidadesMoveis />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
