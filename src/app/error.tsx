"use client";

import { useEffect } from "react";
import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-skena-dark flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-8xl font-display font-bold text-red-600 italic">ERR_</h1>
      <h2 className="text-4xl font-display font-bold text-skena-light uppercase tracking-tighter mt-4">
        Ada <span className="text-red-500">Problem</span> Nih.
      </h2>
      <p className="text-skena-muted mt-6 max-w-md uppercase text-xs tracking-widest font-bold">
        Sistem lagi pusing. Coba lo refresh atau tunggu bentar baru sikat lagi.
      </p>
      
      <button
        onClick={() => reset()}
        className="mt-12 brutalist-btn inline-flex items-center gap-3 bg-skena-light text-skena-dark font-display font-bold uppercase tracking-widest px-8 py-4 border-2 border-black"
      >
        <RefreshCcw size={20} />
        Coba Lagi
      </button>
    </div>
  );
}
