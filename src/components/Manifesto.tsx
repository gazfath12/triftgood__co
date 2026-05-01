import { Crosshair } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="py-20 border-y border-skena-border bg-skena-accent text-skena-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Bukan Sekadar Bekas.
          </h2>
          <p className="text-lg md:text-xl font-medium border-l-4 border-skena-dark pl-4 text-left">
            "Kami mengkurasi barang thrift bukan buat yang mau murah aja, tapi buat lo yang paham karakter. Tiap noda pudar dan jahitan lepas adalah cerita. Thrifting is dead, archiving is the future."
          </p>
        </div>
      </div>
      {/* Abstract background elements */}
      <Crosshair className="absolute -right-20 -bottom-20 w-96 h-96 text-skena-dark/10 stroke-[0.5]" />
    </section>
  );
}
