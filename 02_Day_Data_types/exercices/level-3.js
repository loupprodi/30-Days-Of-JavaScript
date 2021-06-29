//1-'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const str =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let count = str.match(/love/gi);
console.log(count.length);

//2- Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const str2 =
  'You cannot end a sentence with because because because is a conjunction';
let count2 = str2.match(/because/gi);
console.log(count2.length);

//3- Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let str3 =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const remove = /[%@&$#;]/gi;
str3 = str3.replace(remove, '');
console.log(str3);

let strArray = str3.split(' ');
console.log(strArray);

//4-Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var salarioMes = 5000;
var bonusAno = 10000;
var salaCurso = 15000;

let rendaAnual = salarioMes * 12 + bonusAno + salaCurso * 12;
console.log(rendaAnual, 'Euros é sua renda anual');
