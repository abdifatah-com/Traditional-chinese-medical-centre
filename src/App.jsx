import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import NewsUpdates from './components/NewsUpdates';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'news' | 'blog'

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#news-page' || hash === '#news-all') {
        setCurrentPage('news');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blog-page' || hash === '#blog-all') {
        setCurrentPage('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, targetSection = null) => {
    if (page === 'news') {
      window.location.hash = '#news-page';
    } else if (page === 'blog') {
      window.location.hash = '#blog-page';
    } else {
      // Navigate back to home
      window.location.hash = targetSection || '#home';
      setCurrentPage('home');
      if (targetSection) {
        setTimeout(() => {
          const el = document.querySelector(targetSection);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  if (currentPage === 'news') {
    return <NewsPage onBack={() => navigateTo('home', '#news')} />;
  }

  if (currentPage === 'blog') {
    return <BlogPage onBack={() => navigateTo('home', '#blog')} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-display">
      {/* Navigation */}
      <Navbar />

      {/* 1. Home Section */}
      <Hero />

      {/* 2. About Section with Poker Card Stack */}
      <About />

      {/* 3. Services Section */}
      <Treatments />

      {/* 4. News & Updates Section */}
      <NewsUpdates onViewMore={() => navigateTo('news')} />

      {/* 5. Gallery Section */}
      <Gallery />

      {/* 6. Testimonials Poker Card Stack */}
      <Testimonials />

      {/* 7. Blog Section */}
      <Blog onViewMore={() => navigateTo('blog')} />

      {/* 8. Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
