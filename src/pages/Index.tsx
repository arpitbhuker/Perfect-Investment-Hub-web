import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SmcPiSection from "@/components/SmcPiSection";
import MarketTimingsSection from "@/components/MarketTimingsSection";
import CompanyOverviewSection from "@/components/CompanyOverviewSection";
import SmcAppsSection from "@/components/SmcAppsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SmcPiSection />
      <MarketTimingsSection />
      <CompanyOverviewSection />
      <SmcAppsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;