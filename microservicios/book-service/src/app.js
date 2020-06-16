const express = require("express");
const app = express();

const response = {
  data: [],
  service: "Book Service",
  architecture: "Microservicio",
};

const logger = (message) => console.log("Book service " + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/books", (req, res) => {
  response.data.push("Biblia", "Coran", "Little prince");
  logger("Get books data");
  return res.send(response);
});

module.exports = app;
