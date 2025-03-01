import { writeContacts } from "../utils/writeContacts.js";

const removeAllContacts = async () => {
  await writeContacts([]);
  console.log("🗑 Все контакты удалены!");
};

removeAllContacts();
