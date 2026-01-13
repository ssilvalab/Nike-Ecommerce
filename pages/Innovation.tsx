
import React from 'react';

const Innovation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-40">
        <div className="lg:col-span-7">
          <div className="inline-block px-3 py-1 border border-white/20 text-[10px] uppercase tracking-[0.3em] mb-8 font-bold text-white/40">
            Evolution Phase 04
          </div>
          <h1 className="text-7xl md:text-[130px] font-black leading-[0.8] tracking-[-0.06em] uppercase mb-8">
            The Future<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary">of Perf.</span>
          </h1>
          <p className="max-w-md text-lg md:text-xl font-light text-white/40 leading-relaxed">
            Transitioning from apparel to human-tech synergy. A monochrome exploration of performance at the edge of biological limits.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-cover bg-center grayscale border border-white/10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800)' }}></div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 text-black max-w-[260px] shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3 border-b border-black/10 pb-2">Manifesto 0.1</p>
            <p className="text-sm font-medium leading-tight uppercase tracking-tight">"Design is not what it looks like, it's how the human body evolves."</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-40">
        {[
          { label: 'Smart Lacing', desc: 'Adaptive fit technology that reacts to foot swelling during training.' },
          { label: 'Bio-Foam', desc: 'Carbon-negative midsole material extracted from atmospheric CO2.' },
          { label: 'NFT Sync', desc: 'Unique digital certificate assigned to every limited run prototype.' },
          { label: 'Track-R', desc: 'Integrated haptic feedback providing stride guidance.' }
        ].map((feat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 hover:border-primary transition-colors cursor-pointer group">
            <span className="material-symbols-outlined text-primary mb-6 group-hover:scale-110 transition-transform">bolt</span>
            <h4 className="text-xl font-bold uppercase mb-4">{feat.label}</h4>
            <p className="text-sm text-white/40 leading-relaxed font-light">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
