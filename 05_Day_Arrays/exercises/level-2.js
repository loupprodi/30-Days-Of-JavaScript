//1- Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 2 - Primeiro remova todas as pontuações e mude a string para array e conte o número de palavras no array

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let arraytext = text.split(' ');
console.log(arraytext);
console.log(arraytext.length);

// 3 - In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'green Tea'*/

function exercise3level2() {
  let carrinho = ['leite', 'café', 'chá', 'mel'];

  const adicionaCarne = carrinho.unshift('carne');
  const adicionaAcucar = carrinho.push('açúcar');
  const alergicos = true;

  if (alergicos == true) {
    carrinho.splice(4, 1);
    console.log(carrinho);
  } else {
    console.log(carrinho);
  }
}
console.log(exercise3level2());

//3-In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
function exercise3level2() {
  let carrinho = ['leite', 'café', 'chá', 'mel'];

  const adicionaCarne = carrinho.unshift('carne');
  const adicionaAcucar = carrinho.push('açúcar');
  const alergicos = true;

  if (alergicos == true) {
    carrinho.splice(4, 1);
    console.log(carrinho);
  } else {
    console.log(carrinho);
  }
  carrinho.splice(3, 1, 'chá verde');
  console.log(carrinho);
}
console.log(exercise3level2());

//4-In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// resposta arquivo main.js

//5- In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

//reposta arquivo main.js

//6- Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
