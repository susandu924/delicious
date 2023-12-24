// Conditionals: Switch statements
// Syntax

// switch (expression OR value) {
//     case choice1:
//         // run this code
//         break;

//     case choice2: 
//         // run this different code
//         break;
//     // add as many cases as needed
//     default: 
//         //run this code if no case is matched
//         //no need for a break here

// }
switch (Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default: 
        console.log("No match");
}
// Math.random() generates a random number between 0-1 with many decimal places 0.19157057767733932
// and Math.random()*10 to get a random whole number, you need to multiply random generated number by 10
// ex.: Math.random()*10 =[randomly return: 2.9757621488533914]
// since the number will still have many decimals, floor() method to round a number down/nearest integer, this will give u a value between 0-9. floor rounds down. adding +1 to make the number between 1 and 10
// Math.floor() drops the decimal of this number, and makes it an integer from 0 to 10.  

let playerOne = "scissors";
let computer = "rock";
switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("computer wins!");
            break;
        } else {
            console.log("playerOne wins!")
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("computer wins!");
            break;
        } else {
            console.log("playerOne wins!")
        }
        break;
    default: 
        if (computer === "rock") {
            console.log("computer wins!");
            break;
        } else {
            console.log("playerOne wins!")
        }
}