let answers = [
  "It is certain",
  "Reply hazy, try again",
  "Don’t count on it",
  "It is decidedly so",
  "Ask again later",
  "My reply is no",
  "Without a doubt",
  "Better not tell you now",
  "My sources say no",
  "Yes definitely",
  "Cannot predict now",
  "Outlook not so good",
  "You may rely on it",
  "Concentrate and ask again",
  "Very doubtful",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes"]

let answerElement = document.getElementById("answer-spot");

// 🎈LECTURE part 2: return to this and turn it into a function that we call onclick on the image

answerElement.style.animation = "fade 2s";
// Let's get a random number each time this function runs
let randomNumber = Math.floor(Math.random() * 20);
// grab a random answer from our answers array
answerElement.innerText = answers[randomNumber]
setTimeout(() => { answerElement.style.animation = ""; }, 1000)

