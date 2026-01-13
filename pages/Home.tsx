
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ARViewer from '../components/ARViewer';

const Home: React.FC = () => {
  const [isAROpen, setIsAROpen] = useState(false);
  const featuredShoeImg = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200";

  const archives = [
    {
      id: '0042',
      tag: 'Technical Analysis',
      title: 'ISPA: Improvise. Scavenge. Protect. Adapt.',
      desc: 'A deep dive into the design philosophy that challenges the norm of urban utility footwear through modular systems.',
      img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '0043',
      tag: 'Sustainable_00',
      title: 'Molecular Recycling: Move to Zero Waste',
      desc: 'How Nike is utilizing closed-loop manufacturing to create footwear that can be completely disassembled and reborn.',
      img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '0044',
      tag: 'Neural Link',
      title: 'Biometric Feedback: The Wearable Shift',
      desc: 'Integrating real-time performance data directly into the textile fibers of the upcoming Flyknit performance line.',
      img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      {isAROpen && (
        <ARViewer 
          imageUrl={featuredShoeImg} 
          onClose={() => setIsAROpen(false)} 
          productName="NK-CORE-VANGUARD"
        />
      )}

      {/* Hero Section */}
      <div className="grid grid-cols-12 gap-8 mb-32">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-end">
          <div className="flex gap-4 mb-6">
            <span className="px-2 py-1 bg-primary text-[10px] font-bold tracking-widest uppercase rounded">Breaking Innovation</span>
            <span className="px-2 py-1 border border-white/20 text-[10px] font-bold tracking-widest uppercase rounded text-white/40">Phase_04.01</span>
          </div>
          <h1 className="text-7xl lg:text-[140px] font-bold tracking-tighter leading-[0.85] uppercase mb-8">The Future<br/>of Motion.</h1>
          <p className="max-w-xl text-lg text-white/40 leading-relaxed font-light mb-8">
            An exploration into the technical architecture of the next generation of performance footwear. Grayscale aesthetics meet raw algorithmic power.
          </p>
          <div className="flex items-center gap-12 border-t border-white/10 pt-8">
            <div>
              <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest mb-1">Article ID</p>
              <p className="text-sm font-bold tracking-wider">NK-TECH-089-ALPHA</p>
            </div>
            <div>
              <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest mb-1">Last Sync</p>
              <p className="text-sm font-bold tracking-wider">04:12:00 UTC</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 relative group cursor-crosshair">
          <div className="absolute inset-0 border border-primary/40 group-hover:border-primary transition-colors z-10 pointer-events-none"></div>
          <div className="absolute -top-2 -left-2 size-4 bg-primary"></div>
          <div className="absolute -bottom-2 -right-2 size-4 bg-primary"></div>
          <div className="h-full min-h-[500px] bg-white/5 overflow-hidden flex items-center justify-center relative">
            <img 
              className="grayscale-img absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000 group-hover:opacity-80" 
              src={featuredShoeImg}
              alt="Futuristic product"
            />
            <button 
              onClick={() => setIsAROpen(true)}
              className="relative z-20 text-center flex flex-col items-center group/btn"
            >
              <div className="size-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center mb-4 border border-primary/50 group-hover/btn:scale-110 group-hover/btn:bg-primary/40 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl">view_in_ar</span>
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase group-hover/btn:text-primary transition-colors">Initialize 3D View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Protocol Archives Section */}
      <div className="mb-32">
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-4">
            <span className="size-2 bg-primary rounded-full animate-pulse"></span>
            Protocol Archives
          </h2>
          <div className="flex gap-4">
            <button className="size-10 border border-white/10 rounded flex items-center justify-center hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-sm">grid_view</span>
            </button>
            <button className="size-10 border border-white/10 rounded flex items-center justify-center hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-sm">list</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archives.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-square overflow-hidden mb-6 bg-white/5 border border-white/10 rounded-lg">
                <img className="grayscale-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={item.img} alt={item.title} />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1 text-[9px] font-mono tracking-widest text-primary">
                  DATA_LOG: {item.id}
                </div>
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2">{item.tag}</p>
              <h3 className="text-2xl font-bold leading-none mb-4 uppercase group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
              <Link to="/collections" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-primary pb-1 group-hover:gap-4 transition-all">
                Read Protocol
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Workspace Display */}
      <div className="relative w-full h-[600px] mb-32 rounded-2xl overflow-hidden grid-blueprint border border-white/5 group">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center pointer-events-none">
          <h2 className="text-[10vw] font-black text-white/[0.02] uppercase absolute select-none tracking-tighter">SYSTEM_CORE</h2>
          <div className="relative z-20">
            <h3 className="text-4xl font-bold uppercase mb-4 tracking-tighter">Interactive Model: Alphafly Next% V3</h3>
            <p className="text-primary font-mono text-sm tracking-widest mb-8">LOADED_ASSET_ID: // 3D_NK_ALPHA_772</p>
            <button 
              onClick={() => setIsAROpen(true)}
              className="bg-primary px-8 py-3 rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:scale-105 transition-transform pointer-events-auto shadow-[0_0_30px_rgba(19,19,236,0.4)]"
            >
              Enter Workspace
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 text-[9px] font-mono text-white/20 space-y-1">
          <p>X-AXIS: 142.091</p>
          <p>Y-AXIS: 88.112</p>
          <p>Z-AXIS: -12.441</p>
          <p>ROTATION: 0.00°</p>
        </div>
        <div className="absolute top-8 right-8 text-[9px] font-mono text-primary space-y-1 text-right">
          <p>STATUS: OPTIMIZED</p>
          <p>BUFFER: 100%</p>
          <p>FIRMWARE: V9.2.0</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto text-center border border-white/10 p-12 rounded-2xl relative overflow-hidden bg-white/5">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4">Command Center</p>
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Subscribe to the Innovation Protocol</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex-1 w-full bg-black/50 border border-white/20 px-4 py-3 rounded flex items-center gap-3">
            <span className="text-primary font-mono text-sm">&gt;</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-xs font-mono uppercase tracking-widest w-full p-0 placeholder:text-white/10" 
              placeholder="INPUT_USER_EMAIL" 
              type="email" 
            />
          </div>
          <button className="bg-white text-black px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all w-full md:w-auto">
            Execute
          </button>
        </div>
        <p className="text-[9px] text-white/20 uppercase mt-6 tracking-[0.2em]">By clicking execute, you agree to the Nike Privacy Policy and Protocol Terms.</p>
      </div>
    </div>
  );
};

export default Home;
