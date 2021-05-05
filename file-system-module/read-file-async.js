// Reading files with async functions

const { readFile, writeFile } = require('fs');

readFile('./some-folder/first-file.txt', 'utf-8', (error, result) => {
  if (error) {
    console.log(error);
    return;
  } 

  const firstResult = result; 
  console.log(firstResult);

  readFile('./some-folder/second-file.txt', 'utf-8', (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    const secondResult = result;
    console.log(secondResult);
    
    console.log("Saving results....");
    writeFile('./result-async.txt', `The result is ${firstResult}\n${secondResult}`, (error) => {
      if (error) {
        console.log(error);
      }
    });
  });
});
