const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("/contact", (req, res) => {
  res.send("Contact info");
});

app.get("/blog", (req, res) => {
  res.send("write your blog");
});

app.get("/blog/:slug", (req, res) => {
  //logic to fetch {slug} from the db
  // for URL: http://localhost:3000/blog/into?mode=dark&region=in
  console.log(req.params); // will output { slug: 'into' }
  console.log(req.query); // will output { mode: 'dark', region: 'in' }
  res.send(`Hello ${req.params.slug}`);
});

// app.get("blog/intro-to-python", (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send('Hello intro-to-python');
// });

// app.get("blog/intro-to-python", (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send('Hello intro-to-python');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
