// Loops

// let myNumber = 0;
// while (myNumber < 50) {
//     myNumber++;  
// console.log(myNumber); }

// with myNumber++ below the console.log, it goes from 0-49
// if myNumber++ is before the console.log, it goes from 1-50
// myNumber starts as zero but gets 1 added to it, then logged
// myNumber = myNumber + 1; myNumber++ is same thing



// let myNumber = 0;
// while (myNumber < 50) {
//     myNumber +=2;  
// console.log(myNumber);
// }
// dont create an endless loop 

// let myNumber = 50;
// while (myNumber < 50) {
//     myNumber +=2;  
// console.log(myNumber);
// }

// do {
//     console.log(myNumber);
// } while (myNumber < 50);

// let name1 = "Susan";
// for (let i = 0; i <= name1.length; i++) {
//     console.log(name1.charAt(i));   
// }

let myName = "Susan";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = myName[counter];
    // sqaure brackets are the index of myName so 0-4
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }  
      if (myLetter === "a") break;
    counter++;
}
console.log(counter);