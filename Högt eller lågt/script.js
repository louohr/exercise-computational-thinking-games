// Högt eller lågt
const secretNumber = Math.floor(Math.random() * 100) + 1; // genererar random nummer mellan 1 och 100, som lagras i secretNumber

let guess = parseInt(prompt("Gissa på ett nummer mellan 1 och 100")); // fråga efter gissning

// loop som fortsätter tills det hemliga numret är hittat
while (guess !== secretNumber) {
  if (guess > secretNumber) {
    guess = parseInt(prompt("För högt! Försök igen")); // om gissning är för hög
  } else if (guess < secretNumber) {
    guess = parseInt(prompt("För lågt! Försök igen")); // om gissning är för låg
  }
}

alert(`Grattis! Du gissade rätt nummer som var ${secretNumber}`);
