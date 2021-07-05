//exercises 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1 - Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i >= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// 2 - Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// 3 - Iterate 0 to n using for loop

// 4 - Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

// for (let i = 1; i <= 7; i++) {
//   console.log('#'.repeat(i));
// }

// 5 - Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// 6 - Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} + ${Math.pow(i, 2)} + ${Math.pow(i, 3)}`);
// }

// 7 - Use for loop to iterate from 0 to 100 and print only even numbers
// let i = 0;
// while (i <= 100) {
//   if (++i % 2 == 0) {
//     console.log(i);
//   }
// }

// // 8 - Use for loop to iterate from 0 to 100 and print only odd numbers
// let i = 0;
// while (i <= 100) {
//   if (++i % 3 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i <= 99; i++) {
//   if (i++ % 3 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// 9 - Use for loop to iterate from 0 to 100 and print only prime numbers
// function primeNum(num) {
//   if (num < 2) return false;
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }
// for (var i = 0; i < 100; i++) {
//   if (primeNum(i)) console.log(i);
// }
// 10 - Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// 11 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

// let i = 0;
// while (i <= 100) {
//   if (++i % 2 == 0) {
//     console.log(i);
//   }
// }

// 12 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]
//sum of all evens

// let sum = 0;
// for (let i = 0; i <= 100; i += 2) {
//   sum += i;
// }
// console.log(sum);

//sum of all odds.

// let sum2 = 0;
// for (let i = 1; i <= 99; i += 2) {
//   sum2 += i;
// }
// console.log(`${sum}, ${sum2}`);

// 13 - Develop a small script which generate array of 5 random numbers
for (let i = 1; i <= 5; i++) {
  console.log(Math.random() * 10);
}
// 14 - Develop a small script which generate array of 5 random numbers and the numbers must be unique

// for (let i = 1; i <= 5; i++) {
//   let arred = Math.random() * 10;
//   console.log(Math.round(arred));
// }

function generateRan() {
  let random = [];
  for (let i = 0; i < 5; i++) {
    let temp = Math.floor(Math.random() * 5);
    if (random.indexOf(temp) == -1) {
      random.push(temp);
    } else i--;
  }
  console.log(random);
}
console.log(generateRan());

// 15 - Develop a small script which generate a six characters random id:
// 5j2khz
let text = '';
const randChar = 'abcdefghijklmnopqrstuvwxyz0123456789';

for (let i = 0; i < 6; i++) {
  text += randChar.charAt(Math.floor(Math.random() * randChar.length));
}
console.log(text);
