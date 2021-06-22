//1- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = '30 days of challenge';

//2- Print the string on the browser console using console.log()
console.log(challenge);

//3- Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//4- Change all the string characters to capital letters using toUpperCase() method
console.log('challenger'.toUpperCase()); // CHALLENGER

//5- Change all the string characters to lowercase letters using toLowerCase() method
console.log('CHALLEGENGER'.toLowerCase()); // challenger

//6- Cut (slice) out the first word of the string using substr() or   method
console.log('challenger'.substring(2, 7));

//7- Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('30 Days Of JavaScript'.substring(3, 6));

//8- Check if the string contains a word Script using includes() method
console.log(challenge.includes('30 days of challenge'));

//9- Split the string into an array using split() method
const divisao = challenge.split();
console.log(divisao);

//10- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companias = ['Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'];
console.log(companias);

//11-Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let mudar = challenge.replace(/JavaScript/g, 'Python');

//13 - What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14 - What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
console.log(challenge.charCodeAt('J'));

// 15 - Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.
console.log(challenge.indexOf('a'));
