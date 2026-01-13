
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Team from './pages/Team';
import Innovation from './pages/Innovation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">
        <Navbar />
        
        {/* Main Content Ticker */}
        <div className="w-full bg-primary/10 border-b border-primary/20 py-2 overflow-hidden flex whitespace-nowrap z-40">
          <div className="flex animate-marquee gap-10 items-center">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● Live Update: A.I. Enhanced Cushioning System Phase 4 Deployed</span>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">//</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● SKU: NK-2099-ALPHA Available in Meta-Retail</span>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">//</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● Sustainable Biomaterials Reaching 89% Efficiency</span>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">//</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● Experimental ISPA Release: 14:00 UTC</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee gap-10 items-center ml-10">
             <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● Live Update: A.I. Enhanced Cushioning System Phase 4 Deployed</span>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">//</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● SKU: NK-2099-ALPHA Available in Meta-Retail</span>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">//</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● Sustainable Biomaterials Reaching 89% Efficiency</span>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">//</span>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">● Experimental ISPA Release: 14:00 UTC</span>
          </div>
        </div>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/team" element={<Team />} />
            <Route path="/innovation" element={<Innovation />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
