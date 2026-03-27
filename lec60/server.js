var slugify = require("slugify");

let a = slugify("some fsdfafsadwrqerwq3143154@#$%%%fstring");
console.log(a);

let b = slugify("some string", "_");
console.log(b);
