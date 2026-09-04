import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import FeaturedProductsSection from "../components/sections/FeaturedProductsSection.jsx";
import ServicesSection from "../components/sections/ServicesSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <FeaturedProductsSection />
            <ServicesSection />
            <ContactSection />
        </>
    );
}