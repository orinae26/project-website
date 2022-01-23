//select the paragraph element and store it in a variable para
const para = document.querySelector("p");
//add event listener to the paragraph
para.addEventListener ("click", updateName);

//create a function called updateName
function updateName(){
    const name = prompt("What is your name?");

    para.textContent = "Well Hello ${name}";

}

//function to define pagraph text and add it to the page
function createParagraph(){
    const para = document.createElement('p');

    para.textContent = "You clicked a button";

    document.body.appendChild(para);

}
//select all the buttons 
const buttons = document.querySelectorAll("button");

//function to add event listener to all buttons

for(const button of buttons) {
    para.addEventListener("click", createParagraph);
}





















