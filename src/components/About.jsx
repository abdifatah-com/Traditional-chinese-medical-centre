import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Compass,
  Eye,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats = [
    { value: '100%', label: 'Patient-Centered Care' },
    { value: 'TCM', label: 'Acupuncture & Therapy' },
    { value: 'Global', label: 'Partnerships & Exchange' }
  ];

  const cards = [
    {
      id: 1,
      tag: 'Institutional Identity',
      title: 'Who We Are',
      icon: <Compass className="w-5 h-5 text-white" />,
      badgeColor: 'bg-teal-50 text-brand-teal border-teal-200',
      gradient: 'teal-gradient-bg',
      paragraphs: [
        'Traditional Chinese Medical Center (TCMC) is a healthcare institution dedicated primarily to the practice, promotion, and development of Traditional Chinese Medicine (TCM).',
        'Our center is committed to making traditional Chinese medical practices more accessible to the local community while promoting the exchange of medical knowledge, professional expertise, and healthcare experience.',
        'TCMC focuses on Traditional Chinese Medicine as its core area of practice, with particular emphasis on acupuncture and other appropriate traditional therapeutic approaches. We aim to bridge traditional Chinese medical knowledge with local healthcare needs through responsible clinical practice, patient education, and professional development.',
        'We recognize the important role that Traditional Chinese Medicine plays in healthcare systems worldwide and believe that international cooperation can contribute to the responsible development and wider understanding of these traditional medical practices.'
      ],
      highlight: 'Accessible care • Acupuncture focus • Medical knowledge exchange'
    },
    {
      id: 2,
      tag: 'Purpose & Commitment',
      title: 'Our Mission',
      icon: <Target className="w-5 h-5 text-white" />,
      badgeColor: 'bg-blue-50 text-brand-blue border-blue-200',
      gradient: 'blue-gradient-bg',
      paragraphs: [
        'Our mission is to promote and provide Traditional Chinese Medicine services, expand public awareness of TCM, and establish meaningful partnerships with Chinese medical institutions, universities, professional associations, research organizations, and relevant government agencies.',
        'Through professional cooperation, knowledge exchange, and continuous learning, we seek to contribute to the development of traditional Chinese medical practice and its responsible application in our local healthcare environment.',
        'We are dedicated to patient-centered care, patient safety, and cultivating a transparent clinical environment that empowers individuals across Hargeisa and the Horn of Africa to achieve balanced health.'
      ],
      highlight: 'Global partnerships • Continuous training • Public awareness'
    },
    {
      id: 3,
      tag: 'Future Outlook',
      title: 'Our Vision',
      icon: <Eye className="w-5 h-5 text-white" />,
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      gradient: 'bg-gradient-to-r from-brand-gold to-amber-600',
      paragraphs: [
        'To be recognized as a premier center of excellence for Traditional Chinese Medicine and acupuncture therapy in Hargeisa and the Horn of Africa.',
        'We envision a collaborative healthcare ecosystem where time-honored traditional practices complement modern wellness needs, fostering mutual understanding and clinical innovation between China and Africa.',
        'Through lasting institutional linkages, continuous professional exchange, and community health education, we aim to establish benchmarks in patient trust, therapeutic efficacy, and compassionate care.'
      ],
      highlight: 'International cooperation • Responsible practice • Regional trust'
    },
    {
      id: 4,
      tag: 'Pillars of Practice',
      title: 'Core Commitments',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      gradient: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      paragraphs: [
        '• Responsible Clinical Practice: Adhering to strict traditional guidelines, sterile single-use needle standards, and clinical ethics in every therapeutic approach.',
        '• Community Accessibility: Making traditional Chinese medical practices accessible to the local community through empathetic care and patient education.',
        '• International Cooperation: Establishing meaningful partnerships with Chinese medical institutions, universities, and research organizations worldwide.',
        '• Continuous Learning & Training: Promoting professional development, knowledge exchange, and healthcare experience to bridge TCM with local needs.'
      ],
      highlight: 'Patient Safety • Hygiene Standards • Professional Cooperation'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-white overflow-hidden relative text-left">

      {/* Background Subtle Blurs */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Institutional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight font-serif">
            Who We Are, <span className="green-text">Mission & Vision</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
            Swipe through the interactive cards below to explore our identity, mission, vision, and core commitments.
          </p>

          {/* Swipe Indicator Pill */}
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-full shadow-xs">
            <Layers className="w-3.5 h-3.5 text-brand-teal" />
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
              Swipe Left / Right • Card {currentIndex + 1} of {cards.length}
            </span>
          </div>
        </div>

        {/* Poker Card Deck Container */}
        <div className="relative max-w-2xl mx-auto h-[480px] sm:h-[430px] flex items-center justify-center my-6 select-none">
          {cards.map((card, index) => {
            const total = cards.length;
            const diff = (index - currentIndex + total) % total;

            // Render top 3 stacked cards
            if (diff > 2 && diff < total - 1) return null;

            const isTop = diff === 0;
            const isSecond = diff === 1;
            const isThird = diff === 2;

            let scale = 1;
            let translateY = 0;
            let rotate = 0;
            let opacity = 1;
            let zIndex = 10;

            if (isSecond) {
              scale = 0.94;
              translateY = 16;
              rotate = 3;
              opacity = 0.85;
              zIndex = 8;
            } else if (isThird) {
              scale = 0.88;
              translateY = 32;
              rotate = -3;
              opacity = 0.65;
              zIndex = 6;
            } else if (!isTop) {
              opacity = 0;
              scale = 0.8;
              zIndex = 1;
            }

            return (
              <motion.div
                key={card.id}
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
                className={`absolute w-full h-full bg-white border border-slate-200/90 p-6 sm:p-8 rounded-[32px] shadow-2xl flex flex-col justify-between cursor-grab active:cursor-grabbing ${isTop ? 'border-brand-teal/40 ring-1 ring-brand-teal/20' : ''
                  }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-11 h-11 rounded-2xl ${card.gradient} flex items-center justify-center shadow-md`}>
                        {card.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold block">
                          {card.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-brand-navy font-serif leading-none mt-0.5">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-black text-slate-300 font-display">
                      0{card.id} / 0{cards.length}
                    </span>
                  </div>

                  {/* Card Body Content */}
                  <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-h-[260px] sm:max-h-[230px] overflow-y-auto pr-1">
                    {card.paragraphs.map((p, idx) => (
                      <p key={idx} className={idx === 0 ? 'text-slate-800 font-semibold' : ''}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Highlight */}
                <div className="border-t border-slate-100 pt-3.5 mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[11px] font-bold text-brand-teal">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{card.highlight}</span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 shrink-0">
                    Drag ↔
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Poker Deck Controls & Dots */}
        <div className="flex items-center justify-center space-x-6 mt-6 mb-16">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal shadow-md transition-all active:scale-95"
            aria-label="Previous Card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${currentIndex === idx
                    ? 'w-7 h-2.5 bg-brand-teal'
                    : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal shadow-md transition-all active:scale-95"
            aria-label="Next Card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Showcase: Photo & Stats Summary */}
        <div className="bg-slate-50 border border-slate-200/70 p-6 sm:p-8 rounded-[36px] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
                <img
                  src="/images/shop.png"
                  alt="Traditional Chinese Medical Center Reception"
                  className="w-full h-[240px] sm:h-[260px] object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('blue-gradient-bg', 'flex', 'items-center', 'justify-center');
                  }}
                />
              </div>
            </div>

            {/* Right Information & Stats */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-brand-teal">
                  Healthcare Center In Hargeisa
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy font-serif">
                  Bridging Traditional Chinese Wisdom with Local Healthcare Needs
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                  TCMC provides safe, ethical clinical practice, continuous patient education, and builds relationships with Chinese medical institutions and international organizations.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-1 border-r border-slate-100 last:border-0">
                    <span className="block text-lg sm:text-xl font-black text-brand-teal font-display">
                      {stat.value}
                    </span>
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Consultation CTA Link */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-black text-brand-teal hover:text-brand-gold-dark uppercase tracking-wider transition-colors group"
                >
                  <span>Schedule an appointment or visit our center</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
