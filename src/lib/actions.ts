"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Username and password are required" };
  }

  const admin = await prisma.admin.findUnique({
    where: { username },
  });

  if (!admin) {
    return { error: "Invalid credentials" };
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    return { error: "Invalid credentials" };
  }

  // Create session
  const expires = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours
  const session = await encrypt({ user: { id: admin.id, username: admin.username }, expires });

  const cookieStore = await cookies();
  cookieStore.set("session", session, { expires, httpOnly: true, secure: process.env.NODE_ENV === "production" });

  redirect("/admin/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.set("session", "", { expires: new Date(0) });
  redirect("/admin/login");
}
