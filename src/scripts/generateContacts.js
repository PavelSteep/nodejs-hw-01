import { addOneContact } from "./addOneContact.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const generateContacts = async (number) => {
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    await addOneContact(newContact);
  }
};

generateContacts(5);
