// sample with DELETE method

const express = require("express");
const app = express();
const { people } = require("./data");

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  // find person by id
  const person = people.find((person) => person.id === Number(id));

  // if person not found
  if (!person) {
    return res.status(404).json({success: false, message: `No person with id ${id}`});
  }

  // delete found person
  const newPeople = people.filter((person) => {
    return person.id !== Number(id);
  });

  res.status(200).json({ success: true, data: newPeople});
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});