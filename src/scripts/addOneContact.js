import { PATH_DB } from "../constants/contacts.js";
import { readContacts } from "../utils/readContacts.js";
import fs from 'fs/promises';

// Функция для добавления одного контакта
export const addOneContact = async (newContact) => {
  try {
    const contacts = await readContacts();
    
    contacts.push(newContact);
    
    // Запись обновленного массива в файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    
    console.log("Contact added successfully");
  } catch (error) {
    console.error("Error adding contact:", error);
    throw new Error("Error adding contact");
  }
};

const newContact = {
  id: "123",
  name: "John Doe",
  phone: "123-456-7890",
  email: "johndoe@example.com",
};

addOneContact(newContact);
