import { prisma } from "@/lib/prisma";
import { Package, ShoppingBag, Users, DollarSign } from "lucide-react";

export default async function DashboardPage() {
  const [productCount, featuredCount] = await Promise.all([
    prisma.product.count(),
    prisma.product.count({ where: { isFeatured: true } }),
  ]);

  const stats = [
    { name: "Total Products", value: productCount, icon: Package, color: "text-blue-500" },
    { name: "Featured Items", value: featuredCount, icon: ShoppingBag, color: "text-skena-accent" },
    { name: "Categories", value: 4, icon: Users, color: "text-purple-500" },
    { name: "Est. Value", value: "IDR 5.2M", icon: DollarSign, color: "text-green-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-skena-light uppercase tracking-tighter">
          Dashboard <span className="text-skena-accent">Overview</span>
        </h1>
        <p className="text-skena-muted mt-2 uppercase text-xs tracking-widest">Welcome back, Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-skena-card border-2 border-skena-border p-6 hover:border-skena-accent transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 bg-skena-dark border border-skena-border group-hover:border-skena-accent transition-colors`}>
                  <Icon size={24} className={stat.color} />
                </div>
              </div>
              <p className="text-skena-muted text-[10px] uppercase tracking-widest font-bold">{stat.name}</p>
              <h3 className="text-3xl font-bold text-skena-light mt-1">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-skena-card border-2 border-skena-border p-8">
          <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-tight italic">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="/admin/products/new" className="bg-skena-accent text-skena-dark p-4 font-bold text-center uppercase tracking-widest text-xs brutalist-btn">
              Add Product
            </a>
            <a href="/admin/products" className="bg-skena-dark border border-skena-border text-skena-light p-4 font-bold text-center uppercase tracking-widest text-xs hover:border-skena-accent transition-colors">
              Manage Products
            </a>
          </div>
        </div>

        <div className="bg-skena-card border-2 border-skena-border p-8">
          <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-tight italic">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-skena-muted text-xs italic">System initialized and database seeded successfully.</p>
            <div className="h-[1px] bg-skena-border w-full"></div>
            <p className="text-skena-muted text-xs italic">Admin session started.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
