import { readContacts } from "../utils/readContacts.js";

// Функция для подсчета количества контактов
export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error("Error counting contacts:", error);
    throw new Error("Error counting contacts");
  }
};

console.log(await countContacts());
