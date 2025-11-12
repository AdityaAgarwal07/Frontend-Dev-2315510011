// Q7. Smart Guessing Game

let secret = Math.floor(Math.random() * 50) + 1;
let userGuess = 25;

if (userGuess === secret) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secret) <= 3) {
  console.log("Very close!");
} else if (userGuess > secret) {
  console.log("Too high");
} else {
  console.log("Too low");
}

console.log(`(Secret was: ${secret})`);
