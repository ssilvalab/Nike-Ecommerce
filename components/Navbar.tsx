
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Protocol_01', path: '/' },
    { name: 'Sustainability', path: '/innovation' },
    { name: 'Collections', path: '/collections' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-6 text-primary group-hover:scale-110 transition-transform">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase hidden sm:inline">Nike Innovation Labs</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`hover:text-primary transition-colors ${location.pathname === link.path ? 'text-white' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
            <span className="material-symbols-outlined text-[18px] text-white/40">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-[10px] w-24 uppercase font-bold tracking-widest p-0 placeholder:text-white/20" 
              placeholder="QUERY_DB" 
              type="text" 
            />
          </div>
          <Link 
            to="/checkout"
            className="bg-primary hover:bg-primary/80 text-white px-5 py-2 text-[10px] font-bold tracking-widest uppercase rounded transition-all active:scale-95"
          >
            Initialize
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
