"use client";

import { useActionState, useState, useEffect } from "react";
import { createProductAction, updateProductAction } from "@/lib/product-actions";
import ImageUpload from "./ImageUpload";
import { toast } from "sonner";

interface ProductFormProps {
  product?: any; // For editing
}

export default function ProductForm({ product }: ProductFormProps) {
  const [images, setImages] = useState<string[]>(product?.images || []);
  const action = product ? updateProductAction : createProductAction;
  const [state, formAction, isPending] = useActionState(action, null);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-6 max-w-2xl bg-skena-card border-2 border-skena-border p-8">
      {product && <input type="hidden" name="id" value={product.id} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-skena-muted mb-2 uppercase text-[10px] font-bold tracking-widest">Product Name</label>
          <input
            type="text"
            name="name"
            defaultValue={product?.name}
            className="w-full bg-skena-dark border-2 border-skena-border p-4 outline-none focus:border-skena-accent transition-colors uppercase text-sm font-bold tracking-tight"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-skena-muted mb-2 uppercase text-[10px] font-bold tracking-widest">Description</label>
          <textarea
            name="description"
            defaultValue={product?.description}
            rows={4}
            className="w-full bg-skena-dark border-2 border-skena-border p-4 outline-none focus:border-skena-accent transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-skena-muted mb-2 uppercase text-[10px] font-bold tracking-widest">Price (IDR)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-skena-muted font-bold text-sm">Rp</span>
            <input
              type="number"
              name="price"
              defaultValue={product?.price}
              className="w-full bg-skena-dark border-2 border-skena-border p-4 pl-12 outline-none focus:border-skena-accent transition-colors font-mono text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-skena-muted mb-2 uppercase text-[10px] font-bold tracking-widest">Category</label>
          <select
            name="category"
            defaultValue={product?.category || "T-Shirts"}
            className="w-full bg-skena-dark border-2 border-skena-border p-4 outline-none focus:border-skena-accent transition-colors uppercase text-sm font-bold tracking-widest"
          >
            <option value="T-Shirts">T-Shirts</option>
            <option value="Hoodies">Hoodies</option>
            <option value="Pants">Pants</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div>
          <label className="block text-skena-muted mb-2 uppercase text-[10px] font-bold tracking-widest">Stock</label>
          <input
            type="number"
            name="stock"
            defaultValue={product?.stock || 0}
            className="w-full bg-skena-dark border-2 border-skena-border p-4 outline-none focus:border-skena-accent transition-colors font-mono text-sm"
            required
          />
        </div>

        <div className="flex items-center gap-4 h-full pt-6">
          <label className="flex items-center gap-4 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                name="isFeatured"
                defaultChecked={product?.isFeatured}
                className="sr-only"
              />
              <div className={`w-12 h-12 border-2 ${product?.isFeatured ? "border-skena-accent bg-skena-accent/10" : "border-skena-border bg-skena-dark"} group-hover:border-skena-accent transition-all flex items-center justify-center`}>
                <div className={`w-5 h-5 bg-skena-accent transition-transform ${product?.isFeatured ? "scale-100" : "scale-0"}`} />
                <style jsx>{`
                  input:checked + div > div { transform: scale(1); }
                  input:checked + div { border-color: var(--color-skena-accent); background-color: rgba(212, 255, 0, 0.1); }
                `}</style>
              </div>
            </div>
            <div className="flex flex-col">
               <span className="uppercase text-[10px] font-bold tracking-widest text-skena-muted group-hover:text-skena-accent transition-colors">Featured Item</span>
               <span className="text-[8px] text-skena-muted uppercase italic">Show on latest drop top</span>
            </div>
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="block text-skena-muted mb-2 uppercase text-[10px] font-bold tracking-widest">Product Images</label>
          <ImageUpload 
            value={images}
            onChange={(newImages) => setImages(newImages)}
            onRemove={(url) => setImages(images.filter((img) => img !== url))}
          />
          <input
            type="hidden"
            name="images"
            value={images.join(",")}
          />
          <p className="text-[9px] text-skena-muted mt-2 italic italic-widest uppercase">Click "Upload" to add multiple product photos.</p>
        </div>
      </div>

      {state?.error && (
        <p className="text-red-500 text-xs font-bold bg-red-500/10 p-3 border border-red-500/20 uppercase tracking-widest">
          {state.error}
        </p>
      )}

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="flex-1 bg-skena-accent text-skena-dark p-4 font-bold uppercase tracking-widest text-xs brutalist-btn disabled:opacity-50"
        >
          {isPending ? "Saving..." : (product ? "Update Product" : "Create Product")}
        </button>
        <a 
          href="/admin/products"
          className="bg-skena-dark border border-skena-border text-skena-light p-4 px-8 font-bold uppercase tracking-widest text-xs hover:border-skena-accent transition-colors"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
