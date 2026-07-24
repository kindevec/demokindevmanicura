import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Image as ImageIcon, Calendar, Share2 } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'inicio' | 'servicios' | 'reserva' | 'galeria' | 'redes'>('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const serviciosEl = document.getElementById('servicios');
      const galeriaEl = document.getElementById('galeria');
      const redesEl = document.getElementById('redes');

      if (redesEl && scrollPos >= redesEl.offsetTop) {
        setActiveTab('redes');
      } else if (galeriaEl && scrollPos >= galeriaEl.offsetTop) {
        setActiveTab('galeria');
      } else if (serviciosEl && scrollPos >= serviciosEl.offsetTop) {
        setActiveTab('servicios');
      } else {
        setActiveTab('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-bottom-nav px-2 sm:px-4 py-1.5 transition-all pb-safe">
      <div className="max-w-md mx-auto flex items-center justify-between relative">
        {/* 1. Inicio */}
        <a
          href="#hero"
          onClick={() => setActiveTab('inicio')}
          className={`flex flex-col items-center justify-center w-[20%] py-1 text-[10px] sm:text-xs font-medium transition-colors ${
            activeTab === 'inicio'
              ? 'text-rose-600 font-semibold'
              : 'text-[#6E5A58] hover:text-rose-500'
          }`}
        >
          <Home className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 ${activeTab === 'inicio' ? 'stroke-[2.5px]' : ''}`} />
          <span>Inicio</span>
        </a>

        {/* 2. Servicios */}
        <a
          href="#servicios"
          onClick={() => setActiveTab('servicios')}
          className={`flex flex-col items-center justify-center w-[20%] py-1 text-[10px] sm:text-xs font-medium transition-colors ${
            activeTab === 'servicios'
              ? 'text-rose-600 font-semibold'
              : 'text-[#6E5A58] hover:text-rose-500'
          }`}
        >
          <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 ${activeTab === 'servicios' ? 'stroke-[2.5px]' : ''}`} />
          <span>Servicios</span>
        </a>

        {/* 3. Reserva - DESTACADO EN CÍRCULO FLOTANTE */}
        <div className="relative -top-6 flex flex-col items-center justify-center z-10 w-[20%]">
          <button
            onClick={() => {
              setActiveTab('reserva');
              onOpenBooking();
            }}
            className="cursor-pointer group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#D8959B] via-[#E8B4B8] to-[#C5A059] text-white shadow-xl shadow-rose-300/60 ring-4 ring-white/90 active:scale-90 transition-all duration-200"
            aria-label="Reservar cita"
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
            </span>
          </button>
          <span className="text-[10px] font-bold text-rose-700 mt-1 tracking-tight">
            Reserva
          </span>
        </div>

        {/* 4. Galería */}
        <a
          href="#galeria"
          onClick={() => setActiveTab('galeria')}
          className={`flex flex-col items-center justify-center w-[20%] py-1 text-[10px] sm:text-xs font-medium transition-colors ${
            activeTab === 'galeria'
              ? 'text-rose-600 font-semibold'
              : 'text-[#6E5A58] hover:text-rose-500'
          }`}
        >
          <ImageIcon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 ${activeTab === 'galeria' ? 'stroke-[2.5px]' : ''}`} />
          <span>Galería</span>
        </a>

        {/* 5. Redes */}
        <a
          href="#redes"
          onClick={() => setActiveTab('redes')}
          className={`flex flex-col items-center justify-center w-[20%] py-1 text-[10px] sm:text-xs font-medium transition-colors ${
            activeTab === 'redes'
              ? 'text-rose-600 font-semibold'
              : 'text-[#6E5A58] hover:text-rose-500'
          }`}
        >
          <Share2 className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 ${activeTab === 'redes' ? 'stroke-[2.5px]' : ''}`} />
          <span>Redes</span>
        </a>
      </div>
    </div>
  );
};
