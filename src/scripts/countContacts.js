import { readContacts } from "../utils/readContacts.js";

const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`📊 Number of contacts: ${contacts.length}`);
};

countContacts();
