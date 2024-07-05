// Stegen - Computational Thinking Games
let play = true;

while (play) {
  console.clear();
  let goal = 1;
  let nmbrOfThrows = 0;

  while (goal < 7) {
    let dice = Math.floor(Math.random() * 6 + 1); // kasta tärning
    nmbrOfThrows++; //öka på med 1
    console.log(dice);
    if (dice === goal) {
      goal++;
      console.log("Snyggt!");
    }
  }
  console.log(`Grattis! Du fick stege på ${nmbrOfThrows} kast!`);
  play = confirm("Spela igen?");
}

/*
let lowerScore = 50;
for (let i = 0; i < 100; i++) {
  let goal = 1;
  let nmbrOfThrows = 0;

  while (goal < 7) {
    let dice = Math.floor(Math.random() * 6 + 1); // kasta tärning
    nmbrOfThrows++; //öka på med 1
    console.log(dice);
    if (dice === goal) {
      goal++;
    }
  }
  console.log(nmbrOfThrows);
  if (nmbrOfThrows < lowScore) {
    lowScore = nmbrOfThrows;
  }
}
console.log(`Ditt lägsta resultat var ${lowerScore} kast`);
*/
