function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceGame() {
  const targetSequence = [1, 2, 3, 4, 5, 6];
  let currentIndex = 0;
  let rollCount = 0;

  while (currentIndex < targetSequence.length) {
    const roll = rollDie();
    rollCount++;

    if (roll === targetSequence[currentIndex]) {
      console.log(`Rolled ${roll}, moving to the next target`);
      currentIndex++;
    } else {
      console.log(`Rolled ${roll}, staying on current target ${targetSequence[currentIndex]}`);
    }
  }

  console.log(`It took ${rollCount} rolls to get the sequence 1 through 6`);
  return rollCount;
}

diceGame();
