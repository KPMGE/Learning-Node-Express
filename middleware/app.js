// simple example of express and middlewares

const express = require("express");
const app = express();
const { printDataAboutRequest } = require("./displayData");

// this is used in all app.get
// app.use(printDataAboutRequest);

// this is used in every /api/....
app.use("/api", printDataAboutRequest);

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.get("/api/products", (req, res) => {
  res.status(200).send("Products");
});

app.get("/api/Items", (req, res) => {
  res.status(200).send("Items");
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
