import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Marquee />
      <Navbar />
      <Hero />
      <Categories />
      <ProductGrid />
      <Manifesto />
      <Footer />
    </main>
  );
}
