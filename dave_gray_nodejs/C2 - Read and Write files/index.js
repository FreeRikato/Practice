const fsPromises = require("fs").promises;
const path = require("path");
// The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

// fs.readFile(
// path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you."
    );

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(
//   "dave_gray_nodejs/C2 - Read and Write files/files/hello.txt",
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error ${err}`);
//   process.exit(1); //mandatory (as per the Node.js docs)
// });

// console.log("Hello.......");

// The Hello...... statement is printed before the data in starter.txt due to asynchronous nature of javascript

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is.",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newreply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );
