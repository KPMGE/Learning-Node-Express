// sample with modules in node 
// Author: Kevin Carvalho de jesus

// importing names and functions
const greet = require('./utils');
const { kevin, laura, luana } = require('./names');

//  using imported function
greet(kevin);
greet(laura);
greet(luana);

