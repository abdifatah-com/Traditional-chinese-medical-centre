import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    BookOpen,
    Clock,
    User,
    Search,
    Sparkles,
    ArrowRight,
    X,
    Share2,
    CheckCircle2,
    MessageSquare,
    Bookmark
} from 'lucide-react';
import Footer from '../components/Footer';

export default function BlogPage({ onBack }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPost, setSelectedPost] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    const posts = [
        {
            id: 1,
            title: 'Understanding Acupuncture: How Traditional Chinese Medicine Alleviates Pain',
            category: 'Acupuncture Care',
            readTime: '4 min read',
            author: 'TCM Clinical Team',
            date: 'Sep 28, 2026',
            image: '/images/acupuncture.png',
            excerpt: 'Discover how sterile ultra-fine needle stimulation along body meridians relieves chronic back pain, migraines, tension, and nervous system imbalances naturally.',
            content: [
                'Acupuncture has been practiced for thousands of years as a core pillar of Traditional Chinese Medicine. By gently inserting sterile, hair-thin needles into precise meridian points, acupuncture stimulates natural endorphin release and restores smooth energy flow (Qi).',
                'At Traditional Chinese Medical Center in Hargeisa, each session begins with a comprehensive diagnostic evaluation of your symptoms, posture, and energy balance.',
                'Key Clinical Benefits of Acupuncture:',
                '• Natural Pain Relief: Effective management for back pain, sciatica, migraines, and joint stiffness without reliance on heavy pharmaceuticals.',
                '• Nervous System Calming: Reduces stress hormones, improves sleep quality, and alleviates anxiety.',
                '• Enhanced Circulation: Accelerates natural tissue repair, reduces local inflammation, and boosts immune vitality.',
                '• Patient Safety: Every procedure strictly adheres to single-use, sterile disposable needle guidelines.'
            ]
        },
        {
            id: 2,
            title: 'The Art & Science of Herbal Formulations in Traditional Chinese Medicine',
            category: 'Herbal Medicine',
            readTime: '5 min read',
            author: 'TCM Pharmacopoeia Specialist',
            date: 'Aug 19, 2026',
            image: '/images/3.png',
            excerpt: 'Learn how custom botanical formulations address internal organ imbalances, digestive health, and support long-term recovery based on pulse evaluation.',
            content: [
                'Traditional Chinese Herbal Medicine treats the underlying cause of health issues rather than just suppressing isolated symptoms. Botanical formulas combine synergistically to restore internal organ balance.',
                '1. Diagnostic Customization: Herbal remedies are blended specifically for your unique constitution after pulse, tongue, and lifestyle assessment.',
                '2. Natural Organic Ingredients: Sourced with strict quality controls to ensure safety, purity, and optimal therapeutic potency.',
                '3. Holistic Harmony: Promotes digestive equilibrium, metabolic efficiency, hormonal balance, and deep vitality over time.',
                'Our center ensures all botanicals meet stringent verification and safety benchmarks.'
            ]
        },
        {
            id: 3,
            category: 'Therapeutic Cupping',
            title: 'Cupping & Hijama Therapy: Benefits for Deep Muscle Recovery & Detox',
            readTime: '4 min read',
            author: 'Therapy Team',
            date: 'Jul 30, 2026',
            image: '/images/cupping.png',
            excerpt: 'Explore how therapeutic vacuum cupping releases stubborn muscle knots, enhances micro-circulation, and cleanses metabolic waste.',
            content: [
                'Therapeutic cupping (Hijama) utilizes gentle suction cups applied to target acupuncture regions on the back, neck, and shoulders.',
                'Why cupping therapy is beneficial:',
                '• Stimulates localized micro-circulation, bringing fresh oxygenated blood to tight muscles.',
                '• Releases deep myofascial tension and stubborn muscle knots accumulated from physical labor or desk posture.',
                '• Facilitates natural metabolic waste removal and lymph drainage.',
                'At TCMC, cupping is administered under sterile, controlled clinical conditions by experienced therapists.'
            ]
        },
        {
            id: 4,
            category: 'Chiropractic Care',
            title: 'Gentle Spinal Alignment & Chiropractic Musculoskeletal Care',
            readTime: '6 min read',
            author: 'Musculoskeletal Practitioner',
            date: 'Jun 15, 2026',
            image: '/images/4.png',
            excerpt: 'How chiropractic adjustments and Tuina joint mobilization relieve chronic cervical neck strain and lower lumbar pain.',
            content: [
                'Musculoskeletal issues such as chronic neck stiffness, sciatic nerve irritation, and lumbar tension affect a large portion of our community.',
                'Our integrated approach combines gentle chiropractic joint mobilization with ancient Chinese acupressure techniques:',
                '• Restores biomechanical symmetry without sudden, aggressive force.',
                '• Relieves nerve compression responsible for radiating leg or arm numbness.',
                '• Prescribes corrective postural exercises to prevent recurring strains.',
                'Consult our care specialists for a gentle, personalized musculoskeletal evaluation.'
            ]
        },
        {
            id: 5,
            category: 'TCM Philosophy',
            title: 'Pulse & Tongue Diagnosis: The Ancient Window into Internal Health',
            readTime: '3 min read',
            author: 'Senior Diagnostic Physician',
            date: 'May 20, 2026',
            image: '/images/hero.png',
            excerpt: 'An inside look at how TCM doctors evaluate your radial pulse positions and tongue characteristics to design your unique treatment plan.',
            content: [
                'In Traditional Chinese Medicine, the body is viewed as an interconnected ecosystem. Two of the most sophisticated diagnostic tools are radial pulse assessment and tongue observation.',
                '• The Radial Pulse: Reveals the operational state of individual organ networks (Heart, Liver, Kidneys, Spleen, Lungs).',
                '• Tongue Inspection: Reflects digestive constitution, moisture levels, and thermal balance (Heat vs. Cold).',
                'Together, these non-invasive assessments provide deep clarity on health imbalances before symptoms become acute.'
            ]
        },
        {
            id: 6,
            category: 'Patient Education',
            title: 'Preparing for Your First Acupuncture Session: What to Expect',
            readTime: '4 min read',
            author: 'Clinical Coordination',
            date: 'Apr 11, 2026',
            image: '/images/shop.png',
            excerpt: 'Everything you need to know about your initial consultation, needle sensation, session duration, and post-treatment relaxation.',
            content: [
                'If you have never experienced acupuncture, it is natural to wonder what the process feels like.',
                '• Pre-Treatment: Wear loose, comfortable clothing and avoid arriving on an empty stomach.',
                '• Needle Sensation: Acupuncture needles are ultra-fine hair-thin filaments. Most patients report feeling only a brief tap followed by a gentle warm or tingling sensation called "De Qi".',
                '• Session Flow: Needles remain in place for 20 to 30 minutes in a peaceful, quiet treatment room while you rest deeply.',
                '• Aftercare: Hydrate well, avoid strenuous exercise immediately following, and allow your body to integrate the therapeutic relaxation.'
            ]
        }
    ];

    const categories = [
        { id: 'all', label: 'All Articles' },
        { id: 'Acupuncture Care', label: 'Acupuncture Care' },
        { id: 'Herbal Medicine', label: 'Herbal Medicine' },
        { id: 'Therapeutic Cupping', label: 'Therapeutic Cupping' },
        { id: 'Chiropractic Care', label: 'Chiropractic & Spine' },
        { id: 'TCM Philosophy', label: 'TCM Diagnostics' },
        { id: 'Patient Education', label: 'Patient Education' }
    ];

    const filteredPosts = posts.filter((post) => {
        const matchesCategory =
            selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleShare = (post) => {
        navigator.clipboard.writeText(
            `${post.title} - Traditional Chinese Medical Center (TCMC)\nhttps://tcmccenter.com`
        );
        setCopiedId(post.id);
        setTimeout(() => setCopiedId(null), 2500);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-display flex flex-col justify-between">

            {/* Sticky Header Bar */}
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

                    {/* Brand Identity */}
                    <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden p-0.5 shadow-sm">
                            <img src="/images/logo1.jpg" alt="TCMC Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-left hidden sm:block">
                            <span className="block text-sm font-black text-brand-navy tracking-tight font-display">
                                TCMC
                            </span>
                            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5">
                                Health Journal
                            </span>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/252638888131"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp Consult</span>
                        <span className="sm:hidden">WhatsApp</span>
                    </a>

                </div>
            </header>

            {/* Hero Header */}
            <section className="bg-gradient-to-br from-white via-slate-50 to-teal-50/30 py-14 sm:py-20 border-b border-slate-200/60 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>TCM Clinical Insights & Wellness</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-brand-navy font-serif leading-tight">
                            TCM Health, Healing & <span className="green-text">Articles</span>
                        </h1>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                            Explore in-depth articles on acupuncture efficacy, botanical herbal formulas, musculoskeletal relief, and traditional diagnostic methods written for our community in Hargeisa.
                        </p>
                    </div>

                    {/* Search Bar & Categories */}
                    <div className="mt-8 space-y-4">
                        <div className="relative max-w-xl">
                            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search articles by title, topic, or symptom..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-slate-200 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal pl-11 pr-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold outline-none shadow-xs"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        {/* Filter Pills */}
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

            {/* Main Articles Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full flex-1">
                {filteredPosts.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
                        <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
                        <h3 className="text-lg font-black text-brand-navy">No articles match your query</h3>
                        <p className="text-xs text-slate-500">
                            Try adjusting your search terms or selecting another category.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="px-5 py-2 rounded-full bg-brand-teal text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Article Cover */}
                                    <div className="relative h-52 overflow-hidden bg-slate-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add('blue-gradient-bg', 'flex', 'items-center', 'justify-center');
                                            }}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-teal text-xs font-black uppercase tracking-wider border border-slate-200 shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Body Info */}
                                    <div className="p-6 space-y-3.5">
                                        <div className="flex items-center space-x-4 text-xs font-bold text-slate-400">
                                            <div className="flex items-center space-x-1">
                                                <User className="w-3.5 h-3.5 text-brand-gold" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-lg font-black text-brand-navy group-hover:text-brand-teal transition-colors leading-snug">
                                            {post.title}
                                        </h2>

                                        <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedPost(post)}
                                        className="inline-flex items-center space-x-1.5 text-xs font-black text-brand-teal hover:text-brand-gold-dark uppercase tracking-wider transition-colors cursor-pointer"
                                    >
                                        <span>Read Full Article</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>

                                    <button
                                        onClick={() => handleShare(post)}
                                        className="p-2 rounded-xl text-slate-400 hover:text-brand-navy hover:bg-slate-100 transition-colors cursor-pointer"
                                        title="Share article"
                                    >
                                        {copiedId === post.id ? (
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

            {/* Article Detail Reading Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                        className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 text-left"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-slate-100"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-brand-navy hover:bg-slate-200 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <span className="px-3 py-1 rounded-full bg-teal-50 text-brand-teal text-xs font-black uppercase tracking-wider border border-teal-100">
                                        {selectedPost.category}
                                    </span>

                                    <h2 className="text-xl sm:text-2xl font-black text-brand-navy font-serif leading-snug">
                                        {selectedPost.title}
                                    </h2>

                                    <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 pt-1">
                                        <span>By {selectedPost.author}</span>
                                        <span>•</span>
                                        <span>{selectedPost.date}</span>
                                        <span>•</span>
                                        <span>{selectedPost.readTime}</span>
                                    </div>
                                </div>

                                <div className="w-16 h-1 bg-brand-gold rounded-full"></div>

                                {/* Article Content */}
                                <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                                    {selectedPost.content.map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Footer Modal CTA */}
                                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-between items-center">
                                    <a
                                        href="https://wa.me/252638888131"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        <span>Consult on WhatsApp</span>
                                    </a>

                                    <button
                                        onClick={() => setSelectedPost(null)}
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
