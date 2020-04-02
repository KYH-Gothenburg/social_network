const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Person Schema
const PersonSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    gender: String,
    address: {
      street_address: String,
      zip: String,
      city: String
    }
  },
  { collection: "Persons" }
);

// Create model
const Person = mongoose.model("person", PersonSchema);

module.exports = Person;