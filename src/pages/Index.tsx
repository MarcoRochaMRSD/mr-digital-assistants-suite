
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AIAgentsSection from '@/components/AIAgentsSection';
import RPASection from '@/components/RPASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AIAgentsSection />
      <RPASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
