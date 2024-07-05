let player1Wins = 0;
let player2Wins = 0;
let roundsPlayed = 0;

while (roundsPlayed < 3) {
  // loop stopp efter 3 rundor
  roundsPlayed++;
  alert("Runda " + roundsPlayed);

  // fråga användaren
  let player1Choice = prompt("Spelare 1: Välj sten, sax, eller papper").toLowerCase();
  let player2Choice = prompt("Spelare 2: Välj sten, sax, eller papper").toLowerCase();

  if (player1Choice === player2Choice) {
    // samma val blir oavgjort
    alert("Det är oavgjort!");
  } else if (
    (player1Choice === "sten" && player2Choice === "sax") ||
    (player2Choice === "sax" && player2Choice === "papper") ||
    (player1Choice === "papper" && player2Choice === "sten")
  ) {
    alert("Spelare 1 vinner denna runda!");
    player1Wins++;
  } else {
    alert("Spelare 2 vinner denna runda!");
    player2Wins++;
  }
}
if (player1Wins > player2Wins) {
  alert("Spelare 1 vinner!");
} else if (player2Wins > player1Wins) {
  alert("Spelare 2 vinner!");
} else {
  alert("Det är oavgjort!");
}
