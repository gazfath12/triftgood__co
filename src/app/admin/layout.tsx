"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, LogOut, Home } from "lucide-react";
import { logoutAction } from "@/lib/actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
  ];

  return (
    <div className="min-h-screen bg-skena-dark flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-skena-border bg-skena-card hidden md:flex flex-col">
        <div className="p-6 border-b border-skena-border">
          <h2 className="text-2xl font-display font-bold text-skena-accent italic">TRIFFGOOD</h2>
          <p className="text-[10px] text-skena-muted uppercase tracking-widest mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 p-3 transition-all duration-200 ${
                  isActive 
                    ? "bg-skena-accent text-skena-dark font-bold" 
                    : "text-skena-light hover:bg-skena-border"
                }`}
              >
                <Icon size={20} />
                <span className="uppercase text-xs tracking-widest">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-skena-border space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 p-3 text-skena-muted hover:text-skena-accent transition-colors w-full uppercase text-[10px] tracking-widest"
          >
            <Home size={16} />
            View Store
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-500/10 transition-all w-full uppercase text-[10px] tracking-widest font-bold"
            >
              <LogOut size={16} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-skena-border bg-skena-card/50 backdrop-blur-md flex items-center justify-between px-8 md:hidden">
          <h2 className="text-xl font-display font-bold text-skena-accent italic">TRIFFGOOD</h2>
          <button className="text-skena-accent">
             {/* Mobile menu toggle would go here */}
             <LayoutDashboard size={24} />
          </button>
        </header>
        
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
