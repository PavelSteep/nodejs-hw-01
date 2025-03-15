import { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

export const PATH_DB = join(__dirname, "../db/db.json");
export const ENV_VARS = {
  PORT: '3000',
};
export const PORT = 3000;
export const HOST = "localhost";
export const BASE_URL = `http://${HOST}:${PORT}`;
export const BASE_API = `${BASE_URL}/api`;
export const BASE_API_V1 = `${BASE_API}/v1`;
export const BASE_API_V1_CONTACTS = `${BASE_API_V1}/contacts`;
export const BASE_API_V1_CONTACTS_ID = `${BASE_API_V1_CONTACTS}/:id`;
