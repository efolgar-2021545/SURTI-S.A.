import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import BrandsSection from "../components/sections/BrandsSection.jsx";
import FeaturedProductsSection from "../components/sections/FeaturedProductsSection.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import CertificationSection from "../components/sections/CertificationSection.jsx";
import PaymentSection from "../components/sections/PaymentSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <BrandsSection />
            <FeaturedProductsSection />
            <ServicesSection />
            <CertificationSection />
            <PaymentSection />
            <ContactSection />
        </>
    );
}