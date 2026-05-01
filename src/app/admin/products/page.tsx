import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Edit2, Plus, Search } from "lucide-react";
import { deleteProductAction } from "@/lib/product-actions";
import DeleteProductButton from "@/components/DeleteProductButton";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-skena-light uppercase tracking-tighter">
            Manage <span className="text-skena-accent">Inventory</span>
          </h1>
          <p className="text-skena-muted mt-2 uppercase text-xs tracking-widest">Total Products: {products.length}</p>
        </div>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 bg-skena-accent text-skena-dark px-6 py-3 font-bold uppercase tracking-widest text-xs brutalist-btn"
        >
          <Plus size={16} />
          New Product
        </Link>
      </div>

      {/* Filter / Search Placeholder */}
      <div className="bg-skena-card border border-skena-border p-4 flex items-center gap-4">
        <Search size={20} className="text-skena-muted" />
        <input 
          type="text" 
          placeholder="SEARCH PRODUCTS..." 
          className="bg-transparent border-none outline-none text-skena-light w-full uppercase text-xs tracking-widest font-bold"
        />
      </div>

      <div className="overflow-x-auto border-2 border-skena-border bg-skena-card">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-skena-border bg-skena-dark">
              <th className="p-4 uppercase text-[10px] tracking-widest text-skena-muted font-bold">Image</th>
              <th className="p-4 uppercase text-[10px] tracking-widest text-skena-muted font-bold">Name</th>
              <th className="p-4 uppercase text-[10px] tracking-widest text-skena-muted font-bold">Category</th>
              <th className="p-4 uppercase text-[10px] tracking-widest text-skena-muted font-bold">Price</th>
              <th className="p-4 uppercase text-[10px] tracking-widest text-skena-muted font-bold">Stock</th>
              <th className="p-4 uppercase text-[10px] tracking-widest text-skena-muted font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-skena-border">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-skena-dark/50 transition-colors group">
                <td className="p-4">
                  <div className="w-12 h-12 bg-skena-dark border border-skena-border overflow-hidden">
                    <img 
                      src={product.images[0] || "https://placehold.co/100"} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </td>
                <td className="p-4">
                  <p className="font-bold text-skena-light uppercase text-xs tracking-tight">{product.name}</p>
                  {product.isFeatured && (
                    <span className="text-[8px] bg-skena-accent text-skena-dark px-1 py-0.5 font-bold uppercase mt-1 inline-block">Featured</span>
                  )}
                </td>
                <td className="p-4 text-xs text-skena-muted uppercase tracking-widest">{product.category}</td>
                <td className="p-4 font-mono text-xs">IDR {product.price.toLocaleString()}</td>
                <td className="p-4">
                  <span className={`text-xs font-bold ${product.stock > 0 ? "text-green-500" : "text-red-500"}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="p-2 bg-skena-dark border border-skena-border text-skena-light hover:border-skena-accent hover:text-skena-accent transition-all"
                    >
                      <Edit2 size={16} />
                    </Link>
                    <DeleteProductButton id={product.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
