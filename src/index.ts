import { config } from "dotenv";

configDotenv();

console.log(`Database Url: ${process.env.DATABASE_URL}`);

function configDotenv() {
  config();
}
