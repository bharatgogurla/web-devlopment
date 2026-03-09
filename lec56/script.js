// let firstPromise = new Promise((resolve, reject) =>{
//     console.log("Bharat");
//     reject(new Error("Internal Server Error"));
// });


// function sayMyName() {
//     console.log("My Name is Bharat Gogurla");
// }

// setTimeout(sayMyName, 10000);


// let firstPromise = new Promise((resolve, reject) => {
//   setTimeout(function sayMyName() {
//     console.log("My Name is Bharat Gogurla");
//   }, 10000);
//   resolve(1);
// });


// let promise1 = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Promise Fulfilled");
//   } else {
//     reject("Promise Rejected");
//   }
// });

// promise1
//   .then((message) => {
//     console.log("First msg: " + message);
//     return "promise fulfilled the message";
//   })
//   .then((message) => {
//     console.log("Second msg: " + message);
//     return "promise fulfilled the message";
//   })
//   .then((message) => {
//     console.log("Third msg: " + message);
//     return "promise fulfilled the message";
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   })
//   .finally((message) => {
//     console.log("this line will run everytime");
//   });

// promise1
//   .then((message) => {
//     console.log("Then message is " + message);
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });


// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "First");
// });
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Second");
// });
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Third");
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
