import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        <About />
      </main>
    </div>
  )
}
