export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-skena-dark">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-skena-border animate-spin border-t-skena-accent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-skena-accent font-display font-bold text-xs animate-pulse italic">TG_CO</span>
        </div>
      </div>
      <p className="mt-8 text-skena-muted font-display font-bold uppercase text-[10px] tracking-[0.3em] animate-pulse">
        Fetching Archives...
      </p>
    </div>
  );
}
