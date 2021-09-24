const path = require("path");
const fs = require("fs");

const contactsPath = path.join(__dirname, "db", "contacts.json");
const f = fs.readFile(contactsPath, "utf-8", (error, data) => {
  if (error) {
    return;
  }
  console.log(data);
});
console.log(contactsPath);
// async function listContacts() {
//   try {
//     const getContacts = await fs.readFile(contactsPath, "utf-8");
//     const parseContacts = JSON.parse(getContacts);
//     console.log(parseContacts);
//     return parseContacts;
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// }

//   function getContactById(contactId) {
//     // ...твой код
//   }

//   function removeContact(contactId) {
//     // ...твой код
//   }

//   function addContact(name, email, phone) {
//     // ...твой код
//   }

// module.exports = { listContacts, getContactById, removeContact, addContact };
