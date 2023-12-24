// JavaScript Event Listeners



// Syntax: addEventListener(event, function, useCapture) false is default useCapture

// const doSomething = () => {
//     alert("doing something");
// }

// h2.addEventListener("click", doSomething, false); 
// h2.removeEventListener("click", doSomething, false); //added it, then removed it immediately, wont work

// cant remove an anonymous function

// h2.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.textContent = "Clicked";
// }); //anonymous function logging the event target, adding evet.target.textContent shows <h2>clicked</h2> after the h2 is clicked, shows up in the text ON the page and in the console

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp(); //could load other eventlisteners and start interacting with the dom, readystate is ready
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event => {
        event.preventDefault();
        console.log("submit event");
    }))
};

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

// view.addEventListener("click", (event) => {
//     view.classList.toggle("purple");
//     view2.classList.toggle("darkblue");
//     // event.stopPropagation();
//     // event.target.style.backgroundColor = "purple";
// }, false); //false is the default for event capture but were using event bubbling- when it works from the inside element to the outside

// div.addEventListener("click", (event) => {
//     // event.stopPropagation();
//     view.classList.toggle("blue");
//     view2.classList.toggle("black");
//     // event.target.style.backgroundColor = "blue";
// }, false);

// h2.addEventListener("click", (event) => {
//     const myText = event.target.textContent;
//     // event.stopPropagation();
//     myText === "My 2nd View" 
//     ? event.target.textContent = "Clicked"
//     : event.target.textContent = "My 2nd View";
// }, false
// );

// const nav = document.querySelector("nav");
// nav.addEventListener("mouseover", (event) => {
//     event.target.classList.add("height100");
// });
// nav.addEventListener("mouseout", (event => {
//     event.target.classList.remove("height100");
// }))
// }
// //using capture: when capture is true, it starts from the outermost element and works its way in. without a true, the h2 is inside the div, which is inside the view section and it bubbles up.
// // stop propagation 

// // event target refers to what you clicked or whatever event element was targeted for the event