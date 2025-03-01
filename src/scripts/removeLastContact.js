import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log("❌ Нет контактов для удаления!");
    return;
  }
  const removed = contacts.pop();
  await writeContacts(contacts);
  console.log("🗑 Удален контакт:", removed);
};

removeLastContact();
