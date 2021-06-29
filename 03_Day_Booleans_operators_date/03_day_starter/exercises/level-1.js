// Exercises: Level 1
//1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Luiz';
const lastName = 'Prosdoskimi';
const country = 'Brasil';
const city = 'São Paulo';
let age = 25;
let isMarried = false;
let year = 2020;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

//2- Check if type of '10' is equal to 10
if (typeof '10' == 10) {
  console.log('is equal');
} else {
  console.log('is not equal');
}

//3- Check if parseInt('9.8') is equal to 10
if (typeof parseInt('9.8') == typeof 10) {
  console.log('is equal');
} else {
  console.log('is not equal');
}

//4- Boolean value is either true or false.
// a- Write three JavaScript statement which provide truthy value.
// b- Write three JavaScript statement which provide falsy value.

console.log(3 > 1, 8 > 7, 100 >= 99);
console.log(80 == 2, 300 > 400, 60 <= 8);

//5- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 >= 3; //true
4 < 3; //false
4 <= 3; //false
4 == 4; //true
4 === 4; // true
4 != 4; //false
4 !== 4; //false
4 != '4'; //false
4 == '4'; //true
4 === '4'; //false
// Find the length of python and jargon and make a falsy comparison statement.
const py = 'python';
const jar = 'jargon';

console.log(py.length, jar.length);
console.log(py.length > jar.length);

//6- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //false
4 > 3 || 10 < 12; //true
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
!false; //true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); //true
!(4 === '4'); //true
// There is no 'on' in both dragon and python

const dragon = 'drag';
const python = 'pyth';
console.log(dragon.concat('on'));
console.log(python.concat('on'));

//7-  Use the Date object to do the following activities

// What is the year today?
const now = new Date();
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth());

// What is the date today?
console.log(now);

// What is the day today as a number?
console.log(now.getDate());

// What is the hours now?
console.log(now.getHours);

// What is the minutes now?
console.log(now.getMinutes);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());
