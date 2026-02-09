// Global scope
// var age = 15;

// console.log(age);

// {
//   console.log(age);
// }

// if (true) {
//   console.log(age);
// }

// for (let i = 0; i < 2; i++) {
//   console.log(age);
// }

// function sayHello() {
//   console.log("hi ", age);
// }
// sayHello();

// Function scope
// function sayHello() {
//   const fullName = "Bharat Gogurla";
//   console.log("Hello everyone i am", fullName);
// }
// console.log(fullName); //not accessible
// sayHello();

// Block scope
// {
//   var height = 100;
// }

// console.log(height); //var is not block scoped

// {
//   let weight = 72;
// }

// console.log(weight); //let,const are block scoped

// Temporal dead zone
// console.log(marks); //Temporal dead zone
// let marks = 100; //Temporal dead zone
// console.log(marks);
