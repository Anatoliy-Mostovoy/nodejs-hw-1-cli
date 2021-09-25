const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  try {
    const readContacts = await fs.readFile(
      contactsPath,
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("There is no contacts in this path");
        }
        return data;
      }
    );

    const parseContacts = JSON.parse(readContacts);
    return parseContacts;
  } catch (error) {
    console.log("SORRY, TRY AGAIN");
  }
}

//   function getContactById(contactId) {

//   }

//   function removeContact(contactId) {

//   }

//   function addContact(name, email, phone) {

//   }

module.exports = { listContacts };
