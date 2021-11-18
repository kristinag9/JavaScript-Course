// Events -> responding to user inputs and actions
/*
clicks
drags
drops
hovers
scrolls
form submission
key presses
focus/ blur

mouse wheel
double click
copying
pasting
audio start
screen resize
printing
*/

// the thing         event type           the code to run
// button            click                change the color
// input             hits return          get search results
// image             mouseover            display the img caption

// const btn = document.querySelector("#clicker");
// btn.onclick = function() {
//    console.log("You clicked me. Go away!");
// }

// addEventListener: specify the event type and a callback to run
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
   console.log("You clicked me!");
});

window.addEventListener('scroll', function() {
   console.log("Stor scrolling!")
});