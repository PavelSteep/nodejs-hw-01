import express from "express";
import pino from "pino-http";
import cors from "cors";
import { addOneContact } from "./scripts/addOneContact.js";
import { countContacts } from "./scripts/countContacts.js";
import { generateContacts } from "./scripts/generateContacts.js";
import { getAllContacts } from "./scripts/getAllContacts.js";
import { removeAllContacts } from "./scripts/removeAllContacts.js";
import { removeLastContact } from "./scripts/removeLastContact.js";
import { getEnvVar } from "./utils/getEnvVar.js";
import { ENV_VARS } from "./constants/contacts.js";

const PORT = Number(getEnvVar('PORT', '3000')); // Можно задать дефолтное значение прямо в коде

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  pino({
    transport: {
      target: "pino-pretty",
    },
  }),
);

app.get("/", async (req, res) => {
  res.json({
    message: 'Hello world!',
  });
});

// POST-запрос для добавления нового контакта
app.post("/contacts", async (req, res) => {
  try {
    const newContact = req.body; // Получаем новый контакт из тела запроса
    await addOneContact(newContact); // Добавляем контакт в базу данных
    res.status(201).json({
      message: 'Contact added successfully',
      contact: newContact,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding contact',
      error: error.message,
    });
  }
});

// Подсчет всех контактов
app.get("/contacts/count", async (req, res) => {
  try {
    const count = await countContacts();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({
      message: 'Error counting contacts',
      error: error.message,
    });
  }
});

// Генерация случайных контактов
app.post("/contacts/generate/:number", async (req, res) => {
  try {
    const { number } = req.params;
    await generateContacts(Number(number));
    res.status(201).json({
      message: `${number} contacts generated successfully`,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error generating contacts',
      error: error.message,
    });
  }
});

// GET-запрос для получения всех контактов
app.get("/contacts", async (req, res) => {
  const contacts = await getAllContacts();
  res.json(contacts);
});

// Удаление всех контактов
app.delete("/contacts", async (req, res) => {
  try {
    await removeAllContacts();
    res.status(200).json({
      message: 'All contacts removed successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error removing all contacts',
      error: error.message,
    });
  }
});

// Удаление последнего контакта
app.delete("/contacts/last", async (req, res) => {
  try {
    await removeLastContact();
    res.status(200).json({
      message: 'Last contact removed successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error removing last contact',
      error: error.message,
    });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("Node.js Application started!");

(async () => {
  await addOneContact();
  await generateContacts(5);
  console.log(await getAllContacts());
  console.log(`Total number of contacts: ${await countContacts()}`);
  await removeLastContact();
  await removeAllContacts();
})();

console.log("Node.js Application completed!");
