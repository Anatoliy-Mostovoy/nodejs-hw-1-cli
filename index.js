const chalk = require("chalk");
const { listContacts, getContactById } = require("./contacts.js");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      (async () => {
        try {
          const contacts = await listContacts();
          if (contacts.length <= 0) {
            return console.log(chalk("SORRY, THERE IS NO CONTACTS"));
          }
          return console.table(contacts);
        } catch (error) {
          console.log(`SORRY, WE HAVE ERROR: ${error.message}`);
        }
      })();
      break;

    case "get":
      (async () => {
        try {
          const contactById = await getContactById(id);
          if (contactById) {
            console.log(chalk.blue("ITS YOUR CONTACT"));
            console.table(contactById);
            return;
          }
          console.log(chalk.red("THERE IS NO CONTACTS WITH THIS ID"));
          return;
        } catch (err) {
          console.log(err.message);
        }
      })();
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
