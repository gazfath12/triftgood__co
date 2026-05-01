import ProductForm from "@/components/AdminProductForm";

export default function NewProductPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-skena-light uppercase tracking-tighter">
          Add New <span className="text-skena-accent">Product</span>
        </h1>
        <p className="text-skena-muted mt-2 uppercase text-xs tracking-widest">Create a new entry in your inventory.</p>
      </div>

      <ProductForm />
    </div>
  );
}
