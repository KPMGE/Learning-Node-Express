// Reading files with sync functions

const { readFileSync, writeFileSync } = require("fs");

firsFile = readFileSync("./some-folder/first-file.txt", "utf-8");
secondFile = readFileSync("./some-folder/second-file.txt", "utf-8");

console.log(firsFile);
console.log(secondFile);

console.log("Writing in the result-sync.txt file...");

// we can use 'a' flag to switch to append mode
writeFileSync(
  "./result-sync.txt",
  `The result is: ${firsFile}\n ${secondFile}`,
  {flag: 'a'}
);
