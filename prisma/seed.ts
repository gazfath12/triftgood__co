const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminPassword = process.env.ADMIN_PASSWORD || "admin";
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  // Upsert admin
  await prisma.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
    },
  });

  // Create fake products
  const products = [
    {
      name: "Vintage 90s Oversized Hoodie",
      description: "A cozy oversized hoodie from the 90s. Perfect for a skena look.",
      price: 250000,
      category: "Hoodies",
      images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7"],
      stock: 5,
      isFeatured: true,
    },
    {
      name: "Cargo Pants Olive Drab",
      description: "Classic cargo pants with multiple pockets. Durable and stylish.",
      price: 350000,
      category: "Pants",
      images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1"],
      stock: 10,
      isFeatured: true,
    },
    {
      name: "Graphic Tee 'Cyber' Black",
      description: "Streetwear graphic tee with a cyber-punk aesthetic.",
      price: 150000,
      category: "T-Shirts",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"],
      stock: 20,
    },
    {
      name: "Bucket Hat Corduroy",
      description: "Retro corduroy bucket hat in mustard yellow.",
      price: 85000,
      category: "Accessories",
      images: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531"],
      stock: 15,
    },
  ];

  for (const product of products) {
    // Check if product exists to avoid duplicates on re-seed
    const existing = await prisma.product.findFirst({ where: { name: product.name } });
    if (!existing) {
      await prisma.product.create({
        data: product,
      });
    }
  }

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
