//exercises level 3

//1- The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
console.log(ages.sort().slice(0, 1), 'Minimum age');
console.log(ages.reverse().slice(0, 1), 'Maximun age');

// Find the median age(one middle item or two middle items divided by two)
let middleAges = ages.sort().splice(5, 2);
let divided = parseFloat(middleAges) / 2;
console.log(divided);

// Find the average age(all items divided by number of items)
let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
let average = total / ages.length;
console.log(average);

// Find the range of the ages(max minus min)
function getMinMax() {
  let max = Math.max.apply(null, ages);
  let min = Math.min.apply(null, ages);
  let result = [max, min];
  return result;
}
console.log(getMinMax());
let [max, min] = getMinMax();

// Compare the value of (min - average) and (max - average), use abs() method

if (max > min) {
  console.log(Math.abs(min - max));
} else {
  console.log("maximum isn't greater than minimun");
}

//1.Slice the first ten countries from the countries array

// resposta na main.js

//2-Find the middle country(ies) in the countries array

//reposta na main.js

//3-Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

//resposta na main.js
