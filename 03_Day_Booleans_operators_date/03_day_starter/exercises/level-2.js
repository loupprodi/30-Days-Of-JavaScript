//1-Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 50
let numBase = prompt('insira a base: ');
let numHeight = prompt('insira a altura:');
let area = 0.5 * numBase * numHeigh;
console.log('A área do triangulo é: ', area);

//2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let numA = prompt('Enter side a:');
let numB = prompt('Enter side b:');
let numC = prompt('Enter side C:');
let perim = numA + numB + numC;
console.log('O Perimetro do triangulo é: ', peri);

//3- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let lenghtNum = prompt('Enter side lenght: ');
let widthNum = prompt('Enter side width:');
let areaRect = lenghtNum * widthNum;
let perimRect = 2 * (lenghtNum + widthNum);
console.log(
  'o perimetro do retangulo é, a area do retangulo',
  areaRect,
  perimRect
);

//4- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let rad = prompt('digite o primeiro radius');
let areaCir = Math.PI * (rad * rad);
const circum = 2 * Math.PI * rad;
console.log('Area do circle', areaCir);
console.log('Circumferencia do circulo', circum);

//5- Calculate the slope, x-intercept and y-intercept of y = 2x -2

//6- Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

//7- Compare the slope of above two questions.

//8- Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

//9- Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hour = prompt('entre com as horas');
let rate = prompt('entre com a taxa por horas');
let payment = hour * rate;
console.log('o pagamento por semana é igual a:', payment);
// 10- If the length of your name is greater than 7 say, your name is long else say your name is short.
let nome = prompt('Insira seu nome: ');
if (nome.length > 7) {
  console.log('Seu nome é longo!');
} else {
  console.log('Seu nome é curto!');
}
// 11-Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = prompt('Insira seu nome: ');
let lastName = prompt('insira seu sobrenome:');
if (firstName.length > lastName.lenght) {
  console.log('Seu nome é maior que o seu sobrenome!');
} else {
  console.log('Seu sobrenome é maior que o seu nome!');
}
// 12- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = prompt('Insira minha idade:');
let yourAge = prompt('insira sua idade:');
console.log(`Sua idade ${myAge - yourAge} é maior que a minha !`);

//13-Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let birhtYear = 2005;
year = 2021 - birtYear;

if (year >= 18) {
  console.log('Sua idade é: ', year, 'e você pode dirigir!');
} else {
  console.log(
    'Sua idade é: ',
    year,
    'e você NÃO pode dirigir, volte daqui a: ',
    Math.abs(year - 18.0),
    'anos'
  );
}

//14-Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of yours you live: 100
// You lived 3153600000 seconds.

const age = prompt('digite sua idade: ');
const birthYear = 2021 - age;
const bornYear = `${birthYear}`;
const birth = new Date(bornYear);
const nowDate = new Date();
if (age <= 100) {
  const result = nowDate.getTime() - birth.getTime();
  const totalseconds = result / 1000;
  console.log(`Você viveu${totalseconds} segundos`);
}
//15- Create a human readable time format using the Date time object
// a- YYYY-MM-DD HH:mm
// b- DD-MM-YYYY HH:mm
// c- DD/MM/YYYY HH:mm

function dataAtualFormatada1() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0');
  mes = (data.getMonth() + 1).toString().padStart(2, '0');
  ano = data.getFullYear();
  hora = data.getHours();
  minuto = data.getMinutes();
  return `${ano}-${mes}-${dia} ${hora}:${minuto}`;
}

console.log(dataAtualFormatada1());

function dataAtualFormatada2() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0');
  mes = (data.getMonth() + 1).toString().padStart(2, '0');
  ano = data.getFullYear();
  hora = data.getHours();
  minuto = data.getMinutes();
  return `${dia}-${mes}-${ano} ${hora}:${minuto}`;
}

console.log(dataAtualFormatada2());

function dataAtualFormatada3() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0');
  mes = (data.getMonth() + 1).toString().padStart(2, '0');
  ano = data.getFullYear();
  hora = data.getHours();
  minuto = data.getMinutes();
  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

console.log(dataAtualFormatada3());
