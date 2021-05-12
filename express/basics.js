// basic server with express

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => {
  console.log("Listenig on port 5000...");
});
