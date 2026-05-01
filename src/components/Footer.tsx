import { Star, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer id="tentang" className="bg-[#0a0a0a] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#" className="font-display text-4xl font-bold tracking-tighter text-skena-light mb-6 inline-block">
              TRIFTGOOD<span className="text-skena-accent">.</span>CO
            </a>
            <p className="text-skena-muted mb-8 max-w-sm">
              Menyelamatkan siluet kalcer dari tumpukan limbah kain. Curated streetwear, Y2K aesthetics, and vintage workwear.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 border border-skena-border flex items-center justify-center text-skena-light hover:bg-skena-accent hover:text-skena-dark hover:border-skena-accent transition-all"
              >
                <Star className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-skena-border flex items-center justify-center text-skena-light hover:bg-skena-accent hover:text-skena-dark hover:border-skena-accent transition-all"
              >
                <MessageSquare className="w-5 h-5 text-current" />
              </a>
            </div>
          </div>

          {/* Tautan */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-display font-bold text-skena-light uppercase tracking-widest mb-6 text-sm">Site Map</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-skena-muted hover:text-skena-accent transition-colors uppercase font-display text-sm tracking-wide">All Catalog</a></li>
              <li><a href="#" className="text-skena-muted hover:text-skena-accent transition-colors uppercase font-display text-sm tracking-wide">Tops & Outerwear</a></li>
              <li><a href="#" className="text-skena-muted hover:text-skena-accent transition-colors uppercase font-display text-sm tracking-wide">Bottoms & Pants</a></li>
              <li><a href="#" className="text-skena-muted hover:text-skena-accent transition-colors uppercase font-display text-sm tracking-wide">Accessories</a></li>
            </ul>
          </div>

          {/* Bantuan */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-skena-light uppercase tracking-widest mb-6 text-sm">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-skena-muted hover:text-skena-light transition-colors text-sm">Cara Order</a></li>
              <li><a href="#" className="text-skena-muted hover:text-skena-light transition-colors text-sm">Size Chart</a></li>
              <li><a href="#" className="text-skena-muted hover:text-skena-light transition-colors text-sm">Refund Policy</a></li>
              <li><a href="#" className="text-skena-muted hover:text-skena-light transition-colors text-sm">Shipping Info</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-skena-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-skena-muted font-display uppercase tracking-wider">
          <p>&copy; 2026 TRIFTGOOD__CO. STAY AUTHENTIC.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-skena-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-skena-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
