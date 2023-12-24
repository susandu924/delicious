// JSON
// JSON is used to send and receive Data.
// JSON is a text format that completely language independant.
// meaning JSON is used to send and receive data is in many languages, not just Javascript
const myObj = {
    name: "Susan",
    hobbies: ["eat", "sleep", "music", "gym"],
    hello: function () {
        console.log("Hello!")
    }
};

console.log(myObj);
console.log(myObj.name);

// convertedinto json json does not send functions, just the key value pairs
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
// now string data
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON); //object