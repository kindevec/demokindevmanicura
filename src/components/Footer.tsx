import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, Heart, Instagram, Phone, Clock, Calendar, Facebook, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#2D2424] text-rose-100 pt-16 pb-24 md:pb-12 border-t border-rose-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-rose-300/20 flex items-center justify-center text-amber-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold text-white tracking-wide">
                Velvet Rose
              </span>
            </div>
            <p className="text-xs text-rose-200/80 leading-relaxed max-w-sm">
              Estudio de uñas de lujo enfocado en manicura rusa, extensiones de gel y pedicura spa con productos amigables y técnicas de alta precisión.
            </p>
            <p className="text-xs text-amber-300 font-semibold flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-amber-300" />
              Garantía de Satisfacción 21 Días
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-rose-800/60 pb-1.5">
              Síguenos
            </h4>
            <div className="flex flex-col gap-3 text-rose-200/80">
              <a href={`https://instagram.com/${SALON_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-300 transition-colors w-fit">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-300 transition-colors w-fit">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a href={`https://wa.me/${SALON_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-300 transition-colors w-fit">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-rose-800/60 pb-1.5">
              Navegación
            </h4>
            <ul className="space-y-2 text-rose-200/80">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-amber-300 transition-colors">Servicios & Precios</a></li>
              <li><a href="#galeria" className="hover:text-amber-300 transition-colors">Galería de Diseños</a></li>
              <li><a href="#ubicacion" className="hover:text-amber-300 transition-colors">Ubicación & Contacto</a></li>
            </ul>
          </div>

          {/* Direct Hours & Booking Action */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs border-b border-rose-800/60 pb-1.5">
              Horario & Citas
            </h4>
            <p className="text-rose-200/80 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-300" />
              {SALON_INFO.hours}
            </p>
            <button
              onClick={onOpenBooking}
              className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-amber-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all text-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar mi Turno Ahora</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-rose-900/50 flex flex-col md:flex-row items-center justify-between text-[11px] text-rose-300/60 gap-4 text-center md:text-left">
          <p>© 2026 Velvet Rose Nails & Beauty Studio. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Desarrollado por <span className="font-semibold text-rose-200">kindev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
