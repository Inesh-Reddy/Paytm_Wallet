import dotenv from "dotenv";
import { definePrismaConfig } from "prisma/config";

dotenv.config();
export default definePrismaConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasources: {
    url: process.env.DATABASE_URL ?? "mysql://root:localhost:3306/wallet",
  },
});
