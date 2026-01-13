
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Nike Innovation Labs</span>
          </div>
          <p className="text-xs text-white/40 leading-relaxed uppercase tracking-widest max-w-xs font-medium">
            Designed for the athletes of 2099. Engineered with purpose. Delivered via digital stream.
          </p>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-2">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-6">Explore</p>
          <ul className="text-[10px] uppercase font-bold tracking-[0.2em] space-y-3 text-white/40">
            <li><Link className="hover:text-white" to="/">Research Data</Link></li>
            <li><Link className="hover:text-white" to="/collections">Prototype Store</Link></li>
            <li><Link className="hover:text-white" to="/innovation">ISPA Collection</Link></li>
            <li><Link className="hover:text-white" to="/innovation">Sustainability Report</Link></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-2">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-6">Connect</p>
          <ul className="text-[10px] uppercase font-bold tracking-[0.2em] space-y-3 text-white/40">
            <li><a className="hover:text-white" href="#">Discord Node</a></li>
            <li><a className="hover:text-white" href="#">Meta-Twitter</a></li>
            <li><a className="hover:text-white" href="#">Lab Instagram</a></li>
            <li><a className="hover:text-white" href="#">Innovation Feed</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col justify-between items-end">
          <div className="flex gap-4">
            <div className="size-10 border border-white/10 rounded flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-sm">public</span>
            </div>
            <div className="size-10 border border-white/10 rounded flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-sm">terminal</span>
            </div>
          </div>
          <div className="text-right mt-4">
            <p className="text-[10px] font-mono text-white/20 uppercase">
              CREATED BY SEBASTIAN SILVA
            </p>
            <p className="text-[10px] font-mono text-white/20 uppercase mt-1">
              © 2024 NIKE_INNOVATION_LABS // ALL_RIGHTS_RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
