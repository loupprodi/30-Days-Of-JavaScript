// Exercises: Level 2

//1- Develop a small script which generate any number of characters random id:
// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba

// let text = '';
// const randChar = 'abcdefghijklmnopqrstuvwxyz0123456789';

// for (let i = 0; i < 6; i++) {
//   text += randChar.charAt(Math.floor(Math.random() * randChar.length));
// }
// console.log(text);

//2- Write a script which generates a random hexadecimal number.
// '#ee33df'
// let aleatorio = '0123456789ABCDEF';
// let cor = '#';
// for (let i = 0; i < 6; i++) {
//   cor += aleatorio[Math.floor(Math.random() * 16)];
// }
// console.log(cor);

//3- Write a script which generates a random rgb color number.
// rgb(240,180,80)
// 3 - Write a script which generates a random rgb color number.
// function aleatrgb() {
//   let num = Math.round(0xffffff * Math.random());
//   let r = num >> 16;
//   let g = (num >> 8) & 255;
//   let b = num & 255;
//   return 'rgb(' + r + ', ' + g + ', ' + b + ')';
// }
// for (var i = 0; i < 1; i++) {
//   console.log(aleatrgb());
// }

// 4-Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// const pais = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];

// for (let i = 0; i < pais.length; i++) {
//   pais[i] = pais[i].toUpperCase();
// }
// console.log(pais);

// 5-Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// let num = [];
// for (let i = 0; i < pais.length; i++) {
//   let arr = pais[i].length;
//   num.push(arr);
// }
// console.log(num);

// 6-Use the countries array to create the following array of arrays:
// const land = [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5],
// ];

// 7-In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland', 'Iceland']
// function exerciseLand() {
//   const land = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ];
//   let arr = [];
//   for (let i = 0; i < land.length; i++) {
//     if (land[i].match(/land/gi)) {
//       arr.push(land[i]);
//     }
//   }
//   if (arr.length > 0) {
//     console.log(arr);
//   } else {
//     console.log('all these countries are without land');
//   }
// }
// exerciseLand();
// 8-In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
// function exerciseEight() {
//   const ia = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ];
//   let arr = [];
//   for (let i = 0; i < ia.length; i++) {
//     if (ia[i].match(/ia/gi)) {
//       arr.push(ia[i]);
//     }
//   }
//   if (arr.length > 0) {
//     console.log(arr);
//   } else {
//     console.log('all these countries are without ia');
//   }
// }
// exerciseEight();

// 9-Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
// function exercise9() {
//   let word = [];
//   for (let i = 0; i < land.length; i++) {
//     if (word.length < land[i].length) {
//       word = land[i];
//     }
//   }
//   console.log(word);
// }
// exercise9();

// 10-Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
// ['Japan', 'Kenya']
// const countriesAr = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ];

// for (let i = 0; i < countriesAr.length; i++) {
//   if (countriesAr[i].length == 5) {
//     console.log(countriesAr[i]);
//   }
// }

//11- Find the longest word in the webTechs array
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];
// let wordArr = [];
// for (let i = 0; i < webTechs.length; i++) {
//   if (wordArr.length < webTechs[i].length) {
//     wordArr = webTechs[i];
//   }
// }
// console.log(wordArr);

//12- Use the webTechs array to create the following array of arrays:
// const webTechsArr = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];

// const arr = [];
// for (let i = 0; i < webTechsArr.length; i++) {
//   const result = [webTechsArr[i], webTechsArr[i].length];
//   arr.push(result);
// }
// console.log(arr);

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

//13- An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// for (let i = 0; i < mernStack.length; i++) {
//   const stack = mernStack[i].substr(0, 1);
//   console.log(stack);
// }

//14- Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// function exercise14() {
//   for (technologies of webTechsArr) {
//     console.log(technologies);
//   }
// }
// exercise14();
//15- This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// function exercise15() {
//   const fruits = ['banana', 'orange', 'mango', 'lemon'];
//   let revers = [],
//     i;
//   for (i = 0; i < fruits.length; i++) {
//     revers.unshift(fruits[i]);
//   }
//   console.log(revers);
// }
// exercise15();
//16- Print all the elements of array as shown below.
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]

// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

let fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];
let stackArr = [];
for (let i = 0; i < fullStack.length; i++) {
  for (let index = 0; index < fullStack[i].length; index++) {
    console.log(fullStack[i][index].toUpperCase());
  }
  // stackArr = fullStack[i].toUpperCase();
}
