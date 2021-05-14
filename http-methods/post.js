const express = require("express");
const app = express();
let { people } = require("./data");

// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name value" });
  }

  const lastId = people[people.length - 1].id;
  const person = {
    id: lastId + 1,
    name: name,
  };

  res.status(200).json({ success: true, data: [...people, person] });
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
