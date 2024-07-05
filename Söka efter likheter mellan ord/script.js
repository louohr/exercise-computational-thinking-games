// Fråga användaren om att välja ord
let word1 = prompt(`Välj ett ord`);
let word2 = prompt(`Välj ett annat ord`);

let minLength = Math.min(word1.length, word2.length); // räknar ut längden på det kortaste ordet vid jämförelse
let matchingLetters = 0;

for (let i = 0; i < minLength; i++) {
  if (word1[i] === word2[i]) {
    // checkar positionen om bokstäverna är på samma ställe
    matchingLetters++; // om bokstäverna matchar öka på
  }
}

console.log(`Antal bokstäver som är på samma plats i båda orden: ${matchingLetters}`);
