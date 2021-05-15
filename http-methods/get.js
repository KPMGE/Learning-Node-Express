// sample with GET method

const express = require("express");
const app = express();
const { people } = require("./data");

// get all people
app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

// get a people by id
app.get("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const idPerson = people.find((person) => person.id === Number(id));

  if (idPerson) {
    return res.status(200).json(idPerson);
  }

  res.status(404).json({ success: false, message: `No person with id ${id}` });
});

// search a people
app.get("/api/search/", (req, res) => {
  const { name } = req.query;

  // if name don't provided
  if (!name) {
    return res
      .status(404)
      .json({ success: false, message: "Please, provide search param" });
  }

  // trying to find person
  const person = people.find(
    (person) => person.name.toLowerCase() === name.toLocaleLowerCase()
  );

  // if person not found
  if (!person) {
    res
      .status(404)
      .json({ success: false, message: `No person with name ${name}` });
  }

  res.status(200).json(person);
});

app.listen(5000, () => {
  console.log("Listening on  port 5000...");
});

