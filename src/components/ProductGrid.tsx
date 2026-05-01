"use client";

import { ChevronsRight } from "lucide-react";
import { useCart } from "@/store/useCart";

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
            <div
              key={product.id}
              className={`group flex flex-col bg-skena-card border border-skena-border transition-colors ${
                product.stock === 0 ? "opacity-50 grayscale" : "hover:border-skena-accent"
              }`}
            >
              <div className="relative w-full aspect-[4/5] bg-[#1a1a1a] overflow-hidden p-4 flex items-center justify-center">
                <img
                  src={product.images[0] || "https://placehold.co/400x500"}
                  alt={product.name}
                  className={`w-full h-full object-cover object-center transition-all duration-500 ${
                    product.stock === 0 ? "" : "grayscale group-hover:grayscale-0"
                  }`}
                />
                {product.isFeatured && product.stock > 0 && (
                  <div className="absolute top-0 left-0 bg-skena-accent text-skena-dark text-[10px] font-bold font-display uppercase tracking-widest px-3 py-1.5 shadow-[4px_4px_0px_#000] z-10 border-b-2 border-r-2 border-black">
                    FEATURED ARCHIVE
                  </div>
                )}
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-[2px]">
                    <span className="bg-red-600 text-white text-lg font-bold font-display uppercase tracking-widest px-4 py-2 rotate-[-15deg] border-2 border-black shadow-[4px_4px_0px_#000]">
                      SOLD OUT
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow border-t border-skena-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold font-display uppercase text-skena-light leading-snug line-clamp-2 pr-2">
                    {product.name}
                  </h3>
                  <span className="text-skena-accent font-display font-bold text-xs">
                    Rp{product.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-skena-muted mb-4 uppercase">
                  {product.category} &bull; {product.description.substring(0, 30)}...
                </p>
                <div className="mt-auto space-y-2">
                  <button
                    onClick={() => handleWhatsAppClick(product)}
                    disabled={product.stock === 0}
                    className={`w-full py-3 bg-skena-accent text-skena-dark text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 brutalist-btn ${
                      product.stock === 0 ? "opacity-50 grayscale cursor-not-allowed" : ""
                    }`}
                  >
                    {product.stock === 0 ? "Udah Laku" : "Sikat Sekarang"}
                  </button>
                  <button
                    onClick={() => addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.images[0] || "https://placehold.co/400x500",
                    })}
                    disabled={product.stock === 0}
                    className="w-full py-2 bg-transparent border border-skena-border text-[10px] font-display font-bold uppercase tracking-widest text-skena-light hover:bg-skena-card transition-colors disabled:opacity-50"
                  >
                    + Masuk Keranjang
                  </button>
                </div>
              </div>
            </div>
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
