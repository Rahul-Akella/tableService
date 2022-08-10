const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TableSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
});

//Export the model
module.exports = mongoose.model("Table", TableSchema);
