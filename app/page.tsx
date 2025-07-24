
'use client';

import Link from 'next/link';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Hero />
        <FeaturedProducts />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
