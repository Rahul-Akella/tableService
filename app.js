const CONNECTION_URL =
  "mongodb+srv://rahul:passworddd@cluster0.nttqsn4.mongodb.net/tableDB?retryWrites=true&w=majority";
const DATABASE_NAME = "tableDB";
const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI || CONNECTION_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const express = require("express");
const table = require("./routes/table.route");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/tables", table);

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
