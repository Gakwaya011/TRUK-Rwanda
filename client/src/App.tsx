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
import ContactPage from './pages/ContactPage';
import ServiceDetail from './pages/ServiceDetail';
import CareersPage from './pages/CareersPage'; 
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AddBlog from './pages/AddBlog';
import AddJob from './pages/AddJob';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import JobDetail from './pages/JobDetail';
import EditBlog from './pages/EditBlog';
import ContactSection from './components/ContactSection';
import LatestNews from './components/LatestNews';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Preloader from './components/Preloader';
import NotFound from './pages/NotFound';

const Home = () => (
  <>
  
  <Navbar/>
  
    <Hero />
    <AboutSection />
    <ServicesSection />
    <Partners />
    <WhyChooseUs />
     <OurReach />
     <LatestNews/>
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      <Preloader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* ADD THIS ROUTE TO FIX THE ERROR */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-blog" element={<AddBlog />} />
        <Route path="/admin/add-job" element={<AddJob />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/admin/edit-blog/:id" element={<EditBlog />} />
        <Route path="/careers/:id" element={<JobDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
