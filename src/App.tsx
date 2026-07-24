import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { SALON_INFO, SERVICES } from './data/salonData';

export default function App() {
  const handleOpenBooking = (serviceId?: string, designRef?: string) => {
    let message = 'Hola Velvet Rose 🌹, quisiera consultar por un turno.';
    if (serviceId) {
      const service = SERVICES.find((s) => s.id === serviceId);
      if (service) {
        message = `Hola Velvet Rose 🌹, quisiera reservar el servicio de *${service.name}*.`;
      }
    } else if (designRef) {
      message = `Hola Velvet Rose 🌹, me encantó el diseño *${designRef}* de la galería y quisiera reservarlo para mi próxima cita.`;
    }
    const url = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#2D2424] antialiased selection:bg-rose-200 selection:text-rose-900 pb-16 md:pb-0 relative">
      {/* Top Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <ServicesSection onSelectServiceToBook={(serviceId) => handleOpenBooking(serviceId)} />
        <GallerySection onSelectDesignForBooking={(designTitle) => handleOpenBooking(undefined, designTitle)} />
        <SocialMediaSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Mobile Fixed Bottom Glassmorphism Navigation Bar */}
      <MobileBottomNav onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
