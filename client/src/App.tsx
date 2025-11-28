import { Routes, Route } from 'react-router-dom';

// Import Components
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection'; 
import WhyChooseUs from './components/WhyChooseUs';
import OurReach from './components/OurReach';
import Footer from './components/Footer';

// Import Pages
import ServicesPage from './pages/ServicesPage'; 
import AboutPage from './pages/AboutPage'; 
import CareersPage from './pages/CareersPage'; 
import ContactPage from './pages/ContactPage'; // IMPORT THIS

// Home Component
const Home = () => (
  <>
    <Hero />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUs />
    <OurReach />
    <Footer />
  </>
);

function App() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* UPDATED THIS */}
      </Routes>
    </main>
  );
}

export default App;