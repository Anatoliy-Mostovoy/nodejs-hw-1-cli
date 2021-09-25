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
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const findContact = contacts.find(
      (contact) => contact.id.toString() === contactId
    );
    return findContact;
  } catch (error) {
    console.log(error.message);
  }
}

//   function removeContact(contactId) {

//   }

//   function addContact(name, email, phone) {

//   }

module.exports = { listContacts, getContactById };
