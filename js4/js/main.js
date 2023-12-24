// Numbers

const myNumber = 42;

const myFloat = 42.0;

const myString = "42";

console.log(myNumber === myString);
// false cause data types are different, number and string

console.log(myString + 3);
// 423
console.log(Number(myString) + 3); 
console.log(Number(myString) === myNumber); 


console.log(Number("Dave"));
console.log(Number(true));
console.log(Number(false)); 
// 0 isfalse 1 is true

// Number Methods
// The Number .isInteger() method determines whether the passed value is an integer
// The Number.parseFloat() method parses an arguement and returns a floating point number. If a number cannot be parsed from the arguement, it returns NaN.

console.log(Number.isInteger(myFloat));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myString));
// converts to a number

console.log(Number.parseFloat(myString).toFixed(2));
console.log(myFloat.toFixed(2));
// toFixed returns a string

console.log(Number.isNaN("Susan"));


