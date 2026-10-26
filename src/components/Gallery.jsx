import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    {
      id: 1,
      category: 'clinic',
      image: '/images/shop.png',
      title: 'Traditional Medical Center Reception & Lounge',
      tag: 'Clinic Reception'
    },
    {
      id: 2,
      category: 'acupuncture',
      image: '/images/1.png',
      title: 'Specialized Acupuncture Treatment Suite',
      tag: 'Acupuncture Care'
    },
    {
      id: 3,
      category: 'acupuncture',
      image: '/images/2.png',
      title: 'Sterile Needles & Moxibustion Setup',
      tag: 'Therapeutic Protocol'
    },
    {
      id: 4,
      category: 'herbal',
      image: '/images/3.png',
      title: 'Personalized Chinese Botanical Formulations',
      tag: 'Herbal Medicine'
    },
    {
      id: 5,
      category: 'acupuncture',
      image: '/images/4.png',
      title: 'Cupping Therapy (Hijama) & Acupressure Session',
      tag: 'Hijama & Massage'
    },
    {
      id: 6,
      category: 'clinic',
      image: '/images/hero.png',
      title: 'Private Therapeutic Consultation Suite',
      tag: 'Consultation Suite'
    }
  ];

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.category === filter);

  const categories = [
    { key: 'all', label: 'All Gallery' },
    { key: 'clinic', label: 'Clinic Facilities' },
    { key: 'acupuncture', label: 'Acupuncture & Therapy' },
    { key: 'herbal', label: 'Herbal & Holistic Care' }
  ];

  return (
    <section id="gallery" className="py-12 md:py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Facility & Practice
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight font-serif">
            Our Clinic <span className="green-text">& Therapeutic Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
            Explore our serene clinical suites, acupuncture therapy rooms, organic herbal preparation facilities, and cupping setups in Hargeisa. Click any image to view details.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider border transition-all duration-300 ${filter === cat.key
                ? 'bg-brand-navy border-brand-navy text-white shadow-lg scale-105'
                : 'bg-white border-slate-200 text-brand-navy hover:bg-slate-50'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="relative rounded-[32px] overflow-hidden shadow-md border border-slate-200/40 group aspect-[4/3] bg-slate-50 cursor-zoom-in"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('blue-gradient-bg', 'flex', 'items-center', 'justify-center');
                  }}
                />

                {/* Overlap detail block */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8 text-left">

                  {/* Top expand tag */}
                  <div className="self-end w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Details */}
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-brand-gold-light bg-brand-navy/80 px-3 py-1 rounded-full w-fit mb-2 block">
                      {item.tag}
                    </span>
                    <h4 className="text-lg font-black text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Popout Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-brand-navy border border-white/10 shadow-2xl flex flex-col"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="bg-brand-blue p-6 text-left text-white border-t border-white/5">
                <span className="text-[9px] font-black uppercase tracking-wider text-brand-gold">
                  {selectedImage.tag}
                </span>
                <h4 className="text-xl font-black font-serif mt-1">
                  {selectedImage.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
