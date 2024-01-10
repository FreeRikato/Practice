// console.log("Testing!");

// npm i nodemon -g
// The above command installs nodemon globally on your machine so you can use it in any project.
// Nodemon is a package that will monitor your project for changes and automatically restart the server.
// No need to manually restart the server every time you make a change.
// -g means global install so you can use it in any project.

// Press Ctrl + C to stop the nodemon server.

// npm init
// The above command will create a package.json file in your project.
// The package.json file is used to store information about your project.
// It also stores a list of all the packages that your project depends on.
// The package.json file is used by npm to install all the packages that your project depends on.

// This is helpful when you want to share your project with other developers. In github, you can share your project without the node_modules folder. Other developers can then run npm install to install all the packages that your project depends on.

// npm i date-fns
// The above command installs the date-fns package which is a package that makes it easy to work with dates.
// The date-fns package is a dependency of your project which means that your project depends on it.

const { format } = require("date-fns");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

// npm i nodemon -D
// The above command installs nodemon as a dev dependency which means that nodemon is only used during development.
// It is not used in production.
// Dev dependencies are packages that are only used during development.

// "scripts": {
// "test": "echo \"Error: no test specified\" && exit 1"
//     "start" : "node index",
//     "dev": "nodemon index"
//   },
// The above code is added to the package.json file.
// The start script is used to start the server in production.
// The dev script is used to start the server in development with nodemon.
// To start the server in development, run npm run dev.
// We don't use npm start because that will start the server in production without nodemon.

console.log("Testing!");

const { v4: uuid } = require("uuid");

console.log(uuid());

// "dependencies": {
//     "date-fns": "^2.30.0",
//     "uuid": "^9.0.1"
//   },
//   "devDependencies": {
//     "nodemon": "^3.0.1"
// }
// ^ means that the package can be updated to a newer minor or patch version.
// ~ means that the package can be updated to a newer patch version.
// If you want to update a package to a newer major version, you have to do it manually.
// npm update will update all packages to the latest version that satisfies the version range specified in package.json.
// npm update --dev will update all dev dependencies to the latest version that satisfies the version range specified in package.json.
// npm update --prod will update all dependencies to the latest version that satisfies the version range specified in package.json.
// npm update <package-name> will update the specified package to the latest version that satisfies the version range specified in package.json.

// npm i <package-name>@<version> will install the specified version of the package.
