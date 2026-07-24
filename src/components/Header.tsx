import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Phone, Instagram, Clock, MapPin, Menu, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Redes', href: '#redes' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#3A2E2D] text-rose-100 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              {SALON_INFO.hours}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              {SALON_INFO.address}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hola%20Velvet%20Rose,%20quisiera%20consultar%20por%20un%20turno`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{SALON_INFO.phone}</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-amber-300" />
              <span>{SALON_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-md py-3'
            : 'bg-white/40 backdrop-blur-md py-4 border-b border-rose-100/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-200 via-amber-100 to-rose-300 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#FAF5F0] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl font-bold tracking-wide text-[#3A2E2D] block leading-none">
                Velvet Rose
              </span>
              <span className="text-[10px] tracking-widest text-rose-500 uppercase font-semibold block mt-0.5">
                Nails & Beauty Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#4A3E3D]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-rose-500 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="cursor-pointer relative inline-flex items-center gap-2 bg-gradient-to-r from-[#D8959B] via-[#E8B4B8] to-[#C5A059] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-95 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Reservar Cita</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
