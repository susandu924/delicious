// Web Storage API

// Not part of the DOM - refers to the window API
// Available to JS via the global variable : window

// We do not have to type window. It is implied:

// window.alert("ok");
// alert("ok");

// window.alert(window.location);
// alert(location);

window.localStorage 
// or
window.sessionStorage

const myObj = {
    name: "Susan",
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }
}

const myArr = ["eat", "sleep", "code"];
myObj.logName();


localStorage.setItem("myLocalStore", JSON.stringify(myArr));
// JSON only stores string data
// localStorage.clear();
const key = localStorage.key(0); //or .length
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(key);
// when we convertto json will not keep the methods
// we want to get an object back
// stored as a string with stringify, retreived with parse to get back and keep the data we want to keep asarray or object. JSON loses methods through stingify

// local store stays even if you close the browser
// session storage disappears if you close the window
