// sample using CommonJs and ES6 sintaxes together

const { kevin, luana, laura } = require("./names.js");

async function importFunc() {
  const { greet } = await import("./utils.mjs");

  greet(kevin);
  greet(laura);
  greet(luana);
}

importFunc().catch((err) => console.log(err));
