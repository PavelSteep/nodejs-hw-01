import express from "express";
import pino from "pino-http";
import cors from "cors";
import dotenv from 'dotenv';
import { generateContacts } from "./scripts/generateContacts.js";
import { addOneContact } from "./scripts/addOneContact.js";
import { getAllContacts } from "./scripts/getAllContacts.js";
import { countContacts } from "./scripts/countContacts.js";
import { removeLastContact } from "./scripts/removeLastContact.js";
import { removeAllContacts } from "./scripts/removeAllContacts.js";
import { ENV_VARS } from "./constants/contacts.js";
import { startServer } from "./server.js";


// Запуск сервера
startServer();

console.log("Node.js Application started!");

dotenv.config();


(async () => {
  await addOneContact();
  await generateContacts(5);
  console.log(await getAllContacts());
  console.log(`Total number of contacts: ${await countContacts()}`);
  await removeLastContact();
  await removeAllContacts();
})();

console.log("Node.js Application completed!");
