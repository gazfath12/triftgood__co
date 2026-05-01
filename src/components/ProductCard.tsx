"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/store/useCart";
import { motion, AnimatePresence } from "framer-motion";

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

export default function ProductCard({ product, handleWhatsAppClick }: { product: Product, handleWhatsAppClick: (p: Product) => void }) {
  const { addItem } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div
      className={`group flex flex-col bg-skena-card border border-skena-border transition-colors ${
        product.stock === 0 ? "opacity-50 grayscale" : "hover:border-skena-accent"
      }`}
    >
      <div className="relative w-full aspect-[4/5] bg-[#1a1a1a] overflow-hidden p-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={product.images[currentImageIndex] || "https://placehold.co/400x500"}
            alt={product.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`w-full h-full object-cover object-center ${
              product.stock === 0 ? "" : "grayscale group-hover:grayscale-0"
            }`}
          />
        </AnimatePresence>

        {/* Carousel Controls */}
        {product.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-30">
            <button
              onClick={prevImage}
              className="bg-skena-dark/80 text-skena-light p-2 border border-skena-border hover:bg-skena-accent hover:text-skena-dark transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="bg-skena-dark/80 text-skena-light p-2 border border-skena-border hover:bg-skena-accent hover:text-skena-dark transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-30">
            {product.images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 transition-all ${
                  i === currentImageIndex ? "bg-skena-accent w-4" : "bg-skena-muted"
                }`}
              />
            ))}
          </div>
        )}

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
  );
}
