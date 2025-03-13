import { addOneContact } from "./addOneContact.js";

export const generateContacts = async (number) => {
  const getRandomName = () => {
    const names = ['John', 'Jane', 'Alex', 'Michael', 'Sarah'];
    return names[Math.floor(Math.random() * names.length)];
  };

  const getRandomPhone = () => {
    return `123-456-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const getRandomEmail = (name) => {
    return `${name.toLowerCase()}@example.com`;
  };

  for (let i = 0; i < number; i++) {
    const name = getRandomName();
    const newContact = {
      id: `${Date.now()}-${i}`,
      name: name,
      phone: getRandomPhone(),
      email: getRandomEmail(name),
    };
    await addOneContact(newContact);
  }
};

// Если файл запущен напрямую, выполнить генерацию:
if (process.argv[1].endsWith("generateContacts.js")) {
  generateContacts(5);
}
