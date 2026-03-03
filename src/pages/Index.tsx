import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Formats from "@/components/Formats";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import International from "@/components/International";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-outfit">
      <Navbar />
      <FloatingElements />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Formats />
        <About />
        <Capabilities />
        <International />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
