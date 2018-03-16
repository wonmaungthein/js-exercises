/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  const firstCapital = str.split("")[0].toUpperCase();
  const secondPart = str
    .split("")
    .splice(1)
    .join("");
  return firstCapital.concat(secondPart);

  // or
  // var firstString = str.split("")[0].toUpperCase();
  // var secondPart = str
  //   .split("")
  //   .splice(1)
  //   .join("");
  // return `${firstString}${secondPart}`;
}

// console.log(secondPart);
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
