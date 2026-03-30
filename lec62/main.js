const fs = require("fs");
// const fs = require("fs/promises")
// console.log(fs)

console.log("starting");
// fs.writeFileSync("bharat.txt", "bharat coder")

fs.writeFile("bharat2.txt", "bharat coder", () => {
  console.log("done");
  fs.readFile("bharat2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("bharat.txt", "bharatbillionare", (e, d) => {
  console.log(d);
});
console.log("ending");
