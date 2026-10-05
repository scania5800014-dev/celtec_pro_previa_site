/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveBudgetSimulator } from './components/InteractiveBudgetSimulator';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] text-slate-800 antialiased selection:bg-[#3EB489]/20 selection:text-[#1A2C42]">
      {/* Header com semântica <header> e <nav> */}
      <Header />

      {/* Main semântico com todas as seções corporativas */}
      <main id="main-content" className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <InteractiveBudgetSimulator />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer semântico <footer> */}
      <Footer />

      {/* Botão flutuante de atendimento WhatsApp com status ativo */}
      <FloatingWhatsApp />
    </div>
  );
}
