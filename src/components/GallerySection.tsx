import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { Heart, Sparkles, Eye, X, ChevronLeft, ChevronRight, Calendar, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GallerySectionProps {
  onSelectDesignForBooking: (designTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectDesignForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});
  const [userLikedMap, setUserLikedMap] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'milky', label: 'Milky Nails' },
    { id: 'glazed', label: 'Glazed Donut' },
    { id: 'french', label: 'French Moderno' },
    { id: 'nailart3d', label: 'Nail Art 3D' },
    { id: 'minimal', label: 'Minimal Nude' },
    { id: 'stiletto', label: 'Stiletto / Almond' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleToggleLike = (itemId: string, initialLikes: number) => {
    const isLiked = userLikedMap[itemId];
    setUserLikedMap((prev) => ({ ...prev, [itemId]: !isLiked }));
    setLikesMap((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] ?? initialLikes) + (isLiked ? -1 : 1),
    }));
  };

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handlePrevItem = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex(
      selectedItemIndex === 0 ? filteredItems.length - 1 : selectedItemIndex - 1
    );
  };

  const handleNextItem = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex(
      selectedItemIndex === filteredItems.length - 1 ? 0 : selectedItemIndex + 1
    );
  };

  return (
    <section id="galeria" className="py-20 bg-[#F7EFE9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100 border border-rose-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Inspiración & Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#2D2424]">
            Galería de Diseños Exclusivos
          </h2>
          <p className="text-base text-[#5A4A49]">
            Explora nuestros trabajos reales realizados en nuestro salón. Haz clic en cualquiera de las imágenes para abrir el visor interactivo y solicitar ese diseño en tu próxima reserva.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#3A2E2D] text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-[#4A3E3D] border border-rose-100 shadow-2xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, idx: number) => {
            const currentLikes = likesMap[item.id] ?? item.likes;
            const isLiked = userLikedMap[item.id] ?? false;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl border border-white transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItemIndex(idx)}
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                    
                    {/* Top Tag & Like Button */}
                    <div className="flex items-center justify-between">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-rose-100 border border-white/30">
                        {item.categoryLabel}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleLike(item.id, item.likes);
                        }}
                        className="p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-colors flex items-center gap-1 text-xs"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                        <span>{currentLikes}</span>
                      </button>
                    </div>

                    {/* Bottom Details & Eye Icon */}
                    <div className="space-y-1">
                      <h4 className="text-xl font-serif-luxury font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-rose-200 font-medium">
                        Por {item.artist} • {item.technique}
                      </p>
                      <div className="pt-2 flex items-center text-xs font-semibold text-amber-300 gap-1.5">
                        <Eye className="w-4 h-4" />
                        <span>Ver en tamaño completo</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Always visible footer bar */}
                <div className="p-4 bg-white flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#3A2E2D]">{item.title}</h4>
                    <p className="text-xs text-rose-500">{item.categoryLabel}</p>
                  </div>
                  <span className="text-xs text-[#7A6968] font-medium flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-100" />
                    {currentLikes}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            {/* Close Modal Overlay Backdrop */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedItemIndex(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 bg-[#FAF5F0] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-rose-100 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev & Next Floating Arrow Buttons */}
              <button
                onClick={handlePrevItem}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                aria-label="Diseño anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextItem}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
                aria-label="Diseño siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Left Column: Image Display */}
              <div className="md:col-span-7 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[480px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>

              {/* Right Column: Details & Booking Action */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full">
                      {selectedItem.categoryLabel}
                    </span>
                    <button
                      onClick={() => handleToggleLike(selectedItem.id, selectedItem.likes)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#4A3E3D] hover:text-rose-600 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          userLikedMap[selectedItem.id]
                            ? 'fill-rose-500 text-rose-500'
                            : 'text-[#7A6968]'
                        }`}
                      />
                      <span>{likesMap[selectedItem.id] ?? selectedItem.likes} Me gusta</span>
                    </button>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#2D2424]">
                    {selectedItem.title}
                  </h3>

                  <p className="text-sm text-[#5A4A49] leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-rose-200/60 text-xs">
                    <div className="flex justify-between py-1 border-b border-rose-100">
                      <span className="text-[#7A6968] font-medium">Técnica:</span>
                      <span className="font-bold text-[#2D2424]">{selectedItem.technique}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-rose-100">
                      <span className="text-[#7A6968] font-medium">Especialista:</span>
                      <span className="font-bold text-[#2D2424]">{selectedItem.artist}</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA button to select this design for booking */}
                <div className="pt-4 border-t border-rose-200">
                  <button
                    onClick={() => {
                      onSelectDesignForBooking(selectedItem.title);
                      setSelectedItemIndex(null);
                    }}
                    className="cursor-pointer w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3.5 rounded-2xl font-semibold text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Quiero este diseño para mi cita</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
