/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/
var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {
  var isInUK;
  return ukNations.includes(country);
}

console.log(isInUk("France"));
console.log(isInUk("Republic of Ireland"));
console.log(isInUk("England"));

// var array1 = [1, 2, 3];

// console.log(array1.includes(4));
// expected output: true

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUk("France"));
console.log(isInUk("Republic of Ireland"));
console.log(isInUk("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
