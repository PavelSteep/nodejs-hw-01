import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async () => {
  const contacts = Array.from({ length: 5 }, createFakeContact);
  await writeContacts(contacts);
  console.log("✅ Сгенерировано 5 контактов!");
};

generateContacts();
