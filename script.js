// add an array of answers
// get a random answer from the array on load
// draw random answer to the page

let answerElement = document.getElementById("answer-spot");


answerElement.style.animation = "fade 2s";

setTimeout(() => { answerElement.style.animation = ""; }, 1000)

