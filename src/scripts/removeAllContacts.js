import { PATH_DB } from "../constants/contacts.js";
import fs from 'fs/promises';

// Функция для удаления всех контактов
export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');  // Очистка файла
    console.log("All contacts removed successfully");
  } catch (error) {
    console.error("Error removing all contacts:", error);
    throw new Error("Error removing all contacts");
  }
};
