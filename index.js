// EXAMPLE 1 - Sum all the Digits in a Number using JavaScript

function getSumOfDigits(num) {
  return String(num)
    .split('')
    .reduce((accumulator, digit) => {
      return accumulator + Number(digit);
    }, 0);
}

console.log(getSumOfDigits(1)); // 👉️ 1
console.log(getSumOfDigits(123)); // 👉️ 6
console.log(getSumOfDigits(1234)); // 👉️ 10

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sum all the Digits in a Number using a `while` loop

// function getSumOfDigits(num) {
//   let initialNumber = num;
//   let sum = 0;

//   while (initialNumber) {
//     sum += initialNumber % 10;
//     initialNumber = Math.floor(initialNumber / 10);
//   }

//   return sum;
// }

// console.log(getSumOfDigits(1)); // 👉️ 1
// console.log(getSumOfDigits(123)); // 👉️ 6
// console.log(getSumOfDigits(1234)); // 👉️ 10
