// sample of __dirname and __filename using ES6 sintax

import { fileURLToPath } from "url";
import { dirname } from "path";

console.log(`import.meta.ur: ${import.meta.url}`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);
