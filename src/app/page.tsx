import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Home({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const { search } = await searchParams;

  const products = await prisma.product.findMany({
    where: search ? {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { category: { contains: search, mode: "insensitive" } },
      ]
    } : {},
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <main className="min-h-screen">
      <Marquee />
      <Navbar />
      <Hero />
      <Categories />
      <ProductGrid products={products} />
      <Manifesto />
      <Footer />
    </main>
  );
}
