const express = require("express");
const app = express();
const people = require("./router-people");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// using rout /api/people for all metods (get, post, put, delete)
app.use("/api/people", people);

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
