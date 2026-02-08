// Function Hoisting (Function Declaration)
// sayMyName("bharat");

// function sayMyName(finalName) {
//   console.log(finalName);
// }

// Function Expression Hoisting
// sayHello();

// let sayHello = function () {
//   console.log("Hello");
// }

// Variable Hoisting Using Var
// console.log(age);
// var age = 19;

// Variable Hoisting Using Let
// console.log(age);
// let age = 19;

// Variable Hoisting Using Const
// console.log(age);
// const age = 19;

// Class Hoisting
// const object = new human();
// class human {
// }

// Function Call With Callback
// function greetMe(greet, fullname) {
//   console.log("hello:", fullname);
//   greet();
// }
// function greet() {
//   console.log("greeting for the day");
// }
// greetMe(greet, "bharat");

// Function Returning Another Function
// function solve(number) {
//   return function (number) {
//     return number * number;
//   };
// }
// let ans = solve(10);
// let finalAns = ans(10);
// console.log(finalAns);

// Function Stored Inside Array
// const arr = [
//   function (a, b) {
//     return a + b;
//   },
// ];
// let arrFun = arr[0];
// let ans = arrFun(5, 10);
// console.log(ans);

// Function Inside Object (Method)
// let obj = {
//   age: 19,
//   wt: 72,
//   greet: () => {
//     console.log("hello guyz what is up!");
//   },
// };
// console.log(obj.age);
// obj.greet();

// Function Reference (Not A Call)
// console.log(greet);

// Function Expression Using Var (Hoisting Issue)
// var greet = function () {
//   console.log("hello everyone");
// }
