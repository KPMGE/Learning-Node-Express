const { people } = require("./data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const addPerson = (req, res) => {
  const { name } = req.body;
  const lastId = people[people.length - 1].id;
  const newPerson = {
    id: lastId + 1,
    name: name,
  };

  if (!name) {
    return res
      .status(404)
      .json({ success: false, message: "please provide a name value" });
  }

  res.status(200).json({ success: true, data: [...people, newPerson] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(404).json({ success: false, message: `No people wth id ${id}` });
  }

  const newPeople = people.filter((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id ${id}` });
  }

  const newPeople = people.filter((person) => {
    if (person.id !== Number(id)) {
      return person;
    }
  });

  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  addPerson,
  updatePerson,
  deletePerson,
};
