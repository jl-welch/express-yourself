// database connection
const mongoose = require("mongoose");
const mongoDB  = "mongodb://localhost/builder";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
