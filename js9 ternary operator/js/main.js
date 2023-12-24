// Conditionals: Ternary Operator
// Syntax
// condition ? ifTrue : ifFalse; 
// colon is like the else in an if else statement

let soup = "chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" 
: soup 
? `Yes, we have ${soup} today.`
: "Sorry, no soup today.";
console.log(soupAccess);

// let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
// console.log(response);

let testScore = 79;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F"
console.log(`My grade is a ${myGrade}.`);

let playerOne = "scissors";
let computer = "paper";
let result = playerOne === computer ? "Tie game!"
: playerOne === "rock" && computer === "paper" ? "Computer wins."
: playerOne === "paper" && computer === "scissors" ? "Computer wins."
: playerOne === "scissors" && computer === "rock" ?
"Computer wins."
: "playerOne wins!"
console.log(result);