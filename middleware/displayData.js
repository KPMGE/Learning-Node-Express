const printDataAboutRequest = (req, res, next) => {
  // getting data
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  const { foo, bar } = req.query;

  // if query used, displays it
  if (foo && bar) {
    console.log(`foo: ${foo}, bar: ${bar}`);
  }

  console.log(method, url, time);

  next();
};

module.exports = { printDataAboutRequest };
