// implementation with async await, syntax very clear

const { readFile, writeFile } = require('fs').promises

const start = async(path) => {
  try {
    const data = await readFile('./contents/test-file.txt', 'utf8');
    console.log(data);
    writeFile('./contents/wrote-file3.txt', `Hey, your result is: ${data}`);
  } catch(error) {
    console.log(error);
  }
}

start();
