// sample with put method

const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

app.put("/api/people/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  console.log("name:", name);

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
