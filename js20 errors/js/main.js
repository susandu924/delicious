// Javascript Errors and Error Handling
"use strict";
// variable = "Susan"; //reference error, variable is not defined
// console.log(variable);
// syntax error:
// Object..create();

// const name = "Susan";
// name = "Dot"; //TypeError

const makeError = () => {
    let i = 1;
    while(i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd number!");
            }
            console.log("Even number!");
            // throw new Error("This is a custom error!");
            // const name = "Susan";
            // name = "Dot";
        } catch(err) { //catch only executes if there is an error
            
            console.error(err.stack);
            // logTheError (err.stack);
        } finally {
            console.log("...finally");
            i++;
        }
    }    
}
makeError();


// function customError (message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.name}`;
// }