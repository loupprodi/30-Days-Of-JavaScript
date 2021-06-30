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

const existTechs =webTechs.includes('Sass')
if(existTechs === true){
  console.log('Sass')
} else {
  existTechs.push('Sass')
}

