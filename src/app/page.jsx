import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ClientLogos from "@/components/ClientLogos";
import AccredianEdge from "@/components/AccredianEdge";
import Expertise from "@/components/Expertise";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <ClientLogos />
      <AccredianEdge />
      <Expertise />
      <CATFramework />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
