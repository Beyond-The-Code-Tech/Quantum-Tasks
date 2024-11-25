import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Newsletter from '../components/landing/Newsletter';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900" />
      <div className="relative">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}