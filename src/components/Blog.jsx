import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, User, ArrowRight, X, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export default function Blog({ onViewMore }) {
    const [selectedPost, setSelectedPost] = useState(null);

    const posts = [
        {
            id: 1,
            title: 'Understanding Acupuncture: How Traditional Chinese Medicine Alleviates Pain',
            category: 'Acupuncture Care',
            readTime: '4 min read',
            author: 'TCM Specialist Team',
            date: 'Sep 28, 2026',
            image: '/images/acupuncture.png',
            excerpt: 'Discover how fine needle stimulation along body meridians relieves chronic pain, tension, and nervous system imbalances.',
            content: [
                'Acupuncture has been practiced for thousands of years as a core pillar of Traditional Chinese Medicine. By gently inserting sterile, hair-thin needles into precise meridian points, acupuncture stimulates natural endorphin release and restores smooth energy flow (Qi).',
                'At Traditional Chinese Medical Center in Hargeisa, each session begins with a comprehensive diagnostic evaluation of your symptoms, posture, and energy balance.',
                'Key Clinical Benefits of Acupuncture:',
                '1. Natural Pain Relief: Effective management for back pain, migraines, sciata, and joint stiffness without reliance on heavy pharmaceuticals.',
                '2. Nervous System Calming: Reduces stress hormones, improves sleep quality, and alleviates anxiety.',
                '3. Enhanced Circulation: Accelerates natural tissue repair and immune vitality.'
            ]
        },
        {
            id: 2,
            title: 'The Art & Science of Herbal Formulations in Traditional Chinese Medicine',
            category: 'Herbal Medicine',
            readTime: '5 min read',
            author: 'TCM Specialist Team',
            date: 'Aug 19, 2026',
            image: '/images/herbal.png',
            excerpt: 'Learn how custom botanical formulations address internal organ imbalances and support long-term recovery.',
            content: [
                'Traditional Chinese Herbal Medicine treats the underlying cause of health issues rather than just suppressing isolated symptoms. Botanical formulas combine synergistically to restore internal organ balance.',
                '1. Diagnostic Customization: Herbal remedies are blended specifically for your unique constitution after pulse and tongue assessment.',
                '2. Natural Organic Ingredients: Sourced with strict quality controls to ensure safety, purity, and optimal therapeutic potency.',
                '3. Holistic Harmony: Promotes digestive health, hormonal balance, and deep vitality over time.'
            ]
        },
        {
            id: 3,
            title: 'Cupping & Hijama Therapy: Benefits for Deep Muscle Recovery & Detox',
            category: 'Therapeutic Cupping',
            readTime: '4 min read',
            author: 'TCM Specialist Team',
            date: 'Jul 30, 2026',
            image: '/images/cupping.png',
            excerpt: 'Explore how therapeutic vacuum cupping releases deep muscle knots, enhances micro-circulation, and cleanses toxins.',
            content: [
                'Therapeutic cupping (Hijama) utilizes gentle suction cups applied to target acupuncture regions on the back and shoulders.',
                'Why cupping therapy is beneficial:',
                '• Stimulates localized micro-circulation, bringing fresh oxygenated blood to tight muscles.',
                '• Releases deep myofascial tension and stubborn muscle knots.',
                '• Facilitates natural metabolic waste removal and lymph drainage.'
            ]
        }
    ];

    return (
        <section id="blog" className="py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Holistic Health Knowledge</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight font-serif">
                        TCM & Wellness <span className="green-text">Blog & Insights</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
                    <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                        Educational articles and therapeutic guidance authored by our specialists at Traditional Chinese Medical Center in Hargeisa.
                    </p>
                </div>

                {/* Blog Post Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="luxury-hover-effect bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div>
                                {/* Header Image */}
                                <div className="relative h-52 overflow-hidden bg-slate-200">
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
                                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-navy text-xs font-black uppercase tracking-wider shadow-sm border border-white">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="p-6 space-y-4 text-left">
                                    <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                                        <div className="flex items-center space-x-1.5">
                                            <User className="w-3.5 h-3.5 text-brand-teal" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-base sm:text-lg font-black text-brand-navy group-hover:text-brand-teal transition-colors leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-6 pt-0 text-left">
                                <button
                                    onClick={() => setSelectedPost(post)}
                                    className="inline-flex items-center space-x-2 text-xs font-black text-brand-teal hover:text-brand-gold uppercase tracking-wider transition-colors group/btn"
                                >
                                    <span>Read Full Article</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View More Blog Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => {
                            if (onViewMore) {
                                onViewMore();
                            } else {
                                window.location.hash = '#blog-page';
                            }
                        }}
                        className="luxury-hover-effect inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-brand-teal text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
                    >
                        <span>Explore All Health Articles</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Article Detail Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                        className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-slate-100 text-left"
                        >
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-brand-navy hover:bg-slate-200 transition-colors"
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

                                    <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 border-b border-slate-100 pb-4">
                                        <span className="text-brand-navy font-extrabold">{selectedPost.author}</span>
                                        <span>•</span>
                                        <span>{selectedPost.date}</span>
                                        <span>•</span>
                                        <span>{selectedPost.readTime}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                                    {selectedPost.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center space-x-2 text-xs font-bold text-brand-teal">
                                        <Bookmark className="w-4 h-4" />
                                        <span>Traditional Chinese Medical Center Knowledge Hub</span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="px-6 py-2.5 rounded-full teal-gradient-bg text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                                    >
                                        Close Article
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
