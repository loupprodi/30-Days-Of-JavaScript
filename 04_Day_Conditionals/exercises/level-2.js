// Exercises: Level 2
//1- Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

let totalScore = prompt('enter you score:');

if (totalScore >= 80 && totalScore <= 100) {
  console.log(`you score is ${totalScore} equals A `);
} else if (totalScore >= 70 && totalScore <= 79) {
  console.log(`you score is ${totalScore} equals B `);
} else if (totalScore >= 60 && totalScore <= 69) {
  console.log(`you score is ${totalScore} equals C `);
} else if (totalScore >= 50 && totalScore <= 59) {
  console.log(`you score is ${totalScore} equals D`);
} else if (totalScore >= 0 && totalScore <= 49) {
  console.log(`you score is ${totalScore} equals F`);
}

//2- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let monthName = prompt('enter your month:');
monthName.toLowerCase();
if (
  monthName === 'september' ||
  monthName === 'october' ||
  monthName === 'november'
) {
  console.log(`your month is ${monthName} and season is Autumn `);
} else if (
  monthName === 'december' ||
  monthName === 'january' ||
  monthName === 'february'
) {
  console.log(`your month is ${monthName} and season is winter `);
} else if (
  monthName === 'march' ||
  monthName === 'april' ||
  monthName === 'may'
) {
  console.log(`your month is ${monthName} and season is Spring `);
} else if (
  monthName === 'june' ||
  monthName === 'july' ||
  monthName === 'august'
) {
  console.log(`your month is ${monthName} and season is Spring `);
}

//3- Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

let dayWeek = prompt('enter day of weekend:');
dayWeek = dayWeek.toLowerCase();
if (dayWeek === 'saturday' || dayWeek === 'sunday') {
  console.log(`the day ${dayWeek} is a weekend day. `);
} else if (
  dayWeek === 'monday' ||
  dayWeek === 'tuesday' ||
  dayWeek === 'wednesday' ||
  dayWeek === 'thursday' ||
  dayWeek === 'friday'
) {
  console.log(`the day ${dayWeek} is a working day. `);
}