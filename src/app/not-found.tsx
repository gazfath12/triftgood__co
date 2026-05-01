import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-skena-dark flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-9xl font-display font-bold text-skena-accent italic animate-pulse">404</h1>
      <h2 className="text-4xl font-display font-bold text-skena-light uppercase tracking-tighter mt-4">
        Halaman <span className="text-stroke-accent">Ilang Bro.</span>
      </h2>
      <p className="text-skena-muted mt-6 max-w-md uppercase text-xs tracking-widest font-bold">
        Mungkin udah laku atau emang gak ada. Jangan panik, mending balik ke katalog sikat barang lain.
      </p>
      
      <Link
        href="/"
        className="mt-12 brutalist-btn inline-flex items-center gap-3 bg-skena-accent text-skena-dark font-display font-bold uppercase tracking-widest px-8 py-4 border-2 border-black"
      >
        <MoveLeft size={20} />
        Balik ke Beranda
      </Link>
    </div>
  );
}
