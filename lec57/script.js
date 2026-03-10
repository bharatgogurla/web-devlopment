// async function getData() {
//   setTimeout(function () {
//     console.log("I am inside set Timeout block");
//   }, 3000);
// }
// let output = getData();

// async function getData() {
//   let response = await fetch(
//     "https://jsonplaceholder.typicode.com//comments?postId=1",
//   );
//   let data = await response.json();
//   console.log(data);
// }
// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
  method: "POST",
  body: JSON.stringify({ username: "love babbar" }),
  headers: myHeaders,
};
//apikey
async function getData() {
  const url = "https://dummyjson.com/posts";
  const response = await fetch(url);
  let data = await response.json();
  console.log("get data response: ", data);
}
async function postData() {
  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Bharat Gogurla -> I am in love with someone.",
      userId: 5,
      /* other post data */
    }),
  });
  let data = await response.json();
  console.log("post data response: ", data);
}

async function processData() {
  await postData();
  await getData();
}
processData();
