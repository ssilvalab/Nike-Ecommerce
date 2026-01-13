
import React from 'react';

const Team: React.FC = () => {
  const members = [
    { id: '088-PXA', name: 'Marcus Reed', role: 'Director of 3D Synthesis', bio: 'Specialized in procedural geometry and algorithmic structure for high-performance systems.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
    { id: '102-KLT', name: 'Elena Vance', role: 'Advanced Materials Lead', bio: 'Pioneer in bio-synthetic polymers and recycled carbon fiber integration.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
    { id: '044-RDX', name: 'Jonas Kai', role: 'Footwear Futurologist', bio: 'Designing for the next era. Jonas focuses on wearable tech integration and adaptive fit.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-32 relative">
        <div className="inline-block px-4 py-1.5 mb-8 border border-white/20 bg-white/5">
          <span className="text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase">Echelon Research Division // Personnel</span>
        </div>
        <h1 className="text-white text-8xl font-bold tracking-tighter leading-none mb-8 uppercase italic">Innovation Team</h1>
        <p className="text-white/30 max-w-xl mx-auto text-sm font-light leading-relaxed tracking-wide uppercase">
          A multi-disciplinary collective of designers, engineers, and visionaries bridging the gap between digital simulation and material reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.id} className="group bg-black border border-white/10 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-500">
            <div className="relative aspect-[4/5] overflow-hidden">
               <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>
               <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-[9px] text-white/40 font-mono tracking-widest uppercase mb-1 block">USER_ID: {member.id}</span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">{member.name}</h3>
               </div>
            </div>
            <div className="p-8 border-t border-white/10 flex-1 flex flex-col justify-between bg-zinc-950">
               <div>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{member.role}</p>
                  <p className="text-white/40 text-xs font-light leading-relaxed mb-6 uppercase tracking-wider">{member.bio}</p>
               </div>
               <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                     <span className="material-symbols-outlined text-white/20 hover:text-primary cursor-pointer transition-colors text-lg">share</span>
                     <span className="material-symbols-outlined text-white/20 hover:text-primary cursor-pointer transition-colors text-lg">terminal</span>
                  </div>
                  <span className="flex items-center gap-2 text-[9px] text-white/30 font-mono">
                     <span className="size-1 bg-green-500 animate-pulse rounded-full"></span>
                     SYSTEM: ACTIVE
                  </span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
