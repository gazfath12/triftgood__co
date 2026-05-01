import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await prisma.product.findMany({
    select: { id: true, updatedAt: true },
  });

  const productUrls = products.map((product) => ({
    url: `https://triftgood-co.vercel.app/products/${product.id}`,
    lastModified: product.updatedAt,
  }));

  return [
    {
      url: "https://triftgood-co.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...productUrls,
  ];
}
