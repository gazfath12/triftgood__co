"use client";

import { ChevronsRight } from "lucide-react";
import { useCart } from "@/store/useCart";
import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  description: string;
  stock: number;
  isFeatured: boolean;
};

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addItem } = useCart();
  const WHATSAPP_NUMBER = "6285745232506"; // Ganti dengan nomor WA asli

  const handleWhatsAppClick = (product: Product) => {
    if (product.stock === 0) return;
    
    const message = `Halo min, saya mau sikat barang ini dong:%0A%0A*${product.name}*%0AHarga: Rp${(product.price.toLocaleString())}%0A%0AApakah masih ada?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="koleksi" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-skena-border pb-6 flex justify-between items-end">
          <div>
            <span className="text-skena-accent font-display font-bold text-xs uppercase tracking-widest block mb-2">
              // LATEST DROP
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              Fresh From <br /> The Bales
            </h2>
          </div>
          <a
            href="/#koleksi"
            className="hidden md:flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wide text-skena-muted hover:text-skena-accent transition-colors"
          >
            View All Items <ChevronsRight className="w-4 h-4" />
          </a>
        </div>

        {/* Product Grid Edgy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              handleWhatsAppClick={handleWhatsAppClick} 
            />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="/#koleksi"
            className="block w-full text-center py-4 border border-skena-border text-sm font-display font-bold uppercase tracking-widest text-skena-light hover:bg-skena-card"
          >
            Lihat Semua Drop
          </a>
        </div>
      </div>
    </section>
  );
}
