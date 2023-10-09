// Node js is a javscript runtime environment that allows us to run javascript outside of the browser
// it is built on the V8 engine which is the same engine that chrome uses to run javascript and runs on server side

// How NodeJS differs from vanilla javascript
// 1. Node runs on a server and not in a browser (backend not frontend)
// 2. The console is the terminal window and not the browser console
// Pressing Ctrl + C twice will exit the node console

console.log("Hello World");

// 3. global object instead of window object

// console.log(global);

// 4. has Common core modules that we will explore later
// 5. CommonJS modules system instead of ES6 modules system

// const os = require("os");
// const path = require("path");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);                 d:\Practice\dave_gray_nodejs
// console.log(__filename);                d:\Practice\dave_gray_nodejs\server.js

// console.log(path.dirname(__filename));  d:\Practice\dave_gray_nodejs
// console.log(path.basename(__filename)); server.js
// console.log(path.extname(__filename));  .js

// console.log(path.parse(__filename));

// {
//     root: 'd:\\',
//     dir: 'd:\\Practice\\dave_gray_nodejs',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
// }

const math = require("./math");
const { subtract } = require("./math");
console.log("Addition  - ", math.add(1, 2));
console.log("Subtraction  - ", subtract(2, 1));

// 6. Missing some JS APIs like fetch
