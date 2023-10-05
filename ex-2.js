//Exercise #2: At Least Five Function
function isScoreOver70Pts(score) {
  return score>70;
}

function atLeastFive(array, operation) {
  // Start coding here
  let filterArray = array.filter(operation); //let filterArray = array.filter(score => score > 70);
  return filterArray.length >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isScoreOver70Pts);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isScoreOver70Pts);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isScoreOver70Pts);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
