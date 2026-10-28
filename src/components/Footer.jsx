import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Center', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const treatments = [
    { name: 'Acupuncture Therapy', href: '#services' },
    { name: 'TCM Consultation', href: '#services' },
    { name: 'Chiropractic Care', href: '#services' },
    { name: 'Pain Management', href: '#services' },
    { name: 'Health Education', href: '#services' },
    { name: 'International Cooperation', href: '#services' },
  ];

  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 border-t border-brand-gold/10 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">

          {/* Brand block */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden p-0.5 border border-slate-100">
                <img
                  src="/images/logo1.jpg"
                  className="w-full h-full object-contain"
                  alt="TCMC Logo"
                  onError={(e) => {
                    e.target.src = '/images/logo.png';
                  }}
                />
              </div>
              <div>
                <span className="block text-xl font-black tracking-tight text-white font-display">
                  Traditional Chinese
                </span>
                <span className="block text-[8px] font-bold tracking-widest text-brand-gold-light uppercase -mt-1">
                  Medical Center
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-semibold">
              Traditional Chinese Medical Center (TCMC) in Hargeisa, Somalia Horn of Africa. Dedicated primarily to Traditional Chinese Medicine, acupuncture, patient care, and international healthcare cooperation.
            </p>

            {/* WhatsApp Link Button */}
            <div>
              <a
                href="https://wa.me/252638888131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +252 63 88 88 131</span>
              </a>
            </div>
          </div>

          {/* Quick links list */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs sm:text-sm text-slate-450 hover:text-white transition-colors font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services list */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {treatments.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs sm:text-sm text-slate-450 hover:text-white transition-colors font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
              Our Contact Information
            </h4>
            <ul className="space-y-3.5">

              <li className="flex items-start space-x-3 text-slate-450">
                <MapPin className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm leading-relaxed font-semibold">
                  Hargeisa, Somalia Horn of Africa
                </span>
              </li>

              <li className="flex items-start space-x-3 text-slate-450">
                <Phone className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <div className="text-xs sm:text-sm font-semibold space-y-0.5">
                  <a href="https://wa.me/252638888131" target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                    +252 63 88 88 131
                  </a>
                  <a href="tel:+252634507827" className="block hover:text-white">
                    +252 63 450 7827
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-3 text-slate-450">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="mailto:infotcmccenter.com" className="text-xs sm:text-sm font-semibold hover:text-white">
                  infotcmccenter.com
                </a>
              </li>

              <li className="flex items-center space-x-3 text-slate-450">
                <Globe className="w-5 h-5 text-brand-teal shrink-0" />
                <a href="https://tcmccenter.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold hover:text-white">
                  tcmccenter.com
                </a>
              </li>

              <li className="flex items-start space-x-3 text-slate-450 pt-1">
                <Clock className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <div className="text-xs sm:text-sm font-semibold leading-relaxed">
                  <span className="block text-white font-extrabold text-xs uppercase tracking-wider mb-0.5">Hours of Operation</span>
                  <span>Sat - Thu: 7:00 AM - 12:00 PM & 4:00 PM - 6:00 PM</span><br />
                  <span>Friday: Closed</span>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer bottom details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
          <p>
            &copy; {currentYear} Traditional Chinese Medical Center (TCMC). All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center">
            Promoting Traditional Chinese Medicine. Supporting Better Health.
          </p>
        </div>

      </div>
    </footer>
  );
}
