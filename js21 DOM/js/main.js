// DOM -Document Object Model
// select element with an id, use flex box lets design shrink with page

// 2 ways to select by id: //
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2"); //not just meant to select elements by their id, can select by other means. # indicates an id
console.log(view2);

// change the style to show or diff views // set to "none" hides either view, both set to flex, can scroll to see both
view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName(divs);
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";
const navBar = document.querySelector("nav");
navBar.innerHTML = `<h1>Hello!</h1> <p>This should align right.</p>`;
console.log(navBar);
navBar.style.justifyContent = "space-between";

console.log(evenDivs[0]); //box 2
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
// navigating the DOM tree, finding the parent element, html is the main element, head element, body element, would be the children of the html. the children are html collection. the childNodes arent just elements, but text nodes and space nodes 25 nodes
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastChild); //text node
console.log(evenDivs[0].parentElement.lastElementChild); //last element of the parent element
console.log(evenDivs[0].parentElement.firstChild); //text node
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// to clear out or remove from a page
while (view2.lastChild) {
 view2.lastChild.remove();
}

//created a new element
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px"
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center"
    newDiv.style.alignItems = "center";
    parent.append(newDiv); //appended the new element to its parent which is what made it show up on the page
}

for (i = 1; i <= 12; i++) {
    createDivs(view2, i);
}