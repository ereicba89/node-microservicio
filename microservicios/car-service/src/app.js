const express = require("express");
const app = express();

const response = {
  data: [],
  service: "Car Service",
  architecture: "Microservicio",
};

const logger = (message) => console.log("Car service" + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/cars", (req, res) => {
  response.data.push("BMW", "Ferrari", "Audi");
  logger("Get cars data");
  return res.send(response);
});

module.exports = app;
