// alert('Open the browser console whenever you work on JavaScript');
// alert('Open the console and check if the countries has been loaded');

const { countries } = require('../data/countries.js');
const { webTechs } = require('../data/webTechs.js');

// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i]);
//   }

// for (let index = 0; index < webTechs.length; index++) {
//   console.log(webTechs[index]);
//   }

// countries.map(element => {
//   console.log(element)
// })

const existCountry = countries.includes('Ethiopia');

if (existCountry == true) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

const existSass = webTechs.includes('Sass');
const addSass = webTechs.push('Sass');
if (existSass === true) {
  console.log('Sass');
} else {
  console.log('Sass');
}

//1.Slice the first ten countries from the countries array
console.log(countries.splice(0, 10));

//2-Find the middle country(ies) in the countries array
let middleCountries = Math.floor(countries.length / 2);
console.log(middleCountries);
console.log(countries.splice(91, 1));

//3-Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const firstHalf = countries.splice(0, middleCountries);
const secondHalf = countries.splice(-middleCountries);

console.log(firstHalf, secondHalf);
