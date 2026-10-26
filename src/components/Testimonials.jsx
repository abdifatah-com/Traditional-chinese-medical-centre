import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      text: 'I suffered from chronic lower back pain for over 2 years. After acupuncture therapy sessions at Traditional Chinese Medical Center in Hargeisa, the discomfort was alleviated significantly. Patient-centered and professional care!',
      author: 'Abdirahman Mohamed',
      role: 'Patient',
      location: 'Hargeisa, Somalia',
      rating: 5,
      date: '2 weeks ago',
      gender: 'male',
      badge: 'Verified Acupuncture Patient'
    },
    {
      id: 2,
      text: 'The TCM consultation provided a truly personalized health assessment and traditional guidance. The practitioners are polite, thorough, and highly knowledgeable. Highly recommended center!',
      author: 'Aminah Hassan',
      role: 'Patient',
      location: 'Hargeisa, Somalia',
      rating: 5,
      date: '1 month ago',
      gender: 'female',
      badge: 'Verified TCM Consultation'
    },
    {
      id: 3,
      text: 'Exceptional chiropractic care for my neck and upper spine stiffness. The focused alignment and gentle musculoskeletal approach brought immediate relief. Very hygienic clinical setting.',
      author: 'Faysal Ahmed',
      role: 'Patient',
      location: 'Hargeisa, Somalia',
      rating: 5,
      date: '3 weeks ago',
      gender: 'male',
      badge: 'Verified Chiropractic Care'
    },
    {
      id: 4,
      text: 'I sought pain management support for recurring migraines and tension headaches. The therapeutic treatment plan provided lasting comfort without heavy medications. Booking via WhatsApp was smooth.',
      author: 'Khadra Ibrahim',
      role: 'Patient',
      location: 'Hargeisa, Somalia',
      rating: 5,
      date: '1 week ago',
      gender: 'female',
      badge: 'Verified Pain Management'
    },
    {
      id: 5,
      text: 'Received specialized care for musculoskeletal knee and joint discomfort. The team combines ancient traditional wisdom with modern patient safety standards. A wonderful asset for our community.',
      author: 'Mahad Jama',
      role: 'Patient',
      location: 'Hargeisa, Somalia',
      rating: 5,
      date: '1 month ago',
      gender: 'male',
      badge: 'Verified Musculoskeletal Care'
    },
    {
      id: 6,
      text: 'Their health education and patient awareness sessions gave me a clear understanding of Traditional Chinese Medicine. Compassionate staff, clean facilities, and genuine care.',
      author: 'Fatima Farah',
      role: 'Patient',
      location: 'Hargeisa, Somalia',
      rating: 5,
      date: '2 days ago',
      gender: 'female',
      badge: 'Verified Health Education'
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden text-left">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight font-serif">
            Patient Stories & <span className="green-text">Reviews</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
            Swipe left or right to explore verified feedback from patients who received care at our center in Hargeisa, Somalia.
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-3 bg-white border border-slate-200/70 px-5 py-2.5 rounded-full shadow-sm mt-2">
            <span className="text-sm font-black text-brand-navy leading-none">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
              Google Verified Patient Reviews
            </span>
          </div>
        </div>

        {/* Poker Card Deck Container */}
        <div className="relative max-w-xl mx-auto h-[380px] sm:h-[360px] flex items-center justify-center my-6 select-none">
          {reviews.map((rev, index) => {
            // Compute relative position in stack ring
            const total = reviews.length;
            const diff = (index - currentIndex + total) % total;

            // Render only top 3 stacked cards for performance & clean aesthetic
            if (diff > 2 && diff < total - 1) return null;

            const isTop = diff === 0;
            const isSecond = diff === 1;
            const isThird = diff === 2;

            // Stack styling offsets
            let scale = 1;
            let translateY = 0;
            let rotate = 0;
            let opacity = 1;
            let zIndex = 10;

            if (isSecond) {
              scale = 0.94;
              translateY = 18;
              rotate = 3;
              opacity = 0.85;
              zIndex = 8;
            } else if (isThird) {
              scale = 0.88;
              translateY = 36;
              rotate = -3;
              opacity = 0.7;
              zIndex = 6;
            } else if (!isTop) {
              opacity = 0;
              scale = 0.8;
              zIndex = 1;
            }

            return (
              <motion.div
                key={rev.id}
                style={{ zIndex }}
                animate={{
                  scale,
                  y: translateY,
                  rotate,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                drag={isTop ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                className={`absolute w-full bg-white border border-slate-200/80 p-6 sm:p-8 rounded-[32px] shadow-xl flex flex-col justify-between cursor-grab active:cursor-grabbing ${isTop ? 'border-brand-teal/40 ring-1 ring-brand-teal/10' : ''
                  }`}
              >
                {/* Background Watermark */}
                <div className="absolute top-6 right-8 text-slate-100 pointer-events-none">
                  <Quote className="w-16 h-16 text-slate-100 fill-slate-100/60" />
                </div>

                <div>
                  {/* Category Badge & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center space-x-1.5 bg-teal-50 border border-teal-100 text-brand-teal px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{rev.badge}</span>
                    </span>

                    <div className="flex space-x-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>

                  {/* Review Quote */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium relative z-10 mb-6">
                    “{rev.text}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto relative z-10">
                  <div className="flex items-center space-x-3.5">
                    {/* User Avatar */}
                    <div className="w-11 h-11 rounded-full teal-gradient-bg text-white font-black text-sm flex items-center justify-center shadow-md border-2 border-white">
                      {rev.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-brand-navy leading-none">
                        {rev.author}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400">
                    {rev.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Swipe Controls & Counter */}
        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal shadow-md transition-all active:scale-95"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-brand-teal' : 'w-2.5 bg-slate-200'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal shadow-md transition-all active:scale-95"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Hint text */}
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">
          👈 Swipe card left or right to navigate reviews 👉
        </p>

      </div>
    </section>
  );
}
