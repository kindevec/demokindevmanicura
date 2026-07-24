import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Star, Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#F7EFE9] to-[#FAF5F0]">
      {/* Decorative Pastel & Gold Ambient Blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & High Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full gold-badge shadow-xs text-xs font-semibold text-[#4A3E3D]">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold">{SALON_INFO.rating}</span>
              <span className="text-rose-400">•</span>
              <span>+{SALON_INFO.reviewsCount} Clientas Felices</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#2D2424] leading-[1.15] tracking-tight">
              El Arte de la <span className="gold-shimmer">Elegancia</span> & Salud en tus Uñas
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A4A49] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experiencia de manicura rusa y extensiones de gel de alta gama en un ambiente de spa exclusivo. <strong className="font-semibold text-[#3A2E2D]">Garantía de retención impecable por 21 días.</strong>
            </p>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#4A3E3D] pt-2">
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-rose-100 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Herramientas Autoclave 100% Esterilizadas
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-rose-100 shadow-xs">
                <Heart className="w-4 h-4 text-rose-500" />
                Productos Veganos & 10-Free
              </span>
              <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-rose-100 shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Bar de Café & Mimosa de Cortesía 🥂
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D8959B] via-[#E8B4B8] to-[#C5A059] text-white px-8 py-4 rounded-full text-base font-semibold shadow-xl shadow-rose-200/80 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Reservar Cita en Línea</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#3A2E2D] border border-rose-200 px-6 py-4 rounded-full text-base font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <span>Ver Servicios & Precios</span>
              </a>
            </div>

            {/* Realtime Availability Note */}
            <p className="text-xs text-rose-600/90 font-medium flex items-center justify-center lg:justify-start gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Turnos disponibles para esta semana • Reserva inmediata sin comisiones
            </p>
          </motion.div>

          {/* Right Column: Visual Frame Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Card Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-rose-200 via-amber-200 to-rose-300 rounded-[2.5rem] blur-xl opacity-70 animate-pulse"></div>

              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80"
                  alt="Manicura de lujo en Velvet Rose Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Glassmorphism Floating Overlay Badge Top */}
                <div className="absolute top-4 left-4 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-white/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2D2424]">Efecto Glazed & Nude</p>
                    <p className="text-[10px] text-rose-600 font-semibold">Tendencia Top 2026</p>
                  </div>
                </div>

                {/* Glassmorphism Floating Overlay Badge Bottom */}
                <div className="absolute bottom-4 right-4 glass-panel px-4 py-3 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Cliente"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                      alt="Cliente"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-[11px] font-bold text-[#2D2424]">"Incomparable calidad"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
