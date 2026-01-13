
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  type: string;
  price: string;
  img: string;
  spec: string;
  stock: string;
}

const QuickViewModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-xl transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-surface border border-white/10 overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        {/* Decorative HUD corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-10"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-10"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 size-10 border border-white/10 flex items-center justify-center hover:bg-primary transition-all group"
        >
          <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">close</span>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative bg-black/40 flex items-center justify-center p-12">
          <div className="absolute inset-0 grid-blueprint opacity-10"></div>
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-auto object-contain grayscale contrast-125 z-10 transform -rotate-6" 
          />
          <div className="absolute bottom-4 left-4 flex flex-col gap-1">
             <span className="text-[8px] font-mono text-white/20">ASSET_ID: {product.id}</span>
             <span className="text-[8px] font-mono text-white/20">RENDER_STATUS: OPTIMIZED</span>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">{product.type}</span>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4">{product.name}</h2>
            <p className="text-white/40 text-sm font-light leading-relaxed uppercase tracking-wider">
              A high-performance {product.type.toLowerCase()} module designed for multi-terrain versatility and structural longevity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10 border-y border-white/5 py-8">
            <div>
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Cushioning</p>
              <p className="text-xs font-bold uppercase">Void-Air Elite</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Stability</p>
              <p className="text-xs font-bold uppercase">Active_Link</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Material</p>
              <p className="text-xs font-bold uppercase">Syn-Skin V.4</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Mass_Index</p>
              <p className="text-xs font-bold uppercase">240g / Unit</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <span className="text-3xl font-mono tracking-tighter">${product.price}</span>
            <div className="flex items-center gap-2">
              <div className={`size-1.5 rounded-full ${product.stock === 'Stock_OK' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{product.stock}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link 
              to={`/product/${product.id}`}
              className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest text-[10px] hover:bg-primary/80 transition-all flex items-center justify-center gap-2"
            >
              Full Specification
            </Link>
            <button 
              onClick={onClose}
              className="w-full py-4 border border-white/10 text-white/40 font-black uppercase tracking-widest text-[10px] hover:text-white hover:bg-white/5 transition-all"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collections: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const products: Product[] = [
    { id: 'NK-992-AM', name: 'Air_Max_Pulse', type: 'Performance_Module', price: '160.00', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800', spec: 'SPEC_01', stock: 'Stock_OK' },
    { id: 'JD-023-RT', name: 'Dunk_Low_Mono', type: 'Heritage_Heritage', price: '115.00', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800', spec: 'SPEC_02', stock: 'Stock_OK' },
    { id: 'VP-FLY-30', name: 'Vapor_Elite_X', type: 'Racing_Component', price: '250.00', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', spec: 'SPEC_03', stock: 'Critical_Stock' },
    { id: 'PH-MX_V01', name: 'Phantom_Matrix', type: 'Minimalist_Vanguard', price: '285.00', img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800', spec: 'SPEC_04', stock: 'Stock_OK' },
    { id: 'NK-AIR-22', name: 'Alpha_Air_V2', type: 'Cushioning_System', price: '180.00', img: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&q=80&w=800', spec: 'SPEC_05', stock: 'Out_Of_Stock' },
    { id: 'IS-PRO-09', name: 'ISPA_Prototech', type: 'Scavenge_Modular', price: '320.00', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800', spec: 'SPEC_06', stock: 'Stock_OK' }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}

      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none text-white uppercase">Core_Specimens</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-1.5 bg-primary rounded-full animate-pulse"></div>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">V.2.0.4 SYSTEM_LIVE</span>
            </div>
            <p className="text-white/20 text-[10px] font-medium uppercase tracking-[0.2em]">48 items indexed in high-contrast mode</p>
          </div>
        </div>
        <button className="flex items-center gap-4 px-6 py-2 bg-transparent border border-white/10 hover:border-white/40 transition-all group">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Sort: Relevance</span>
          <span className="material-symbols-outlined text-xs group-hover:translate-y-0.5 transition-transform">expand_more</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-32 space-y-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8 border-b border-white/5 pb-4">Parameters</h3>
              <div className="space-y-1">
                <div className="flex items-center justify-between p-4 bg-white/10 border border-white/20 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-white text-xl">footprint</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Model_Type</span>
                  </div>
                  <span className="material-symbols-outlined text-white text-sm">check_circle</span>
                </div>
                {['Activity', 'Colorway', 'Price_Index'].map(filter => (
                  <div key={filter} className="flex items-center justify-between p-4 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3 text-white/40 group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">category</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{filter}</span>
                    </div>
                    <span className="material-symbols-outlined text-white/10 text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {products.map((product) => (
            <div key={product.id} className="relative bg-background border border-white/5 overflow-hidden flex flex-col group h-[550px] transition-all hover:bg-surface">
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-1">
                <span className="text-[8px] font-black text-white tracking-widest uppercase bg-white/10 px-2 py-0.5 border border-white/20">{product.spec}</span>
                <span className="text-[10px] font-medium text-white/20 font-mono tracking-tighter">REF: {product.id}</span>
              </div>
              
              <div className="absolute top-6 right-6 z-20 flex flex-col gap-2 items-end">
                <div className={`flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border ${product.stock === 'Critical_Stock' ? 'border-red-500/50' : 'border-white/10'}`}>
                  <div className={`size-1 rounded-full ${product.stock === 'Stock_OK' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white">{product.stock}</span>
                </div>
                {/* Quick View Trigger (Only visible on group hover) */}
                <button 
                  onClick={() => setQuickViewProduct(product)}
                  className="size-10 bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary translate-x-4 group-hover:translate-x-0"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                </button>
              </div>

              <div className="flex-1 relative p-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={product.img} alt={product.name} className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-1000" />
              </div>

              <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-sm z-20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">{product.type}</p>
                  </div>
                  <p className="text-xl font-mono text-white tracking-tighter">${product.price}</p>
                </div>
                <Link to={`/product/${product.id}`} className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  Commit_Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
