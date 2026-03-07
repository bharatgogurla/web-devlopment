// //Code 1
const t1 = performance.now();

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is para " + i;
  document.body.appendChild(para);
}

const t2 = performance.now();

console.log("Total time taken by code 1: " + (t2 - t1));


// //Code 2
const t3 = performance.now();

let myDiv = document.createElement("div");

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is para" + i;
  myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

const t4 = performance.now();

console.log("total time taken by code 2: " + (t4 - t3));


//Best code
let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is para" + i;
  //No reflow and repaint for the below line
  fragment.appendChild(para);
}

//The below line takes one reflow and one repaint
document.body.appendChild(fragment);
