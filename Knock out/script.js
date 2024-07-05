function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGame(knockOutNumber, targetScore) {
  let currentScore = 0;
  let rollCount = 0;
  const rollHistory = [];

  while (currentScore < targetScore) {
    const die1 = rollDie();
    const die2 = rollDie();
    const rollSum = die1 + die2;
    rollCount++;

    rollHistory.push({ roll: rollCount, die1, die2, rollSum });

    if (rollSum === knockOutNumber) {
      currentScore -= rollSum;
      console.log(
        `Roll ${rollCount}: Rolled ${die1} + ${die2} = ${rollSum}. Knock out! Current score: ${currentScore}`
      );
    } else {
      currentScore += rollSum;
      console.log(
        `Roll ${rollCount}: Rolled ${die1} + ${die2} = ${rollSum}. Current score: ${currentScore}`
      );
    }

    if (currentScore >= targetScore) {
      console.log(`Target score of ${targetScore} reached in ${rollCount} rolls.`);
      break;
    }
  }

  return {
    rollCount,
    currentScore,
    rollHistory,
  };
}

// Example usage:
const knockOutNumber = 7; // Choose knock out number: 6, 7, 8, or 9
const targetScore = 50; // Choose the target score

const result = diceGame(knockOutNumber, targetScore);
console.log(result);
