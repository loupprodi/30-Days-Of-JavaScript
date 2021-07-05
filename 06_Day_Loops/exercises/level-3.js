// 1 - Copy countries array(Avoid mutation)
const countriesArr = [
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

// 2 - Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = countriesArr.sort();
console.log(sortedCountries);

// 3 - Sort the webTechs array and mernStack array
const webTechsArr = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStackArr = ['MongoDB', 'Express', 'React', 'Node'];
console.log(webTechsArr.sort());
console.log(mernStackArr.sort());

// 4 - Extract all the countries contain the word 'land' from the countries array and print it as array
let arr = [];
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].match(/land/gi)) {
    arr.push(countriesArr[i]);
  }
}
console.log(arr);

// 5 - Find the country containing the hightest number of characters in the countries array
let greaterWord = [];
for (let i = 0; i < countriesArr.length; i++) {
  if (greaterWord.length < countriesArr[i].length) {
    greaterWord = countriesArr[i];
  }
}
console.log(greaterWord);

// 6 - Extract all the countries contain the word 'land' from the countries array and print it as array
let ar = [];
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].match(/land/gi)) {
    ar.push(countriesArr[i]);
  }
}
if (ar.length > 0) {
  console.log(ar);
} else {
  console.log('all these countries are without land');
}

// 7 - Extract all the countries containing only four characters from the countries array and print it as array
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].length == 4) {
    console.log(countriesArr[i]);
  }
}

// 8 - Extract all the countries containing two or more words from the countries array and print it as array
for (let i = 0; i < countriesArr.length; i++) {
  if (countriesArr[i].length >= 2) {
    console.log(countriesArr[i]);
  }
}
// 9 - Reverse the countries array and capitalize each country and stored it as an array
const arrayReverse = countriesArr.reverse();
console.log(arrayReverse);
