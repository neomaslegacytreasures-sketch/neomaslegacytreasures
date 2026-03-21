import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustIntro from "@/components/TrustIntro";
import AboutAngie from "@/components/AboutAngie";
import BenefitsSection from "@/components/BenefitsSection";
import ProductShowcase from "@/components/ProductShowcase";
import WhatsInside from "@/components/WhatsInside";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import EmotionalTrust from "@/components/EmotionalTrust";
import AIHelper from "@/components/AIHelper";
import FAQSection from "@/components/FAQSection";
import ChecklistSignup from "@/components/ChecklistSignup";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustIntro />
      <AboutAngie />
      <BenefitsSection />
      <ProductShowcase />
      <WhatsInside />
      <HowItWorks />
      <ServicesSection />
      <EmotionalTrust />
      <AIHelper />
      <section id="faq">
        <FAQSection />
      </section>
      <ChecklistSignup />
      <ContactSection />
    </main>
    <FooterSection />
    <StickyCTA />
  </>
);

export default Index;
