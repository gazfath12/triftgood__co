import { ArrowUpRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      title: "Tops",
      category: "T-Shirts",
      img: "/categories/tops.png",
      alt: "Kaos Vintage",
    },
    {
      title: "Outerwear",
      category: "Hoodies",
      img: "/categories/outerwear.png",
      alt: "Hoodie Vintage",
    },
    {
      title: "Bottoms",
      category: "Pants",
      img: "/categories/bottoms.png",
      alt: "Celana Kargo",
    },
    {
      title: "Essentials",
      category: "Accessories",
      img: "/categories/essentials.png",
      alt: "Topi Trucker",
    },
  ];

  return (
    <section id="kategori" className="py-10 border-y border-skena-border bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              Katalog <span className="text-skena-accent">Archive</span>
            </h2>
          </div>
          <p className="text-skena-muted text-sm uppercase tracking-widest font-display">
            Pilih Senjata Lo
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={`/?search=${cat.category}#koleksi`}
              className="group relative aspect-square border border-skena-border bg-skena-card overflow-hidden block"
            >
              <img
                src={cat.img}
                alt={cat.alt}
                className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-skena-dark/40 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <h3 className="text-3xl font-display font-bold uppercase tracking-tighter text-skena-light group-hover:text-skena-accent transition-colors">
                  {cat.title}
                </h3>
                <div className="w-10 h-10 border border-skena-light rounded-full flex items-center justify-center group-hover:border-skena-accent group-hover:text-skena-accent transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
