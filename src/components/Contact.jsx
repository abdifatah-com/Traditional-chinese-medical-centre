import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Globe, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Acupuncture Therapy',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Acupuncture Therapy',
        message: '',
      });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Booking Suite
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight font-serif">
            Visit Our Center & <span className="green-text">Get in Touch</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base leading-relaxed font-semibold">
            Connect with Traditional Chinese Medical Center (TCMC) for inquiries, clinical consultations, and professional collaboration.
          </p>
        </div>

        {/* Contact Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Contact Info & Map Details */}
          <div className="lg:col-span-5 space-y-8 text-left">

            <div className="space-y-6">
              <h3 className="text-xl font-black text-brand-navy font-serif tracking-wide">
                Our Contact Information
              </h3>

              <div className="space-y-5">

                {/* Organization */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Organization</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-bold mt-1">
                      Traditional Chinese Medical Center (TCMC)
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Address</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      Hargeisa, Somalia Horn of Africa
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Phone / WhatsApp</h4>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold mt-1 space-y-1">
                      <a href="https://wa.me/252638888131" target="_blank" rel="noopener noreferrer" className="block text-brand-teal hover:underline font-bold">
                        +252 63 88 88 131
                      </a>
                      <a href="tel:+252634507827" className="block hover:text-brand-navy">
                        +252 63 450 7827
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Email</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      <a href="mailto:infotcmccenter.com" className="hover:text-brand-teal">
                        infotcmccenter.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Website</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      <a href="https://tcmccenter.com" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline font-bold">
                        tcmccenter.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours of Operation */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Hours of Operation</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      Sat - Thu: 7:00 AM - 12:00 PM & 4:00 PM - 6:00 PM<br />
                      Friday: Closed
                    </p>
                  </div>
                </div>

              </div>

              {/* Styled Map frame */}
              <div className="space-y-3">
                <div className="rounded-[32px] overflow-hidden shadow-lg border border-slate-200/50 aspect-[4/3] w-full bg-slate-50">
                  <iframe
                    title="Traditional Chinese Medical Center Location Map"
                    src="https://maps.google.com/maps?q=9.5640496,44.0577034&hl=en&z=17&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://wa.me/252638888131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp: +252 63 88 88 131</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Xarunta+caafimaadka+ee+shiinaha/@9.5640292,44.0576842,17.21z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl bg-teal-50 border border-teal-200 text-brand-teal hover:bg-brand-teal hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Booking Card (Executive Suite style) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/50 p-8 sm:p-12 rounded-[40px] text-left relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-brand-navy font-serif mb-2 tracking-wide">
                Consultation Request Form
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 mb-8 leading-relaxed font-semibold">
                Submit details below. Our clinic team will connect with you promptly to align your preferred consultation schedule.
              </p>

              {submitted ? (
                <div className="bg-white border border-teal-100 p-8 rounded-3xl text-center space-y-4 shadow-xl">
                  <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-brand-teal mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-black text-brand-navy">
                    Request Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed font-semibold">
                    Thank you. Traditional Chinese Medical Center’s team will reach out within 2-4 hours to confirm your consultation schedule.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white teal-gradient-bg shadow-md hover:scale-102 transition-transform"
                  >
                    New Consultation Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Abdirahman Mohamed"
                      className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all font-semibold"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +252 63 88 88 131"
                        className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all font-semibold"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. user@example.com"
                        className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all font-semibold"
                      />
                    </div>

                  </div>

                  {/* Select Treatment */}
                  <div>
                    <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Preferred Service / Area of Inquiry
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all cursor-pointer font-black text-brand-navy uppercase tracking-wider"
                    >
                      <option value="Acupuncture Therapy">Acupuncture Therapy</option>
                      <option value="TCM Consultation">TCM Consultation</option>
                      <option value="Chiropractic Care">Chiropractic Care</option>
                      <option value="Pain Management">Pain Management</option>
                      <option value="Health Education">Health Education</option>
                      <option value="International Cooperation">International Cooperation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Medical / Consultation Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details regarding your health concerns or professional inquiry..."
                      className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all resize-none font-semibold"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="luxury-hover-effect w-full inline-flex items-center justify-center space-x-2 px-8 py-4.5 rounded-xl text-white font-black uppercase tracking-wider shadow-md teal-gradient-bg hover:opacity-95 text-xs sm:text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
