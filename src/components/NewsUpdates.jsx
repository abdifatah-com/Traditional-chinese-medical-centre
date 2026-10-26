import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Calendar, ChevronRight, Sparkles, X, ShieldAlert, Cpu, Award, ArrowRight } from 'lucide-react';

export default function NewsUpdates({ onViewMore }) {
  const [activeNews, setActiveNews] = useState(null);

  const newsItems = [
    {
      id: 1,
      category: 'Therapeutic Expansion',
      badgeColor: 'bg-teal-50 text-brand-teal border-teal-200',
      icon: <Cpu className="w-4 h-4 text-brand-teal" />,
      date: 'October 05, 2026',
      title: 'Expanded Acupuncture & Moxibustion Suite in Hargeisa',
      summary: 'Traditional Chinese Medical Center enhances patient capacity for specialized acupuncture and thermal moxibustion therapy.',
      content: `We are pleased to announce the opening of our upgraded therapeutic suite in Hargeisa, Somalia Horn of Africa. Designed for optimal peace of mind and sterile relaxation, our dedicated treatment rooms feature ergonomic consultation layouts for painless needle therapy, specialized cupping sessions, and individual herbal consultations.`,
      image: '/images/acupuncture.png',
      tag: 'New Facility'
    },
    {
      id: 2,
      category: 'Clinic Announcement',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: <Award className="w-4 h-4 text-amber-600" />,
      date: 'September 22, 2026',
      title: 'Direct WhatsApp Booking Channel Introduced (+252 63 88 88 131)',
      summary: 'Patients across Hargeisa and Somalia Horn of Africa can now schedule consultations instantly via our official WhatsApp channel.',
      content: `To ensure seamless communication and immediate care coordination, visitors can now contact our clinical reception team directly on WhatsApp (+252 63 88 88 131). Get instant responses regarding session availability, traditional treatment preparation, and consultation advice.`,
      image: '/images/shop.png',
      tag: 'Digital Channel'
    },
    {
      id: 3,
      category: 'Community Wellness',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: <ShieldAlert className="w-4 h-4 text-emerald-600" />,
      date: 'August 14, 2026',
      title: 'Holistic Health & Pain Management Awareness Drive',
      summary: 'Offering personalized pulse assessments and educational consultations on natural pain relief and wellness.',
      content: `As part of our commitment to public health in Somalia and the Horn of Africa, Traditional Chinese Medical Center is hosting weekly wellness guidance sessions. Learn how acupuncture, herbal remedies, and cupping therapy can alleviate chronic back pain, joint stiffness, and stress naturally.`,
      image: '/images/cupping.png',
      tag: 'Community'
    }
  ];

  return (
    <section id="news" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5" />
            <span>Latest Clinic Updates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight font-serif">
            News & <span className="green-text">Updates</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
            Stay updated with our therapeutic advancements, community health drives, and patient care services in Hargeisa.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* News Image / Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('teal-gradient-bg', 'flex', 'items-center', 'justify-center');
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm ${item.badgeColor}`}>
                      {item.icon}
                      <span>{item.category}</span>
                    </span>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-brand-navy group-hover:text-brand-teal transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveNews(item)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal text-xs font-bold uppercase tracking-wider transition-all duration-300 group/btn"
                >
                  <span>Read Full Update</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              if (onViewMore) {
                onViewMore();
              } else {
                window.location.hash = '#news-page';
              }
            }}
            className="luxury-hover-effect inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-brand-teal text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
          >
            <span>View All News & Updates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveNews(null)}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 text-left"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100"
            >
              <button
                onClick={() => setActiveNews(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-brand-navy hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeNews.badgeColor}`}>
                  {activeNews.icon}
                  <span>{activeNews.category}</span>
                </span>

                <div className="flex items-center space-x-2 text-xs font-bold text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{activeNews.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-brand-navy leading-snug">
                  {activeNews.title}
                </h3>

                <div className="w-12 h-1 bg-brand-gold rounded-full"></div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium pt-2">
                  {activeNews.content}
                </p>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setActiveNews(null)}
                    className="px-6 py-2.5 rounded-full teal-gradient-bg text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
