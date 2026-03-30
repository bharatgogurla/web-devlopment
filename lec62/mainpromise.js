import fs from "fs/promises";

let a = await fs.readFile("bharat.txt");

let b = await fs.writeFile("bharat.txt", "\n\n\nthis is write operation");

let c = await fs.appendFile("bharat.txt", " and this is append");

console.log(a.toString());
