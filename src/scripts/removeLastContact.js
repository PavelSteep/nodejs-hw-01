import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
import fs from "fs/promises";

// Функция для удаления последнего контакта
export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop(); // Удаляем последний контакт
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf-8"); // Записываем обновленные данные в файл
      console.log("Last contact removed successfully");
    } else {
      console.log("No contacts to remove");
    }
  } catch (error) {
    console.error("Error removing last contact:", error);
    throw new Error("Error removing last contact");
  }
};

// Явный вызов функции, чтобы `npm run remove-last` выполнялся корректно
removeLastContact();
