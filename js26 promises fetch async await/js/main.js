// Fetch APi requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks are just other functions that are passed into other functions as paramenters

function firstFunction(parameters, callback) {
    // do stuff
    callback();
}

// // AKA "callback hell"
// firstFunction(para, callback) {
//     secondFunction(para, function(){
//         thirdfunction(para, function(){

//         })
//     })
// }

// Promises
// 3 states: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! resolved the problem!");
//     } else {
//         reject("No! rejected the promise");
//     }
// });
// // console.log(myPromise);

// // // Thenable
// // myPromise
// // .then(value => {
// //     return value + 1;
// // })
// // .then(newValue => {
// //     console.log(newValue);
// // })
// // .catch(err => {
// //     console.error(err);
// // })

// // requesting data from another server, we have to wait

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() { //callback accecpts timeout
//         resolve("myNextPromise resolved")
//     }, 3000);
// });
// myNextPromise.then(value => {
//     console.log(value)
// });

// myPromise.then(value => {
//     console.log(value)
// });

// fetch("https://jsonplaceholder.typicode.com/users");

// // pending
// console.log(users);

// const users = fetch("https://jsonplaceholder.typicode.com/users") //grab data with fetch. fetch returns a promise
// .then(response => { //then turn it into json
    
//     return response.json() //returns a promise
// })
// .then(data => { //then work with it as data
//     data.forEach(user => {
//         console.log(user); //log of each user pulled data out of json and pulled eachh user insead of 10 at once
//     })
// });
// console.log(users); //users logged first, with the pending promise

// async waits without chaining thenables

// Async / Await
// await must be used within an async function

// const myUsers = {
//     userList : []
// }

// async function myCoolFunction() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     return jsonUserData;
// }

// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     // console.log(data);
//     console.log(myUsers.userList);
// }

// anotherFunc();
// console.log(myUsers.userList); // [] empty array get logged first cause the functions are waiting data from an api at another website. has to be inside function. does not wait for promises

// workflow function
// const getAllUserEmails = async () => {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => { //uses map to make an array of just the emails
//         return user.email;
//     });
    
    // return would be more likely passed to another function
//     postToWebPage(userEmailArray); //logging to console
// }


// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails();

// 2nd parameter of fetch, usually an object

// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         method: "GET",
//         headers: {
//             Accept: "application/json" //"text/plain"
//         }
//     });
//     const jsonJokeData = await response.json();

//     console.log(jsonJokeData);

// }

// getDadJoke();

// const jokeObject = 
//     {id: 's49h3ElVnrc', 
//     joke: 'I burned 2000 calories today, I left my food in the oven for too long.'}



// const postData = async (jokeOb) => {
//     const response = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json" //"text/plain"
//         },
//         body: JSON.stringify(jokeOb)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse);

// }

// postData(jokeObject);
// go to websites and read documentations about endpoints and what they expect, specify data in url to get results

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
};
return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}

const requestJoke = async (url) => {

    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.requestJoke;
    postJokeToPage(joke);
}

const ostJokeToPage = (joke) => {
    console.log(joke);
};

// Procedural workflow function
const processJokeRequest = async () => {
    const requestData =getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);

    await requestJoke(requestUrl);
    console.log("finished!!!")
}

processJokeRequest();

// requestJoke("Clint","Eastwood");

// abstract into functions

// maybe from a form on the website

