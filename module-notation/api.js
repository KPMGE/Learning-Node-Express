// we can use import notation, so to do that we need to add
// "type": "module" in our pakage.json

import express from "express";
import products from "./data.js";
const app = express();

app.get("/api/v1/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
