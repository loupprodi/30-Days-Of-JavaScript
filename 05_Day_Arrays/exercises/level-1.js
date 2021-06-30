// exercises level-1
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
//1- Declare an empty array;
const arr = Array(); // criando uma array vazia e pode ser com []
console.log(arr);

//2- Declare an array with more than 5 number of elements
const arrNumber = Array(1, 2, 3, 4, 5);
console.log(arrNumber);

//3- Find the length of your array
console.log(arrNumber.length);

//4- Get the first item, the middle item and the last item of the array
console.log(arrNumber[0]);

//5- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypesArr = new Array('Brasil', 25, 'Sao Paulo', {
  bairro: 'Jd Sandra',
  city: 'Sorocaba',
});
console.log(mixedDataTypesArr);

//6- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompaniesArr = new Array(
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
);
//7- Print the array using console.log()
console.log(itCompaniesArr);

//8- Print the number of companies in the array
console.log(itCompaniesArr.length - 1);

//9- Print the first company, middle and last company
let lastIndex = itCompaniesArr[6];
console.log(lastIndex, itCompaniesArr[(2, 3)]);
//10- Print out each company
console.log(itCompaniesArr[0]);
console.log(itCompaniesArr[1]);
console.log(itCompaniesArr[2]);
console.log(itCompaniesArr[3]);
console.log(itCompaniesArr[4]);
console.log(itCompaniesArr[5]);
console.log(itCompaniesArr[6]);

//11- Change each company name to uppercase one by one and print them out
console.log(itCompaniesArr[0].toUpperCase());
console.log(itCompaniesArr[1].toUpperCase());
console.log(itCompaniesArr[2].toUpperCase());
console.log(itCompaniesArr[3].toUpperCase());
console.log(itCompaniesArr[4].toUpperCase());
console.log(itCompaniesArr[5].toUpperCase());
console.log(itCompaniesArr[6].toUpperCase());

//12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompaniesArr.slice(0, itCompaniesArr.length - 1).join(', '),
  ', and ',
  itCompaniesArr.slice(itCompaniesArr.length - 1).join(''),
  ' big IT companie'
);
//13- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompaniesArr.includes('Startaideia')) {
  console.log('Startaideia se encontra na lista');
} else {
  console.log('Empresa não encontrada');
}
//14- Filter out companies which have more than one 'o' without the filter method

//15- Sort the array using sort() method
console.log(itCompaniesArr.sort());

//16- Reverse the array using reverse() method
console.log(itCompaniesArr.reverse());

//17- Slice out the first 3 companies from the array
let index = 0;
console.log(itCompaniesArr.splice(0, 3));

//18- Slice out the last 3 companies from the array
console.log(itCompaniesArr.slice(0, itCompaniesArr - 3));

//19- Slice out the middle IT company or companies from the array
console.log(itCompaniesArr.slice(3, 2));

//20- Remove the first IT company from the array
console.log(itCompaniesArr.shift()); // remove o primeiro item

//21- Remove the middle IT company or companies from the array
console.log(itCompaniesArr.splice(3, 2));

//22- Remove the last IT company from the array
console.log(itCompaniesArr.pop()); // remove o ultimo item

//23- Remove all IT companies
console.log(itCompaniesArr.splice());

// console.log(itCompanies.slice(0, -6));
