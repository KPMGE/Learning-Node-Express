// working with external files with express

const express = require("express");
const app = express();

// files that won't be changed
app.use(express.static("./page-resources"));

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
