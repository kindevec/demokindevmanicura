import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const SocialMediaSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8 text-rose-600" />,
      desc: 'Inspírate con nuestros últimos diseños de uñas, reels diarios y tendencias.',
      handle: SALON_INFO.instagram,
      url: `https://instagram.com/${SALON_INFO.instagram.replace('@', '')}`,
      bgColor: 'bg-rose-100/80',
      borderColor: 'border-rose-200',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8 text-blue-600" />,
      desc: 'Únete a nuestra comunidad, interactúa y entérate de nuestras promociones.',
      handle: '@velvetrose.studio',
      url: '#',
      bgColor: 'bg-blue-50/80',
      borderColor: 'border-blue-200',
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
      desc: 'Atención personalizada, consultas rápidas y reservas directas.',
      handle: SALON_INFO.phone,
      url: `https://wa.me/${SALON_INFO.whatsappNumber}`,
      bgColor: 'bg-emerald-50/80',
      borderColor: 'border-emerald-200',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="redes" className="py-20 bg-[#FAF5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100 border border-rose-200">
            <Heart className="w-3.5 h-3.5 text-amber-500" />
            Nuestra Comunidad
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2D2424]">
            Conéctate en Redes Sociales
          </h2>
          <p className="text-sm text-[#5A4A49]">
            Síguenos para descubrir nuestras últimas creaciones, consejos de cuidado y promociones exclusivas.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border ${social.borderColor} hover:shadow-xl transition-all duration-300 group h-[400px] block`}
            >
              {/* Background Image */}
              <img 
                src={social.image} 
                alt={social.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark Gradient Overlay for base visibility */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Content Overlay (hidden normally, slides/fades in on hover) */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 glass-card !bg-white/85">
                <div className={`w-16 h-16 rounded-full ${social.bgColor} flex items-center justify-center mb-6 shadow-lg`}>
                  {social.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2D2424] mb-1">{social.name}</h3>
                <p className="text-sm font-bold text-amber-600 mb-4">{social.handle}</p>
                <p className="text-sm text-[#5A4A49] leading-relaxed">
                  {social.desc}
                </p>
                <span className="mt-6 inline-block text-xs font-bold text-rose-600 uppercase tracking-wider group-hover:text-rose-500 transition-colors">
                  Ir a {social.name} &rarr;
                </span>
              </div>
              
              {/* Minimal visible info when NOT hovering */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300">
                <div className="bg-white/80 p-2 rounded-full shadow-sm">
                  {React.cloneElement(social.icon, { className: "w-6 h-6" })}
                </div>
                <span className="font-bold text-white tracking-wide text-lg drop-shadow-md">
                  {social.name}
                </span>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
