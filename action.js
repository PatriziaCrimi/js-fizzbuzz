/* ASSIGNMENT
Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
al posto dei multipli di 3, deve stampare "Fizz"
al posto dei multipli di 5, deve stampare "Buzz"
al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz".
*/


// ********* SOLUTION NUMBER 1 - WITHOUT ARRAY & WHILE LOOP *********
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


// ********* SOLUTION NUMBER 2 - WITHOUT ARRAY & DO-WHILE LOOP *********
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


// ********* SOLUTION NUMBER 3 - WITHOUT ARRAY & FOR LOOP *********
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
