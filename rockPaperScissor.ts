//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1: string, p2: string) => {
  if (
    (p1 === "scissors" && p2 === "paper") || // setting winning conditions for one of the players
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else if (p1 == p2) {
    return "Draw!";
  } else {
    return "Player 2 won!";
  }
};

//Examples:

rps("scissors", "paper"); // Player 1 won!
rps("scissors", "rock"); // Player 2 won!
rps("paper", "paper"); // Draw!
