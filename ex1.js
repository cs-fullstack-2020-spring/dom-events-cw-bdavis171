// sanity
console.log('ex1.js loaded');

//Create a variable to store the '1' button
let oneBtn = document.querySelector('#one');
//Create a variable for the '2' button
let twoBtn = document.querySelector('#two');
//Create a variable for the header title
let title = document.querySelector('#title');

//Create a function to change the header title to 1 and the background color to blue
function changeOne(event) {
    title.innerHTML = '1';
    title.classList.toggle('blueBackground'); // !! you should be removing the class added by the other button, not toggling
}

//Add an event to the '1' button containing the above function
oneBtn.addEventListener('click',changeOne);

//Create a function to change the header title to 2 and the background color to red
function changeTwo(event){
    title.innerHTML = '2';
    title.classList.toggle('redBackground');
}

//Add an event to the '2' button containing the above function
twoBtn.addEventListener('click',changeTwo);

// !! If you click btn 1 then btn 2 then btn 1 again the styling applied in btn 2's on click function stays, even tho styling was applied when btn 1 was clicked. Be sure to test effectively. 