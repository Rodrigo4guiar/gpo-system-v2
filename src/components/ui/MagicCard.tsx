import React from 'react';
import { cn } from '../../lib/utils';

export const MagicCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("group relative overflow-hidden rounded-[2.5rem] p-[2px] transition-all duration-500 shadow-xl shadow-slate-200/40", className)}>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,#06b6d4,transparent,#3b82f6,transparent)] blur-xl"></div>
    </div>
    <div className="relative z-10 bg-white border-none rounded-[2.4rem] p-8 h-full transition-all group-hover:bg-white/95">
      {children}
    </div>
  </div>
);
