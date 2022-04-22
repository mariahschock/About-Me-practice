// import functions

// grab DOM elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const hiddenText1 = document.getElementById('hiddenText1');
const hiddenText2 = document.getElementById('hiddenText2');
const hiddenText3 = document.getElementById('hiddenText3');
// set event listeners 
btn1.addEventListener('click', () => {
    hiddenText1.classList.toggle('hidden1');
});
btn2.addEventListener('click', () => {
    hiddenText2.classList.toggle('hidden2');
});
btn3.addEventListener('click', () => {
    hiddenText3.classList.toggle('hidden3');
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
