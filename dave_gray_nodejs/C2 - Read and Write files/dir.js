const fs = require("fs");

if (!fs.existsSync("dave_gray_nodejs/C2 - Read and Write files/new")) {
  fs.mkdir("dave_gray_nodejs/C2 - Read and Write files/new", (err) => {
    if (err) throw err;
    console.log("Directory created");
    if (fs.existsSync("dave_gray_nodejs/C2 - Read and Write files/new")) {
      fs.rmdir("dave_gray_nodejs/C2 - Read and Write files/new", (err) => {
        if (err) throw err;
        console.log("Directory Removed");
      });
    }
  });
} else {
  console.log("Directory already exists");
}
