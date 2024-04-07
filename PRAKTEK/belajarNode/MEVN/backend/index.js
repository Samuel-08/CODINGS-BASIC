var Express = require("express");
var MongoClient = require("mongodb").MongoClient; // Perbaikan penulisan di sini
var cors = require("cors");

var app = Express();
app.use(cors());

var CONNECTION_STRING =
  "mongodb+srv://hizkiadeifidus08:QEhpemtpYTA4@cluster0.uxvmmyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME = "todoappdb";
var database;

app.listen(27017, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    // Perbaikan penulisan di sini
    database = client.db(DATABASENAME);
    console.log("oke sudah terhubung");
  });
});
