// Exercises: Level 1
//1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// Enter your age: 30
// You are old enough to drive.

let age1 = prompt('enter your age:');
if (age >= 18) {
  console.log('you are old enought to drive');
} else {
  console.log("You don't have age enought to drive");
}
// Enter your age:15
// You are left with 3 years to drive.
let ageNum = prompt('enter your age:');
if (ageNum <= 18) {
  console.log(`you have ${ageNum},you can't drive`);
} else {
  console.log('you are able to drive');
}

// 2-Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
const myAge = 25;
let yourAge = prompt('enter you age: ');

if (myAge > yourAge) {
  console.log('i am', Math.abs(myAge - yourAge), 'more old than you');
} else if (myAge < yourAge) {
  console.log('you are', Math.abs(yourAge - myAge), 'more old than my');
} else if ((yourAge = 30)) {
  console.log('you are 5 years older than me.');
} else {
  console.log('you have the same age');
}

//3-If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
// let a = 4;
// let b = 3;
console.log(a > b ? 'A greater than B.' : 'A less than B.');

// 4 is greater than 3
console.log(4 > 3 ? '4 greater than 3.' : '3 less than 4.');

//4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
let num = prompt('enter a number:');
if (num % 2 === 0) {
  console.log(' o numero é par');
} else {
  console.log(' o numero não é par');
}

// Enter a number: 9
// 9 is is an odd number.
const num1 = 9;
if (num1 % 3 === 0) {
  console.log(' o numero é impar');
} else {
  console.log(' o numero não é impar');
}
