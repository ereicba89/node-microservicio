const express = require("express");
const app = express();

const response = {
  data: [],
  service: "Monolitic Service",
  architecture: "Monolitic",
};

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v1/users", (req, res) => {
  response.data.push("Jose", "Cacho", "Jeremy");
  return res.send(response);
});

app.get("/api/v1/books", (req, res) => {
  response.data.push("Biblia", "Coran", "Little prince");
  return res.send(response);
});

app.get("/api/v1/cars", (req, res) => {
  response.data.push("BMW", "Ferrari", "Audi");
  return res.send(response);
});

module.exports = app;
