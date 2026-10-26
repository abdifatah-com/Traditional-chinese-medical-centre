import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, MessageSquare, ArrowRight, Award, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/20 pt-30 md:pt-48 pb-20 md:pb-28 overflow-hidden">

      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial-gradient from-teal-200/20 to-transparent pointer-events-none rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-radial-gradient from-brand-gold/15 to-transparent pointer-events-none rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Editorial Hero Details */}
          <div className="lg:col-span-6 space-y-8 text-left">

            {/* Elegant Luxury Badge Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-gold/15 to-brand-gold/5 border border-brand-gold/30 px-5 py-2.5 rounded-full shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold-dark font-display">
                TRADITIONAL CHINESE MEDICAL CENTER (TCMC)
              </span>
            </motion.div>

            {/* Headline Hierarchy */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="text-[38px] leading-[1.1] sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-blue font-serif"
              >
                Promoting Traditional <br className="hidden sm:inline" />
                Chinese Medicine. <br className="hidden sm:inline" />
                <span className="green-text block sm:inline">Supporting Better Health.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="space-y-4 max-w-xl"
              >
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                  Bridging time-honored Chinese medical wisdom with compassionate patient care in Hargeisa. From restorative acupuncture to holistic vitality, your journey to natural healing begins here.
                </p>

                {/* Creative Feature Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-brand-navy text-[11px] font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                    <span>Acupuncture Therapy</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-brand-navy text-[11px] font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    <span>Patient-Centered Care</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-brand-navy text-[11px] font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                    <span>Global Medical Exchange</span>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#contact"
                className="luxury-hover-effect inline-flex items-center justify-center space-x-2 px-8 py-4.5 rounded-full text-white font-black uppercase tracking-wider shadow-xl teal-gradient-bg hover:scale-103 transition-transform text-sm"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/252638888131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4.5 rounded-full bg-white border border-slate-200 text-brand-navy font-black uppercase tracking-wider shadow-md hover:bg-slate-50 transition-all hover:scale-103 text-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                <span>WhatsApp Consult</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6"
            >
              <div className="flex items-start space-x-2.5">
                <div className="p-2 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mt-0.5 shadow-sm text-amber-500">
                  <Star className="w-5 h-5 fill-amber-500" />
                </div>
                <div>
                  <span className="block text-2xl font-black text-brand-blue leading-none">4.9★</span>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Patient Trust</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="p-2 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mt-0.5 shadow-sm text-brand-teal">
                  <Heart className="w-5 h-5 fill-brand-teal/20" />
                </div>
                <div>
                  <span className="block text-2xl font-black text-brand-blue leading-none">TCM</span>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Acupuncture Care</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5 shadow-sm text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-2xl font-black text-brand-blue leading-none">Global</span>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Cooperation</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right: Asymmetric Layered Collage Layout */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg">

              {/* Back Gold Border Panel Frame */}
              <div className="absolute -inset-4 border-2 border-brand-gold/40 rounded-3xl transform rotate-3 pointer-events-none -z-10"></div>

              {/* Main Image Grid Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[5/4] sm:aspect-auto sm:h-[480px] w-full"
              >
                <img
                  src="/images/hero1.jpg"
                  alt="Traditional Chinese Medical Center (TCMC)"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('teal-gradient-bg', 'flex', 'items-center', 'justify-center');
                  }}
                />
              </motion.div>

              {/* Floating Success Counter Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="absolute -top-6 -right-6 glassmorphism p-5 rounded-2xl shadow-2xl border border-brand-gold/30 flex items-center space-x-3.5 max-w-[240px] animate-float-slow"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-brand-teal shadow-inner">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-black text-brand-blue leading-none">Hargeisa</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Somalia • Horn of Africa</p>
                </div>
              </motion.div>

              {/* Floating Clinical Trust Tag */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl shadow-xl flex items-center space-x-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="text-xs font-black uppercase tracking-wider text-brand-navy">
                  WhatsApp: +252 63 88 88 131
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
