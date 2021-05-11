// this is a bad code because it's not clean and it can get confusing very quickly

const { readFile, writeFile } = require("fs");

readFile("./contents/test-file.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(data);

  writeFile(
    "./contents/wrote-file.txt",
    `Hey, your result is: ${data}`,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
