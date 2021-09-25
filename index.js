const { listContacts } = require("./contacts.js");
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
            console.log("SORRY, THERE IS NO CONTACTS");
          }
          return console.table(contacts);
        } catch (error) {
          console.log(`SORRY, WE HAVE ERROR: ${error.message}`);
        }
      })();
      // listContacts()
      //   .then((contacts) => console.table(contacts))
      //   .catch(console.error);

      break;

    case "get":
      // ... id
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
