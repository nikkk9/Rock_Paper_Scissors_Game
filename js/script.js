const hand_options = {
  rock: "../images/Rock.png",
  paper: "../images/Paper.png",
  scissors: "../images/Scissors.png",
};
let SCORE = 0;
const pick_user_hand = (hand) => {
  console.log(hand);

  //   hide the current page when we click this
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  //   show next page after clicked
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  let home = document.querySelector(".home");
  home.style.backgroundColor = "rgb(0, 102, 236)";

  // set the user picked

  document.getElementById("user_pick_img").src = hand_options[hand];

  let cp_hand = pick_computer_hand();
  referee(hand, cp_hand);
};

const pick_computer_hand = () => {
  let hands = ["rock", "paper", "scissors"];
  //   console.log(hands[1]);
  const cp_hand = hands[Math.floor(Math.random() * 3)];
  //   console.log("cp", cp_hand);

  //   set the computer picked
  document.getElementById("computer_pick_img").src = hand_options[cp_hand];
  return cp_hand;
};

const referee = (userHand, cpHand) => {
  if (userHand === "paper" && cpHand === "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 5);
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 5);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 5);
  }
  if (userHand === "paper" && cpHand === "scissors") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 5);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 5);
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 5);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
};

const setDecision = (decision) => {
  //   console.log(decision);
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
  //   console.log(score);
  SCORE = score;
  document.querySelector(".score h2").innerText = score;
};

const play_again = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let home = document.querySelector(".home");
  home.style.backgroundColor = "rgb(7, 39, 65)";
};
