"use client";

import { useCart } from "@/store/useCart";
import { X, Trash2, ShoppingCart, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { items, removeItem, totalItems, totalPrice, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleCheckout = () => {
    const WHATSAPP_NUMBER = "6285745232506";
    let message = "Halo min, saya mau checkout barang ini dong:%0A%0A";
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.quantity}x) - Rp${(item.price * item.quantity).toLocaleString()}%0A`;
    });
    
    message += `%0A*TOTAL: Rp${totalPrice().toLocaleString()}*%0A%0AApakah masih ready min?`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-skena-accent text-skena-dark p-4 shadow-[4px_4px_0px_#000] border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform flex items-center gap-3 font-bold group"
      >
        <ShoppingCart size={24} />
        <span className="font-display uppercase text-xs tracking-widest hidden group-hover:inline-block">Keranjang Sikat</span>
        {totalItems() > 0 && (
          <span className="absolute -top-3 -left-3 bg-red-600 text-white text-[10px] w-6 h-6 flex items-center justify-center border-2 border-black font-bold">
            {totalItems()}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-skena-dark border-l-2 border-skena-accent z-[70] flex flex-col"
            >
              <div className="p-6 border-b border-skena-border flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold text-skena-accent italic uppercase italic tracking-tighter">
                  Keranjang <span className="text-skena-light">Sikat</span>
                </h2>
                <button onClick={() => setIsOpen(false)} className="text-skena-light hover:text-skena-accent transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 border-2 border-dashed border-skena-border flex items-center justify-center text-skena-muted">
                      <ShoppingCart size={32} />
                    </div>
                    <p className="text-skena-muted uppercase text-xs tracking-widest font-bold">Belum ada barang nih. Sikat dulu!</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-skena-card border border-skena-border p-3 group hover:border-skena-accent transition-colors">
                      <div className="w-20 h-20 bg-skena-dark border border-skena-border overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-skena-light uppercase truncate">{item.name}</h4>
                        <p className="text-[10px] text-skena-muted mt-1">Qty: {item.quantity}</p>
                        <p className="text-skena-accent font-mono text-xs mt-2">Rp{item.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-skena-muted hover:text-red-500 transition-colors p-1 self-start"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t-2 border-skena-accent bg-skena-card space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-skena-muted uppercase text-[10px] tracking-widest font-bold">Subtotal</span>
                    <span className="text-2xl font-bold text-skena-light">Rp{totalPrice().toLocaleString()}</span>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-skena-accent text-skena-dark font-bold py-4 flex items-center justify-center gap-3 uppercase tracking-widest text-xs brutalist-btn"
                  >
                    <MessageCircle size={18} />
                    Checkout via WhatsApp
                  </button>
                  
                  <button
                    onClick={() => {
                      if(confirm("Hapus semua isi keranjang?")) clearCart();
                    }}
                    className="w-full text-skena-muted hover:text-skena-light transition-colors text-[10px] uppercase tracking-widest font-bold"
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
