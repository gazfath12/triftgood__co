"use client";

import { Trash2 } from "lucide-react";
import { deleteProductAction } from "@/lib/product-actions";
import { toast } from "sonner";

export default function DeleteProductButton({ id }: { id: string }) {
  const handleDelete = async (formData: FormData) => {
    try {
      await deleteProductAction(formData);
      toast.success("Produk berhasil dihapus!");
    } catch (e) {
      toast.error("Gagal menghapus produk.");
    }
  };

  return (
    <form action={handleDelete}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="p-2 bg-skena-dark border border-skena-border text-skena-muted hover:border-red-500 hover:text-red-500 transition-all cursor-pointer"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this product?")) {
            e.preventDefault();
          }
        }}
      >
        <Trash2 size={16} />
      </button>
    </form>
  );
}
