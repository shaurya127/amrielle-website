import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import VisualExcellence from '@/components/VisualExcellence';
import ValueProp from '@/components/ValueProp';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-accent/20">
      <Header />
      <Hero />
      <Stats />
      <VisualExcellence />
      <ValueProp />
      <Testimonials />
      <Process />
      <FAQ />
      <ContactSection />
      <CTA />
      <Footer />
    </main>
  );
}
