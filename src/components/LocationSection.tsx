import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Sparkles, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-[#F7EFE9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100 border border-rose-200">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            Ubicación & Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2D2424]">
            Visítanos en Nuestro Estudio
          </h2>
          <p className="text-sm text-[#5A4A49]">
            Un ambiente pensado exclusivamente para tu descanso y confort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Information Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-rose-100 pb-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#2D2424]">Velvet Rose Studio</h3>
                  <p className="text-xs text-rose-600 font-semibold uppercase tracking-wider">Beauty Bar & Nail Care</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#4A3E3D]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#2D2424]">Dirección:</p>
                    <p>{SALON_INFO.address}</p>
                    <p className="text-xs text-[#7A6968] mt-0.5">Estacionamiento privado reservado para clientas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#2D2424]">Horario de Atención:</p>
                    <p>{SALON_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#2D2424]">Teléfono & WhatsApp:</p>
                    <p>{SALON_INFO.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hola%20Velvet%20Rose,%20quisiera%20consultar%20por%20un%20turno`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all mt-4"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Contactar por WhatsApp Directo</span>
            </a>
          </div>

          {/* Right Column: Visual Map Representation Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden border border-rose-100 shadow-xl relative min-h-[320px] flex flex-col">
            <div className="relative w-full h-full min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Fachada del estudio Velvet Rose"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl border border-white/60 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-amber-300" />
                  <p className="font-bold text-lg text-white font-serif-luxury">¿Cómo llegar?</p>
                </div>
                <p className="text-xs text-rose-100 leading-relaxed">
                  Ubicados en el corazón de la ciudad. A 2 minutos del metro. Contamos con acceso accesible y recepción climatizada.
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SALON_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:underline pt-1"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
