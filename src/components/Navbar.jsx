import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, MapPin, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 px-0 pt-0 md:px-4 md:pt-6">
      <nav className={`w-full max-w-7xl transition-all duration-500 ${scrolled
        ? 'glassmorphism shadow-2xl py-3 px-4 md:px-8 border-b border-slate-200/80 md:border md:border-brand-gold/20 backdrop-blur-xl max-w-6xl rounded-none md:rounded-full'
        : 'bg-white md:bg-white/10 md:backdrop-blur-sm py-4 px-4 md:px-10 border-b border-slate-200/80 md:border md:border-slate-100/10 rounded-none md:rounded-full'
        }`}>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 group-hover:scale-105 transition-transform duration-500 overflow-hidden p-0.5">
              <img
                src="/images/logo1.jpg"
                className="w-full h-full object-contain"
                alt="TCMC Logo"
                onError={(e) => { e.target.src = '/images/logo.png'; }}
              />
            </div>
            <div className="text-left font-display">
              <span className="block text-lg md:text-xl font-black tracking-tight text-brand-navy group-hover:text-brand-teal transition-colors">
                TCMC
              </span>
              <span className="block text-[8px] font-bold tracking-widest text-brand-gold-dark uppercase -mt-1">
                Traditional Chinese Medical Center
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-extrabold text-brand-navy hover:text-brand-teal transition-all duration-300 relative group py-1.5 uppercase tracking-wider whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA Button *}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/252638888131"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-hover-effect inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-white text-xs font-black uppercase tracking-wider shadow-md teal-gradient-bg hover:scale-105 active:scale-95 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-md lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">

                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm overflow-hidden p-0.5">
                      <img src="/images/logo1.jpg" className="w-full h-full object-contain" alt="TCMC Logo" onError={(e) => { e.target.src = '/images/logo.png'; }} />
                    </div>
                    <div className="text-left font-display">
                      <span className="block text-base font-black text-brand-navy tracking-tight uppercase">
                        TCMC
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-black text-brand-navy hover:text-brand-teal transition-colors py-2 border-b border-slate-50 uppercase tracking-wider text-left"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

              </div>

              {/* Drawer Bottom Info */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="space-y-3.5">
                  <a
                    href="https://wa.me/252638888131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-brand-navy font-bold text-xs uppercase tracking-wider"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                      <MessageSquare className="w-4 h-4 fill-emerald-500/10" />
                    </div>
                    <span>WhatsApp: +252 63 88 88 131</span>
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3 text-slate-500 text-left">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold leading-relaxed">
                    Hargeisa, Somalia Horn of Africa
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
