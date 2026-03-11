function outerFunction() {
  let name = "Bharat";

  function innerFunction() {
    console.log(name);
  }

  return innerFunction;
}
let inner = outerFunction();
inner();
