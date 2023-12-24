// Conditionals: If statements
// Syntax

// if (condition) {
//     // run some code
// } else {

// }
// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// let reply;

// if (customerIsBanned) {
//     reply = "No soup for you!";
// } else if (soup && crackers) {
//         reply = `Here's your order of ${soup} and crackers.`;
// } else {
//     reply ="Sorry, we're out of soup";
// }
// console.log(reply);

// let testScore = 59;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//     grade = "A";
// } else if (testScore >= 80) {
//     grade = "B";
// } else if (testScore >= 70) {
//     grade = "C";
// } else if (testScore >= 60) {
//     grade = "D";
// } else  {
//     if (collegeStudent) {
//         grade = "U"
//     } else {
//     grade = "F"
// }
// }

// console.log(grade);

// Decision tree!
// i want to create the variable so that playerOne can randomly pick either rock, paper, or scissors and do the same for computer so it can run as an actual game that give diff results everytime

let playerOneArray = ["rock", "paper", "scissors"];
let computerArray = ["rock", "paper", "scrissors"]

let playerOne = "rock";
let computer = "rock";
let result;

anyName.charAt(Math.floor(Math.random() * anyName.length));

playerOneArray.charAt(Math.floor(Math.random() * playerOneArray.length));

for (let i = 0; i <= PlayerOneArray.length; i++) {
    for (let j = 0; computerArray.length; i++) {
        if (playerOneArray[i] === computerArray[i]) {
            result = "tie game";
    }
}

if (playerOne === computer) {
    result = "Tie game!"
} else if (playerOne === "rock") {
    if (computer === "paper") {
    result = "computer wins";
    } else {
        result = "playerOne wins";
    } if (playerOne ==="paper") {
        if (computer === "scissors") {
            result = "computer wins";
        } else {
            result = "playerOne wins";
        }
    }
}

console.log(result);
}