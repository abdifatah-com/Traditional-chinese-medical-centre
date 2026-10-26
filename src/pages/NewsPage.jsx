import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    Calendar,
    Search,
    Bell,
    Cpu,
    Award,
    ShieldAlert,
    Globe2,
    GraduationCap,
    Sparkles,
    ChevronRight,
    X,
    MessageSquare,
    Share2,
    CheckCircle2
} from 'lucide-react';
import Footer from '../components/Footer';

export default function NewsPage({ onBack }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeNews, setActiveNews] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    const allNews = [
        {
            id: 1,
            category: 'Therapeutic Expansion',
            badgeColor: 'bg-teal-50 text-brand-teal border-teal-200',
            icon: <Cpu className="w-4 h-4 text-brand-teal" />,
            date: 'October 05, 2026',
            title: 'Expanded Acupuncture & Moxibustion Suite in Hargeisa',
            summary: 'Traditional Chinese Medical Center enhances patient capacity with modernized clinical rooms and sterile treatment equipment.',
            content: `We are pleased to announce the opening of our upgraded therapeutic suite in Hargeisa, Somalia Horn of Africa. Designed for optimal peace of mind and sterile relaxation, our dedicated treatment rooms feature ergonomic consultation layouts for painless needle therapy, specialized cupping sessions, and individual herbal consultations.
      
With this expansion, our practitioners can serve more patients per day while maintaining strict single-use needle safety protocols and tranquil healing spaces.`,
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
            content: `To ensure seamless communication and immediate care coordination, visitors can now contact our clinical reception team directly on WhatsApp (+252 63 88 88 131). Get instant responses regarding session availability, traditional treatment preparation, and consultation advice.
      
Our reception desk is staffed throughout clinic hours (Saturday – Thursday: 7:00 AM – 12:00 PM & 4:00 PM – 6:00 PM) to assist you with appointments, inquiries, and follow-up support.`,
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
            content: `As part of our commitment to public health in Somalia and the Horn of Africa, Traditional Chinese Medical Center is hosting weekly wellness guidance sessions. Learn how acupuncture, herbal remedies, and cupping therapy can alleviate chronic back pain, joint stiffness, and stress naturally.
      
Dozens of community members have participated in free diagnostic screenings, gaining valuable knowledge on lifestyle adjustments, posture correction, and preventative healthcare.`,
            image: '/images/cupping.png',
            tag: 'Community'
        },
        {
            id: 4,
            category: 'International Cooperation',
            badgeColor: 'bg-blue-50 text-brand-blue border-blue-200',
            icon: <Globe2 className="w-4 h-4 text-brand-blue" />,
            date: 'July 18, 2026',
            title: 'Academic Partnership with Leading Chinese TCM Medical Institutions',
            summary: 'Formalizing clinical exchange and specialized acupuncture training partnerships between Hargeisa and Beijing specialists.',
            content: `TCMC is proud to announce ongoing cooperation talks with Chinese medical universities and traditional research bodies. This partnership focuses on advancing continuous professional medical training, sharing updated evidence-based acupuncture techniques, and facilitating clinical visits by experienced TCM doctors.
      
This collaboration underscores our mission to connect centuries of traditional Chinese medical wisdom with the healthcare needs of our local community.`,
            image: '/images/1.png',
            tag: 'Partnership'
        },
        {
            id: 5,
            category: 'Health Education',
            badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
            icon: <GraduationCap className="w-4 h-4 text-purple-600" />,
            date: 'June 29, 2026',
            title: 'Patient Safety & Sterile Single-Use Needle Protocol Certified',
            summary: 'Reaffirming our adherence to international clinical hygiene and zero cross-contamination standards in all acupuncture therapies.',
            content: `At TCMC, patient safety is our highest priority. All acupuncture procedures strictly use disposable, pre-sterilized, single-use surgical needles manufactured to rigorous medical standards.
      
Our practitioners undergo regular hygiene protocol refreshers, ensuring every patient in Hargeisa receives world-class traditional care in an immaculate, sterile clinical environment.`,
            image: '/images/2.png',
            tag: 'Safety Protocol'
        },
        {
            id: 6,
            category: 'Therapeutic Expansion',
            badgeColor: 'bg-teal-50 text-brand-teal border-teal-200',
            icon: <Cpu className="w-4 h-4 text-brand-teal" />,
            date: 'May 10, 2026',
            title: 'Specialized Chiropractic & Musculoskeletal Support Unit Launched',
            summary: 'Dedicated care pathways for severe neck, lower back, and joint mobility issues integrating traditional alignments.',
            content: `Responding to community demand for gentle musculoskeletal support, TCMC has added targeted chiropractic alignment and Tuina therapeutic bodywork sessions. Patients suffering from sedentary desk-work stiffness, chronic disc strain, and sports sprains can now receive comprehensive holistic rehabilitation under one roof.`,
            image: '/images/4.png',
            tag: 'New Service'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Updates' },
        { id: 'Therapeutic Expansion', label: 'Therapeutic Expansion' },
        { id: 'Clinic Announcement', label: 'Announcements' },
        { id: 'Community Wellness', label: 'Community Wellness' },
        { id: 'International Cooperation', label: 'International Cooperation' },
        { id: 'Health Education', label: 'Health Education' }
    ];

    const filteredNews = allNews.filter((item) => {
        const matchesCategory =
            selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleShare = (item) => {
        navigator.clipboard.writeText(
            `${item.title} - Traditional Chinese Medical Center (TCMC)\nhttps://tcmccenter.com`
        );
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2500);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-display flex flex-col justify-between">

            {/* Top Sticky Navigation Bar */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                    {/* Back Button */}
                    <button
                        onClick={onBack}
                        className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-brand-teal hover:text-white text-brand-navy font-bold text-xs uppercase tracking-wider transition-all duration-300 group shadow-xs cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Website</span>
                    </button>

                    {/* Center Brand Identity */}
                    <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden p-0.5 shadow-sm">
                            <img src="/images/logo1.jpg" alt="TCMC Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-left hidden sm:block">
                            <span className="block text-sm font-black text-brand-navy tracking-tight font-display">
                                TCMC
                            </span>
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5">
                                News & Updates
                            </span>
                        </div>
                    </div>

                    {/* Quick WhatsApp CTA */}
                    <a
                        href="https://wa.me/252638888131"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp: +252 63 88 88 131</span>
                        <span className="sm:hidden">WhatsApp</span>
                    </a>

                </div>
            </header>

            {/* Hero Banner Header */}
            <section className="bg-gradient-to-br from-white via-slate-50 to-teal-50/30 py-14 sm:py-20 border-b border-slate-200/60 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                            <Bell className="w-3.5 h-3.5" />
                            <span>Official Press & Information Center</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-brand-navy font-serif leading-tight">
                            News, Announcements & <span className="green-text">Updates</span>
                        </h1>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                            Explore the latest developments, therapeutic facilities, community wellness initiatives, and international medical cooperation from Traditional Chinese Medical Center in Hargeisa, Somalia Horn of Africa.
                        </p>
                    </div>

                    {/* Search Bar & Filter Controls */}
                    <div className="mt-8 space-y-4">
                        <div className="relative max-w-xl">
                            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search updates by keyword, treatment, or topic..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-slate-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal pl-11 pr-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold outline-none shadow-xs"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${selectedCategory === cat.id
                                            ? 'bg-brand-navy text-white shadow-md'
                                            : 'bg-white border border-slate-200 text-slate-600 hover:border-brand-teal hover:text-brand-teal'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Updates Content Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full flex-1">
                {filteredNews.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
                        <Bell className="w-10 h-10 text-slate-300 mx-auto" />
                        <h3 className="text-lg font-black text-brand-navy">No updates found</h3>
                        <p className="text-xs text-slate-500">
                            Try adjusting your search keywords or choosing "All Updates".
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="px-5 py-2 rounded-full bg-brand-teal text-white text-xs font-bold uppercase tracking-wider"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {filteredNews.map((item) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Cover Image */}
                                    <div className="relative h-52 overflow-hidden bg-slate-100">
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

                                    {/* Body Details */}
                                    <div className="p-6 space-y-3.5">
                                        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                                            <div className="flex items-center space-x-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                                                <span>{item.date}</span>
                                            </div>
                                            <span className="text-[10px] font-black uppercase text-brand-gold-dark tracking-wider">
                                                {item.tag}
                                            </span>
                                        </div>

                                        <h2 className="text-lg font-black text-brand-navy group-hover:text-brand-teal transition-colors leading-snug">
                                            {item.title}
                                        </h2>

                                        <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                                            {item.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Actions */}
                                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                                    <button
                                        onClick={() => setActiveNews(item)}
                                        className="inline-flex items-center space-x-1.5 text-xs font-black text-brand-teal hover:text-brand-gold-dark uppercase tracking-wider transition-colors cursor-pointer"
                                    >
                                        <span>Read Full Update</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>

                                    <button
                                        onClick={() => handleShare(item)}
                                        className="p-2 rounded-xl text-slate-400 hover:text-brand-navy hover:bg-slate-100 transition-colors"
                                        title="Share link"
                                    >
                                        {copiedId === item.id ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        ) : (
                                            <Share2 className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </main>

            {/* Detail Modal */}
            <AnimatePresence>
                {activeNews && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveNews(null)}
                        className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 text-left"
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
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-brand-navy hover:bg-slate-200 transition-colors cursor-pointer"
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

                                <div className="space-y-3 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                                    {activeNews.content.split('\n\n').map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>

                                {/* Direct Action */}
                                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
                                    <a
                                        href="https://wa.me/252638888131"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        <span>Inquire via WhatsApp</span>
                                    </a>

                                    <button
                                        onClick={() => setActiveNews(null)}
                                        className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Standard Footer */}
            <Footer />

        </div>
    );
}
