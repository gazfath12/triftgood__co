export default function AdminLoading() {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-2 border-skena-border border-t-skena-accent animate-spin" />
      <span className="text-skena-muted text-[10px] font-bold uppercase tracking-widest">Accessing Database...</span>
    </div>
  );
}
