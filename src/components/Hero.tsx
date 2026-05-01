import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-10 pb-20 md:pt-16 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[60vh] md:h-[75vh] bg-skena-card overflow-hidden border border-skena-border group">
          {/* Header Img dengan filter street style */}
          <img
            src="/hero-skena.png"
            alt="Streetwear Skena"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
          />

          {/* Overlay Gradient Hitam */}
          <div className="absolute inset-0 bg-gradient-to-t from-skena-dark via-skena-dark/40 to-transparent"></div>
          
          {/* We omit the noise texture for simplicity or use a generic one if needed */}

          {/* Text Content di dalam Image */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block bg-skena-accent text-skena-dark text-xs font-bold font-display uppercase tracking-widest px-2 py-1 mb-4">
                Drop Vol. 04
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-skena-light uppercase leading-[0.9]">
                Gaya Lo, <br /> <span className="text-stroke-accent">Aturan Lo.</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-skena-light/80 max-w-lg font-medium">
                Arsip thrifting terkurasi untuk lo yang paham kalcer. Mulai dari boxy fit, parachute pants, sampai vintage band tees.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#koleksi"
                className="brutalist-btn inline-flex items-center gap-2 bg-skena-accent text-skena-dark font-display font-bold uppercase tracking-wide px-8 py-4 border-2 border-skena-dark"
              >
                Sikat Sekarang <ArrowDownRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
