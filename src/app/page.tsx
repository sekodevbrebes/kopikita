import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Menu from "@/components/home/Menu";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        <About />
        <Menu />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
