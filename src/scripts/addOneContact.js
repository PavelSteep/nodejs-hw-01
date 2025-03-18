import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

// Функция для добавления одного контакта
export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    
    const newContact = createFakeContact(); // Генерация контакта с помощью утилиты
    
    contacts.push(newContact);
    
    // Запись обновленного массива в файл через writeContacts
    await writeContacts(contacts);
    
    console.log("Contact added successfully:", newContact);
  } catch (error) {
    console.error("Error adding contact:", error);
    throw new Error("Error adding contact");
  }
};

addOneContact();
