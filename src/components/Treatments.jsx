import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  UserCheck,
  Bone,
  ShieldAlert,
  GraduationCap,
  Globe2,
  ArrowRight
} from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      num: '01',
      icon: <Activity className="w-5 h-5" />,
      title: 'Acupuncture Therapy',
      description: 'Traditional acupuncture treatment for selected health conditions using sterile, single-use ultra-fine needles.',
      features: ['Selected Health Conditions', 'Sterile Single-Use Needles', 'Meridian & Qi Balancing'],
    },
    {
      num: '02',
      icon: <UserCheck className="w-5 h-5" />,
      title: 'TCM Consultation',
      description: 'Personalized assessment and traditional Chinese medicine guidance tailored to your individual health constitution.',
      features: ['Personalized Health Assessment', 'Holistic Diagnostic Evaluation', 'Tailored Care Guidance'],
    },
    {
      num: '03',
      icon: <Bone className="w-5 h-5" />,
      title: 'Chiropractic Care',
      description: 'Care for selected musculoskeletal conditions, including back and neck pain, improving posture and joint function.',
      features: ['Selected Musculoskeletal Conditions', 'Back & Neck Pain Support', 'Spinal & Joint Alignment'],
    },
    {
      num: '04',
      icon: <ShieldAlert className="w-5 h-5" />,
      title: 'Pain Management',
      description: 'Support for patients experiencing selected pain-related conditions through integrated, non-invasive therapeutic techniques.',
      features: ['Selected Pain-Related Conditions', 'Holistic Discomfort Relief', 'Non-Invasive Therapeutic Care'],
    },
    {
      num: '05',
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Health Education',
      description: 'Raising awareness of Traditional Chinese Medicine and patient safety, empowering our community with informed health choices.',
      features: ['Patient Safety Awareness', 'TCM Knowledge & Guidance', 'Preventative Lifestyle Insights'],
    },
    {
      num: '06',
      icon: <Globe2 className="w-5 h-5" />,
      title: 'International Cooperation',
      description: 'Promoting professional training, knowledge exchange, and partnerships with Chinese medical institutions and healthcare bodies.',
      features: ['Chinese Medical Partnerships', 'Professional Clinical Training', 'Knowledge Exchange Programs'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            Our Therapeutic & Professional Services
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight font-serif">
            Clinical Services & <span className="green-text">Programs</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
            Patient-centered care, traditional therapeutic practices, and international medical cooperation in Hargeisa, Somalia.
          </p>
        </div>

        {/* Treatment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {treatments.map((tr) => (
            <motion.div
              key={tr.title}
              variants={itemVariants}
              className="luxury-hover-effect flex flex-col justify-between bg-slate-50 border border-slate-200/50 p-8 md:p-10 rounded-[32px] hover:border-brand-gold/30 hover:bg-white shadow-sm hover:shadow-2xl transition-all duration-500 relative group"
            >
              {/* Giant background styling layout numbers */}
              <span className="absolute top-4 right-8 text-7xl font-black text-slate-100/60 font-display group-hover:text-brand-gold/10 transition-colors pointer-events-none -z-0 select-none">
                {tr.num}
              </span>

              <div className="relative z-10 text-left">
                {/* Icon wrapper */}
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm text-brand-teal group-hover:bg-brand-teal group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <div className="transition-colors duration-300">
                    {tr.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-brand-navy mb-3 group-hover:text-brand-teal transition-colors tracking-wide">
                  {tr.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                  {tr.description}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-slate-200/40 pt-5 mt-auto relative z-10">
                <ul className="space-y-2.5 text-left">
                  {tr.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-2 text-xs font-black text-brand-navy">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Callout */}
        <div className="text-center mt-14 relative z-10">
          <a
            href="https://wa.me/252638888131"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-black text-brand-teal hover:text-brand-gold-dark uppercase tracking-wider transition-colors group"
          >
            <span>Inquire or schedule a consultation via WhatsApp (+252 63 88 88 131)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
