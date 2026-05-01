"use client";

import { ChevronsRight } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  desc: string;
  badge?: string;
  isSoldOut: boolean;
};

const products: Product[] = [
  {
    id: "1",
    name: "Faded Boxy Tee Band Bootleg",
    price: 120000,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
    size: "Size XL",
    desc: "PxL 75x60",
    badge: "RARE",
    isSoldOut: false,
  },
  {
    id: "2",
    name: "Parachute Pants Olive Y2K",
    price: 185000,
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=600&auto=format&fit=crop",
    size: "Size 32",
    desc: "Loose Fit",
    isSoldOut: false,
  },
  {
    id: "3",
    name: "Distressed Beanie Hat",
    price: 65000,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882ba54?q=80&w=600&auto=format&fit=crop",
    size: "All Size",
    desc: "Washed",
    isSoldOut: true,
  },
  {
    id: "4",
    name: "Vintage Leather Racing Jacket",
    price: 250000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
    size: "Size L",
    desc: "PxL 68x55",
    badge: "STEAL",
    isSoldOut: false,
  },
];

export default function ProductGrid() {
  const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WA asli

  const handleWhatsAppClick = (product: Product) => {
    if (product.isSoldOut) return;
    
    const message = `Halo min, saya mau sikat barang ini dong:%0A%0A*${product.name}*%0AHarga: Rp${(product.price / 1000)}k%0A%0AApakah masih ada?`;
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
            href="#"
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
                product.isSoldOut ? "opacity-50 grayscale" : "hover:border-skena-accent"
              }`}
            >
              <div className="relative w-full aspect-[4/5] bg-[#1a1a1a] overflow-hidden p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover object-center transition-all duration-500 ${
                    product.isSoldOut ? "" : "grayscale group-hover:grayscale-0"
                  }`}
                />
                {product.badge && !product.isSoldOut && (
                  <span className="absolute top-4 left-4 bg-skena-light text-skena-dark text-[10px] font-bold font-display uppercase tracking-widest px-2 py-1">
                    {product.badge}
                  </span>
                )}
                {product.isSoldOut && (
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-lg font-bold font-display uppercase tracking-widest px-4 py-2 rotate-[-15deg] border-2 border-black shadow-[4px_4px_0px_#000]">
                    SOLD OUT
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow border-t border-skena-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold font-display uppercase text-skena-light leading-snug line-clamp-2 pr-2">
                    {product.name}
                  </h3>
                  <span className="text-skena-accent font-display font-bold">
                    Rp{product.price / 1000}k
                  </span>
                </div>
                <p className="text-xs text-skena-muted mb-4 uppercase">
                  {product.size} &bull; {product.desc}
                </p>
                <button
                  onClick={() => handleWhatsAppClick(product)}
                  disabled={product.isSoldOut}
                  className={`mt-auto w-full py-3 bg-transparent border border-skena-muted text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 ${
                    product.isSoldOut
                      ? "text-skena-muted cursor-not-allowed"
                      : "text-skena-light hover:bg-skena-accent hover:text-skena-dark hover:border-skena-accent"
                  }`}
                >
                  {product.isSoldOut ? "Udah Laku" : "+ Chat WA Buat Sikat"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="#"
            className="block w-full text-center py-4 border border-skena-border text-sm font-display font-bold uppercase tracking-widest text-skena-light hover:bg-skena-card"
          >
            Lihat Semua Drop
          </a>
        </div>
      </div>
    </section>
  );
}
