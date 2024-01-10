const fs = require("fs");

const rs = fs.createReadStream(
  "dave_gray_nodejs/C2 - Read and Write files/files/lorem ipsum.txt",
  { encoding: "utf8" }
);

const ws = fs.createWriteStream(
  "dave_gray_nodejs/C2 - Read and Write files/files/lorem ipsum copy.txt"
);

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
