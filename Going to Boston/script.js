function rollDie() {
  return Math.floor(Math.random() * 6) + 1; // slumpmässigt tärningens prickar
}

function playGame() {
  // kastar alla tre tärningar
  let die1 = rollDie();
  let die2 = rollDie();
  let die3 = rollDie();

  // sparar högsta värdet från första kastet
  let highest1 = Math.max(die1, die2, die3);

  // kastar de kvarvarande tärningarna
  die2 = rollDie();
  die3 = rollDie();

  // sparar högsta värdet av andra kastet
  let highest2 = Math.max(die2, die3);

  // kastar sista tärningen
  let highest3 = rollDie();

  // summerar alla tre högsta värdet
  let totalScore = highest1 + highest2 + highest3;

  return totalScore;
}

function findWinner(playerCount) {
  // antal spelare
  let highestScore = 0;
  let winner = 0;

  for (let i = 1; i <= playerCount; i++) {
    let score = playGame();
    console.log(`Spelare ${i} poäng: ${score}`);

    if (score > highestScore) {
      highestScore = score;
      winner = i;
    }
  }
  console.log(`Vinnaren är spelare ${winner} med poängen ${highestScore}`);
}

findWinner(2);
