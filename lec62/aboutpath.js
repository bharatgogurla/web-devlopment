import path from "path";
// console.log(path)

let myPath =
  " C:\\Users\\bharatgogurla\\OneDrive\\Desktop\\web-dev\\lec62\\bharat.txt";

console.log(path.extname(myPath));
console.log(path.basename(myPath));
console.log(path.dirname(myPath));

console.log(path.join("c:/", "programs\\bharat.txt"));
