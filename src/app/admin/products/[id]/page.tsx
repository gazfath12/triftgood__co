import { prisma } from "@/lib/prisma";
import ProductForm from "@/components/AdminProductForm";
import { notFound } from "next/navigation";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-skena-light uppercase tracking-tighter">
          Edit <span className="text-skena-accent">Product</span>
        </h1>
        <p className="text-skena-muted mt-2 uppercase text-xs tracking-widest">Update existing product information.</p>
      </div>

      <ProductForm product={product} />
    </div>
  );
}
