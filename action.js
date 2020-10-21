/* ASSIGNMENT
Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
al posto dei multipli di 3, deve stampare "Fizz"
al posto dei multipli di 5, deve stampare "Buzz"
al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz".
*/

// ********* SOLUTION NUMBER 1 - WHILE LOOP & WITHOUT ARRAY *********
console.log('*** SOLUTION NUMBER 1 - WITHOUT ARRAY & WHILE LOOP ***');

// Initialization of variables
var number = 1;
// Generating numbers ranging from 1 to 100
while (number <= 100) {
  // Check multiples of 3 and 5
  if (!(number % 3) && !(number % 5)) {
    console.log('FizzBuzz');
  } else if (!(number % 3)) { // --> number % 3 === 0 (false)
    console.log('Fizz');
  } else if (!(number % 5)) { // --> number % 5 === 0 (false)
    console.log('Buzz');
  } else {
    console.log(number);
  }
  number++;
}
console.log('');


// ********* SOLUTION NUMBER 2 - DO-WHILE LOOP & WITHOUT ARRAY *********
console.log('*** SOLUTION NUMBER 2 - WITHOUT ARRAY & DO-WHILE LOOP ***');
// Initialization of variables
number = 1;

// Generating numbers ranging from 1 to 100
do {
  // Check multiples of 3 and 5
  if (!(number % 3) && !(number % 5)) {
    console.log('FizzBuzz');
  } else if (!(number % 3)) {
    console.log('Fizz');
  } else if (!(number % 5)) {
    console.log('Buzz');
  } else {
    console.log(number);
  }
  number++;
} while (number <= 100);
console.log('');


// ********* SOLUTION NUMBER 3 - FOR LOOP & WITHOUT ARRAY *********
console.log('*** SOLUTION NUMBER 3 - WITHOUT ARRAY & FOR LOOP ***');

// Generating numbers ranging from 1 to 100
for (number = 1; number <= 100; number++) {
  // Check multiples of 3 and 5
  if (!(number % 3) && !(number % 5)) {
    console.log('FizzBuzz');
  } else if (!(number % 3)) { // --> number % 3 === 0 (false)
    console.log('Fizz');
  } else if (!(number % 5)) { // --> number % 5 === 0 (false)
    console.log('Buzz');
  } else {
    console.log(number);
  }
}
console.log('');


// ********* SOLUTION NUMBER 4 - WITH ARRAY & OUTPUT IN HTML *********
console.log('*** SOLUTION NUMBER 4 - WITH ARRAY & OUTPUT IN HTML ***');
// Initialization of variables
var results_array = [];
number = 1;

// Generating numbers ranging from 1 to 100
while (number <= 100) {
  // Check multiples of 3 and 5
  if (!(number % 3) && !(number % 5)) {
    results_array.push('FizzBuzz');
  } else if (!(number % 3)) {
    results_array.push('Fizz');
  } else if (!(number % 5)) {
    results_array.push('Buzz');
  } else {
    results_array.push(number);
  }
  number++;
}
console.log('The final array is: ');
console.log(results_array);
console.log('');

// Print Output in HTML
var number_item = document.getElementsByClassName('number-item');
for (var i = 0; i < number_item.length; i++) {
  number_item[i].innerHTML =  results_array[i];
}


// ********* SOLUTION NUMBER 5 - IMPROVED REUSABILITY OF THE CODE *********
// WITHOUT ARRAY & WHILE LOOP
console.log('*** SOLUTION NUMBER 5 - IMPROVED REUSABILITY OF THE CODE ***');

// Initialization of variables
var minimum_number = 1;
var maximum_number = 100;
const first_divisor = 3;
const second_divisor = 5;

// Generating numbers ranging from "minimum_number" to "maximum_number""
number = minimum_number;
while (number <= maximum_number) {
  // Check multiples of 3 and 5
  if (!(number % first_divisor) && !(number % second_divisor)) {
    console.log('FizzBuzz');
  } else if (!(number % first_divisor)) { // --> number % 3 === 0 (false)
    console.log('Fizz');
  } else if (!(number % second_divisor)) { // --> number % 5 === 0 (false)
    console.log('Buzz');
  } else {
    console.log(number);
  }
  number++;
}
