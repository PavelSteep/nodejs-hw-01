import { join } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config(); // Загружаем переменные из .env файла

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

export const PATH_DB = join(__dirname, "../db/db.json");
export const ENV_VARS = {
  PORT: process.env.PORT || "3000",
};
export const PORT = process.env.PORT || 3000; // Получаем значение из переменной окружения или используем 3000 по умолчанию
export const HOST = "localhost";
export const BASE_URL = `http://${HOST}:${PORT}`;
export const BASE_API = `${BASE_URL}/api`;
export const BASE_API_V1 = `${BASE_API}/v1`;
export const BASE_API_V1_CONTACTS = `${BASE_API_V1}/contacts`;
export const BASE_API_V1_CONTACTS_ID = `${BASE_API_V1_CONTACTS}/:id`;
