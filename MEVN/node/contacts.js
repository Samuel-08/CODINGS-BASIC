const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}
// async
const tulisPertanyaan = function (pertanyaan) {
  return new Promise(function (resolve, reject) {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};
const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const fileData = fs.readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(fileData);

  contacts.push(contact);
  // Membuat folder file secara sinkron
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts, null, 2));

  console.log("Terimakasih ^_^");
  rl.close();
};
module.exports = {
  tulisPertanyaan,
  simpanContact,
};
