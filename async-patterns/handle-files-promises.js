const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./contents/test-file.txt")
  .then((data) => {
    console.log(data);
    writeFile(
      "./contents/wrote-file2.txt",
      `This is the result: ${data}`,
      (err) => {
        console.log(err);
      }
    );
  })
  .catch((err) => {
    console.log(err);
  });
