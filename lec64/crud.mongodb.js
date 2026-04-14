// CRUD Operations
use("crudDB");

// Create
db.createCollection("courses");

// db.courses.insertOne({
//   name: "harry web dev course",
//   price: 0,
//   assignments: 1,
//   projects: 4,
// });

// db.courses.insertMany([
//   {
//     name: "react mastery bootcamp",
//     price: 199,
//     assignments: 5,
//     projects: 8,
//   },
//   {
//     name: "nodejs backend complete",
//     price: 149,
//     assignments: 4,
//     projects: 6,
//   },
//   {
//     name: "mongodb zero to hero",
//     price: 99,
//     assignments: 3,
//     projects: 5,
//   },
//   {
//     name: "full stack mern project",
//     price: 249,
//     assignments: 6,
//     projects: 10,
//   },
//   {
//     name: "javascript fundamentals",
//     price: 49,
//     assignments: 2,
//     projects: 3,
//   },
//   {
//     name: "advanced css and sass",
//     price: 79,
//     assignments: 3,
//     projects: 4,
//   },
//   {
//     name: "express api development",
//     price: 129,
//     assignments: 4,
//     projects: 6,
//   },
//   {
//     name: "data structures in js",
//     price: 159,
//     assignments: 7,
//     projects: 5,
//   },
//   {
//     name: "system design basics",
//     price: 299,
//     assignments: 5,
//     projects: 7,
//   },
// ]);

// Read
// let a = db.courses.find({price:0})

// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let b = db.courses.findOne({price:0})

// console.log(b)

// Update
// db.courses.updateOne({price:0}, {$set:{price:10400}})

// db.courses.updateMany({assignments:1}, {$set:{assignments:12}})

// Delete
// db.courses.deleteOne({price:159})

// db.courses.deleteMany({assignments:12})
