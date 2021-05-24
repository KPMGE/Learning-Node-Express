// sample with modules in node
// Author: Kevin Carvalho de jesus

// importing names and functions
import greet from "./utils.mjs";
import { kevin, laura, luana } from "./names.mjs";

//  using imported function
greet(kevin);
greet(laura);
greet(luana);
