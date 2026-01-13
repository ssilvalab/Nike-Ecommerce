
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ARViewer from '../components/ARViewer';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [isAROpen, setIsAROpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // In a real app, you'd fetch based on ID.
  const productImg = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200";
  const productName = "Phantom Matrix";

  // Wishlist Logic
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('nike_innovation_wishlist') || '[]');
    setIsWishlisted(wishlist.some((item: any) => item.id === id));
  }, [id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('nike_innovation_wishlist') || '[]');
    let newWishlist;
    
    if (isWishlisted) {
      newWishlist = wishlist.filter((item: any) => item.id !== id);
    } else {
      newWishlist = [...wishlist, { id, name: productName, img: productImg, timestamp: Date.now() }];
    }
    
    localStorage.setItem('nike_innovation_wishlist', JSON.stringify(newWishlist));
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      {isAROpen && (
        <ARViewer 
          imageUrl={productImg} 
          onClose={() => setIsAROpen(false)} 
          productName={`NK-${id?.toUpperCase() || 'PHANTOM'}`}
        />
      )}

      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-12 @container">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
           <h1 className="text-[30vw] font-black text-white leading-none uppercase tracking-tighter">PHANTOM</h1>
        </div>
        
        <div className="flex-1 flex flex-col gap-10 z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">System Revision 2024.08</span>
            </div>
            <h2 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
              Phantom<br/><span className="text-outline">Matrix</span>
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <div className={`flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm`}>
                <div className={`size-1.5 rounded-full ${isWishlisted ? 'bg-primary animate-pulse' : 'bg-white/20'}`}></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">
                  {isWishlisted ? 'STATE: ARCHIVED' : 'STATE: TRANSIENT'}
                </span>
              </div>
              <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">UID: {id || 'DEFAULT_V01'}</span>
            </div>
            <p className="text-white/40 text-base md:text-lg max-w-[420px] font-light leading-relaxed mt-4 border-l border-white/10 pl-6">
              Monochromatic architecture engineered for the minimalist vanguard. Precision-cut carbon components fused with liquid-form synthetics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/checkout" className="flex-1 flex items-center justify-center bg-white h-16 px-8 text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/20">
              Initialize Purchase
            </Link>
            
            <div className="flex gap-4 flex-1">
              <button 
                onClick={() => setIsAROpen(true)}
                className="flex-1 flex items-center justify-center border border-white/10 bg-white/5 h-16 px-6 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all group"
              >
                <span className="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform">view_in_ar</span>
                AR_Protocol
              </button>

              <button 
                onClick={toggleWishlist}
                className={`flex-1 flex items-center justify-center border h-16 px-6 text-[10px] font-bold uppercase tracking-[0.2em] transition-all group ${
                  isWishlisted 
                  ? 'border-primary bg-primary text-white' 
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-white/40'
                }`}
              >
                <span className={`material-symbols-outlined mr-2 transition-all ${isWishlisted ? 'fill-1' : ''}`}>
                  {isWishlisted ? 'bookmark_added' : 'bookmark'}
                </span>
                {isWishlisted ? 'Archived' : 'Archive'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center py-10">
          <div className="relative w-full aspect-square max-w-[500px] bg-white/5 rounded-full overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 grid-blueprint opacity-20"></div>
             <img src={productImg} alt="Shoe" className="relative z-10 w-full grayscale contrast-125 transform -rotate-12" />
             <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-primary/20"></div>
             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-primary/20"></div>
             
             {/* Hint for AR */}
             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="size-1 w-12 bg-primary/20 mb-2 overflow-hidden">
                   <div className="h-full bg-primary animate-shimmer-fast"></div>
                </div>
                <span className="text-[8px] font-bold text-primary uppercase tracking-[0.3em]">3D_ASSET_READY</span>
             </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {[
          { icon: 'air', title: 'Void-Cushion', desc: 'Pressurized atmospheric isolation chambers for impact absorption.' },
          { icon: 'architecture', title: 'Carbon-Bone', desc: 'Heat-treated carbon weave provides structural rigidity at 40% less mass.' },
          { icon: 'texture', title: 'Syn-Skin', desc: 'Adaptive thermal-reactive surface tension textile.' }
        ].map((spec, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-10 flex flex-col gap-6 hover:border-primary transition-colors cursor-crosshair group">
            <div className="size-12 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">{spec.icon}</span>
            </div>
            <div>
              <h4 className="text-xl font-black uppercase italic mb-2">{spec.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{spec.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <style>{`
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 1.5s infinite linear;
        }
        .fill-1 {
          font-variation-settings: 'FILL' 1;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
