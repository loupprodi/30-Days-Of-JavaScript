//1- Write a program which tells the number of days in a month.
// Enter a month: January
// January has 31 days.
function exerciseOne() {
  let nameMonth = prompt('enter a month name:');
  nameMonth = nameMonth.toLowerCase();

  if (
    nameMonth === 'january' ||
    nameMonth === 'march' ||
    nameMonth === 'june' ||
    nameMonth === 'august' ||
    nameMonth === 'october' ||
    nameMonth === 'december'
  ) {
    console.log('This month has 31 days');
  } else if (
    nameMonth === 'april' ||
    nameMonth === 'june' ||
    nameMonth === 'setember' ||
    nameMonth === 'november'
  ) {
    console.log('This month has 30 days');
  } else if (nameMonth === 'february') {
    console.log(
      'this month has 28 or 29 days, because his can be a leap year .'
    );
  }
}
console.log(exerciseOne());

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.

//a- Write a program which tells the number of days in a month, now consider leap year.
