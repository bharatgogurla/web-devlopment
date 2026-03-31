use("sigma");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
  {
    name: "web-dev",
    price: "0",
    instructor: "harry",
  },
  {
    name: "data-structures",
    price: "499",
    instructor: "striver",
  },
  {
    name: "machine-learning",
    price: "999",
    instructor: "andrew ng",
  },
  {
    name: "mern-stack",
    price: "799",
    instructor: "hitesh",
  },
  {
    name: "python-basics",
    price: "199",
    instructor: "codewithharry",
  },
]);

// Print a message to the output window.
console.log(`Done inserting data`);
