import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-display">
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
