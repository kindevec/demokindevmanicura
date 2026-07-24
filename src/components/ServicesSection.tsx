import React, { useState } from 'react';
import { SERVICES } from '../data/salonData';
import { Service } from '../types';
import { Clock, CheckCircle2, Sparkles, Calendar, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'manicura', label: 'Manicura Rusa' },
    { id: 'gelx', label: 'Soft Gel (GelX)' },
    { id: 'kapping', label: 'Kapping Gel' },
    { id: 'pedicura', label: 'Pedicura Spa' },
    { id: 'acrilicas', label: 'Acrílicas Esculpidas' },
    { id: 'nailart', label: 'Nail Art' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="servicios" className="py-20 bg-[#FAF5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100/70 border border-rose-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Menú de Experiencias
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#2D2424]">
            Nuestros Servicios & Precios
          </h2>
          <p className="text-base text-[#5A4A49] font-normal">
            Transparencia total en precios. Cada servicio incluye atención personalizada, bebida de bienvenida y productos de alta gama sin químicos agresivos.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#3A2E2D] text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-[#4A3E3D] border border-rose-100/80 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: Service, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-2xl overflow-hidden border border-rose-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Más Solicitado
                </div>
              )}

              {/* Card Image Header */}
              <div className="relative h-52 overflow-hidden bg-rose-50">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Price and Duration Badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="bg-[#2D2424]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-base font-bold shadow-md text-amber-300 border border-amber-300/30">
                    {service.formattedPrice}
                  </span>
                  <span className="bg-white/90 backdrop-blur-md text-[#3A2E2D] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    {service.durationMinutes} min
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#2D2424] mb-2 group-hover:text-rose-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#5A4A49] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Included features list */}
                  <div className="space-y-2 pt-2 border-t border-rose-100/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4A3E3D]">
                      Incluye este tratamiento:
                    </p>
                    <ul className="space-y-1.5">
                      {service.includes.map((item, i) => (
                        <li key={i} className="text-xs text-[#5A4A49] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-rose-100">
                  <button
                    onClick={() => onSelectServiceToBook(service.id)}
                    className="cursor-pointer w-full bg-gradient-to-r from-rose-400 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-600 text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reservar este Servicio</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Extra Addons Banner */}
        <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-amber-200/60 shadow-lg bg-gradient-to-r from-[#FDFBF7] via-white to-[#FAF5F0]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
                <Tag className="w-3.5 h-3.5" />
                Complementos & Extras
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#2D2424]">
                ¿Quieres agregar Nail Art 3D o Efecto Glazed?
              </h3>
              <p className="text-sm text-[#5A4A49]">
                Puedes sumar efectos cromo, cristales Swarovski originales, hidratación de parafina o retiro previo directamente durante la confirmación de tu cita.
              </p>
            </div>
            <button
              onClick={() => onSelectServiceToBook('russe-semi')}
              className="cursor-pointer whitespace-nowrap bg-[#3A2E2D] hover:bg-[#2D2424] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all self-start md:self-center"
            >
              Ver todos los extras al agendar
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
