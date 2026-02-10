// Class
// class Human {
//   // properties
//   age = 19; // public
//   #wt = 72; // private
//   ht = 175;

//   // constructor
//   constructor(newAge, newHeight, newWeight) {
//     this.age = newAge;
//     this.ht = newHeight;
//     this.#wt = newWeight;
//   }

//   // behaviour
//   walking() {
//     console.log("i am walking", this.#wt);
//   }
//   running() {
//     console.log("i am running");
//   }

//   // get and set
//   get fetchWeight() {
//     return this.#wt;
//   }

//   set modifyWeight(val) {
//     this.#wt = val;
//   }
// }

// let obj = new Human();
// console.log(obj.age);
// console.log(obj.fetchWeight);
// obj.walking();
// obj.modifyWeight = 43;
// console.log(obj.fetchWeight);

// let obj2 = new Human(20, 180, 70);
// console.log(obj2.fetchWeight);
// console.log(obj2.age);

// Default parameter
// function sayName(fName, lName = "Gogurla") {
//   console.log("My name is:", fName, lName);
// }
// sayName((fName = "Bharat"));

//Dependent parameter
// function sayName(fName = "Bharat" , lName = fName.toUpperCase()){
//     console.log("My name is: ", fName, lName);
// }
// sayName();

// Default parameter as object
// function solve(value = { age: 15, wt: 90, ht: 170 }) {
//   console.log("Hey guyz what is up!", value);
// }
// solve();

// Default parameter as array
// function pararray(value = ["Bharat", "Shruti", "vishnu"]) {
//   console.log("Hey guyz what is up!", value);
// }
// pararray();

// Default parameter null and undefined
// function parnull(value = "Bharat") {
//   console.log("My name is:", value);
// }
// parnull(null);

// function parnull(value = "Bharat") {
//   console.log("My name is:", value);
// }
// parnull(undefined);

// Default parameter as function
// function getAge() {
//   return 19;
// }

// function info(name, age = getAge()) {
//   console.log("Information:", name, age);
// }

// info("Bharat");
