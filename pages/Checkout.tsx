
import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="mb-20">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="text-white/20">01 Shipping</span>
            <span className="text-white underline underline-offset-4 decoration-primary decoration-2">02 Payment</span>
            <span className="text-white/20">03 Review</span>
          </div>
          <div className="h-[1px] w-full bg-white/5 relative">
            <div className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_#1313ec]" style={{ width: '66%' }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold tracking-tighter text-white uppercase italic">Order<br/>Summary</h1>
          <div className="bg-white/5 p-8 border-l-4 border-primary flex gap-8 items-center">
            <div className="w-32 h-32 bg-black overflow-hidden flex items-center justify-center border border-white/10">
              <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" alt="Item" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-[9px] text-white/40 uppercase font-bold tracking-[0.2em]">Experimental Series</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">Pulse Alpha-1</h3>
              <p className="text-white/40 text-xs tracking-wide">Variant: Obsidian / Ghost Grey<br/>Chassis: 10.5 US</p>
              <div className="mt-4">
                <span className="text-xl font-bold tracking-tight text-white">$245.00</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
             <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
                <span>Net Value</span>
                <span className="text-white">$245.00</span>
             </div>
             <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
                <span>Logistics</span>
                <span className="text-white">0.00</span>
             </div>
             <div className="flex justify-between text-xs uppercase tracking-widest text-white/40 border-t border-white/10 pt-6">
                <span className="text-2xl font-bold text-white">Total</span>
                <span className="text-4xl font-bold tracking-tighter text-white">$245.00</span>
             </div>
          </div>
        </div>

        <div className="bg-white/5 p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20"></div>
          <h2 className="text-2xl font-bold tracking-tight text-white uppercase mb-12">Payment Protocol</h2>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-3">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">User Identification</label>
              <input 
                className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-4 text-sm focus:border-primary focus:ring-0 text-white uppercase font-mono tracking-widest" 
                placeholder="ENTER FULL NAME"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">Universal Access Token</label>
              <input 
                className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-4 text-sm focus:border-primary focus:ring-0 text-white font-mono tracking-widest" 
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="flex flex-col gap-3">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">Validity Term</label>
                <input className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-4 text-sm focus:border-primary focus:ring-0 text-white font-mono" placeholder="MM / YY" />
               </div>
               <div className="flex flex-col gap-3">
                <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/40">Security Hash</label>
                <input className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-4 text-sm focus:border-primary focus:ring-0 text-white font-mono" placeholder="***" type="password" />
               </div>
            </div>
            <button className="w-full bg-white text-black py-6 font-bold uppercase tracking-[0.4em] text-xs transition-all hover:bg-primary hover:text-white shadow-[0_0_30px_rgba(19,19,236,0.2)]">
              Initialize Transfer
            </button>
          </form>
          <div className="mt-16 flex justify-center items-center gap-10 opacity-30">
            {['SSL-6', 'BIO-ID', 'P2P'].map(p => (
              <div key={p} className="flex items-center gap-2 text-[10px] font-bold tracking-widest">
                <span className="material-symbols-outlined text-sm">lock</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
