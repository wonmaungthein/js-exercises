/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

var testScores = [90, 50, 25, 100, 81, 66, 80];
// var lowestPassScore = findLowestPassScore(haystack);
const passScores = testScores.map(testScore => {
  if (testScore > 60) {
    return testScore;
  }
});

var sortedPassScores = passScores.sort();
console.log(sortedPassScores);

// console.log(Math.min(...passScores));

// console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
