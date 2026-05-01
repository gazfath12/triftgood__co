"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProductAction(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const category = formData.get("category") as string;
  const stock = parseInt(formData.get("stock") as string);
  const isFeatured = formData.get("isFeatured") === "on";
  const imageUrls = (formData.get("images") as string).split(",").map(url => url.trim()).filter(url => url !== "");

  if (!name || isNaN(price) || !category) {
    return { error: "Please fill all required fields correctly." };
  }

  try {
    await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
        stock,
        isFeatured,
        images: imageUrls,
      },
    });
  } catch (e) {
    return { error: "Failed to create product." };
  }

  revalidatePath("/admin/products");
  revalidatePath("/");
  redirect("/admin/products");
}

export async function updateProductAction(prevState: any, formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const category = formData.get("category") as string;
  const stock = parseInt(formData.get("stock") as string);
  const isFeatured = formData.get("isFeatured") === "on";
  const imageUrls = (formData.get("images") as string).split(",").map(url => url.trim()).filter(url => url !== "");

  if (!id || !name || isNaN(price) || !category) {
    return { error: "Please fill all required fields correctly." };
  }

  try {
    await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price,
        category,
        stock,
        isFeatured,
        images: imageUrls,
      },
    });
  } catch (e) {
    return { error: "Failed to update product." };
  }

  revalidatePath("/admin/products");
  revalidatePath("/");
  redirect("/admin/products");
}

export async function deleteProductAction(formData: FormData) {
  const id = formData.get("id") as string;

  if (!id) return;

  try {
    await prisma.product.delete({
      where: { id },
    });
  } catch (e) {
    console.error("Delete failed", e);
  }

  revalidatePath("/admin/products");
  revalidatePath("/");
}
