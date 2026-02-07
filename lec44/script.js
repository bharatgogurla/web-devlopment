// Objects
// let obj = {
//   name: "Bharat",
//   age: 20,
//   weight: 72,
//   height: "5ft 8in",
//   greet: function () {
//     console.log("hey guyzz what is up!");
//   },
// };

// for (let key in obj) {
//   console.log(key, " ", obj[key]);
// }

// console.log(obj);
// obj.greet();

// let obj2 = obj;
// console.log(obj2);

// Arrays
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Array constructor
// let brr = new Array("bharat", 25, true);
// console.log(brr);
// console.log(brr[1]);

// Array methods
// let brr = new Array("bharat", 25, true);
// brr.push("shruti");
// brr.pop();
// brr.shift();
// brr.unshift("bharat");
// brr.push(20);
// brr.push(12);
// brr.push(32);
// // console.log(brr.slice(2,4));
// brr.splice(1, 0, "shruti");
// console.log(brr);

// let arr = [10, 20, 30];

// arr.map((number, index) => {
//   console.log(number);
//   console.log(index);
// });

// let squareArray = arr.map((number) => {
//   return number * number;
// });

// console.log(squareArray);

// let arr = [10, 20, 30, 11, 21, 44, 51];

// let evenArray = arr.filter((number) => {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(evenArray);

// let arr = [1, 2, "bharat", "shruti", null];

// let stringArr = arr.filter((value) => {
//   if (typeof value == "string") {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(stringarr);

// let arr = [10, 20, 30, 40];

// let reduceArr = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(reduceArr);

// let arr = [9, 1, 7, 4, 2, 8];
// arr.sort();
// console.log(arr);

// let arr = [9, 1, 7, 4, 2, 8];
// console.log(arr.indexOf(9));

// let arr = [10, 20, 30];

// let length = arr.length;
// console.log("length:", length);

// arr.forEach((value, index) => {
//   console.log("Number:", value, "Index", index);
// });

// let fullname = "bharatgogurla";

// for (let val of fullname) {
//   console.log(val);
// }

// let arr = [10, 20, 30, 40, 50];
// let getSum = (arr) => {
//   let sum = 0;
//   arr.forEach((value) => {
//     sum = sum + value;
//   });
//   return sum;
// };

// let totalsum = getSum(arr);
// console.log(totalsum);
