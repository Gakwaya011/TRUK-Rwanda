import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import OurReach from './components/OurReach';
import Footer from './components/Footer';




function App() {
  return (
    <main className="font-sans text-gray-900">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <OurReach />
      <Footer />
    </main>
  );
}

export default App;