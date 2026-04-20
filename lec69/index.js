const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now";
  let arr = ["hey", 54, 65];
  res.render("index", {siteName: siteName, searchText: searchText, arr:arr});
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Adidas why and when?";
  let blogContent = "One of the top brands in shoe category!";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
