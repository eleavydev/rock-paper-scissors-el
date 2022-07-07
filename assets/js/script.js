/**
 * Declare constants for DOM elements
 * and array to handle possible choices (Rock, Paper, Scissors) 
 */
const buttons = document.getElementsByClassName("control");
const playerImage = document.getElementById("player-image");
const machineImage = document.getElementById("machine-image");
const choices = ["rock", "paper", "scissors"];

/**
 * Declare Modal constants to handle modal elements
 */
const modalParagraph = document.getElementsByClassName('modal-result')[0];
const modal = document.getElementById("gameModal");
const span = document.getElementsByClassName("close")[0];

//Declare variables for text, playerChoice and machineChoice
let text;
let playerChoice;
let machineChoice;


/**
 * Once the DOM has finished loading, loop through all of the buttons and Add event listener. 
 */
document.addEventListener("DOMContentLoaded", function () {

  for (let button of buttons) {
    button.addEventListener("click", function () {
      playerChoice = this.getAttribute("data-choice");
      playRound(playerChoice);
    });
  }

});


/**
 * The main playRound function is called when the user has selected a button. 
 * This function accepts one parameter, which is the data-choice value of selected button 
 * (which will be 0, 1 or 2 repesesenting Rock, Paper or Scissors)
 */
function playRound(playerChoice) {

  playerImage.src = `assets/images/${choices[playerChoice]}.png`;
  playerImage.alt = choices[playerChoice];

  // Call getRandomInt function to get Machine choice 
  machineChoice = getRandomInt(3);

  machineImage.src = `assets/images/${choices[machineChoice]}.png`;
  machineImage.alt = choices[machineChoice];

  checkWinner(choices[playerChoice], choices[machineChoice]);

}

/**
 * The checkWinner function compares Player Choice and Machine choice 
 * and uses a series of If Statements to run through logic 
 */
function checkWinner(playerChoice, machineChoice) {

  // Run through logic to check which of the 7 Cases is true
  // Set text and call Increment Score function passing in Round winner and text to be dispalyed in messages area. 
  switch (true) {

    // Case 1:Player and Machine have same choice (0 and 0, 1 and 1, 2 and 2)
    case (playerChoice === machineChoice):
      text = `It's a draw!!  ${playerChoice} =  ${machineChoice}`;
      incrementScore("", text);
      break;
      // Case 2: Player chooses Rock and Machine random choice is Paper 
    case (playerChoice === "rock" && machineChoice === "paper"):
      text = `Round Winner: Machine... Paper covers Rock - Hard luck.`;
      incrementScore("machine", text);
      break;
      // Case 3: Player chooses Rock and Machine random choice is Scissors  
    case (playerChoice === "rock" && machineChoice === "scissors"):
      text = `Round Winner: You! Rock blunts Scissors - You rock!!`;
      incrementScore("player", text);
      break;
      // Case 4: Player chooses Paper and Machine random choice is Rock  
    case (playerChoice === "paper" && machineChoice === "rock"):
      text = `Round Winner: You! Paper covers Rock - You rock!!`;
      incrementScore("player", text);
      break;
      // Case 5: Player chooses Paper and Machine random choice is Scissors  
    case (playerChoice === "paper" && machineChoice === "scissors"):
      text = `Round Winner: Machine... Scissors cut Paper - Hard luck.`;
      incrementScore("machine", text);
      break;
      // Case 6: Player chooses Scissors and Machine random choice is Rock  
    case (playerChoice === "scissors" && machineChoice === "rock"):
      text = `Round Winner: Machine... Rock Blunts Scissors - Hard luck.`;
      incrementScore("machine", text);
      break;
      // Case 7: Player chooses Scissors and Machine random choice is Paper  
    case (playerChoice === "scissors" && machineChoice === "paper"):
      text = `Round Winner: You! Scissors cut Paper - You rock!!`;
      incrementScore("player", text);
      break;

  }

}


/**
 * Accepts parameter representing round winner (either Player or Machine) and text to be displayed in Game Messages area
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(roundWinner, text) {

  let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
  let oldMachineScore = parseInt(document.getElementById("machine-score").innerText);

  switch (true) {
    // If player was round winner increment Player Score and update text in Game Messages area
    case (roundWinner === "player"):
      document.getElementById("player-score").innerText = ++oldPlayerScore;
      document.getElementById("game-messages").innerText = text;
      break;
    // If machine was round winner increment Machine Score and update text in Game Messages area
    case (roundWinner === "machine"):
      document.getElementById("machine-score").innerText = ++oldMachineScore;
      document.getElementById("game-messages").innerText = text;
      break;
    // If it's a draw, update text in Game Messages area only (no score increment required.)
    case (roundWinner === ""):
      document.getElementById("game-messages").innerText = text;
      break;

  }

  //Test to see if either Score is 5 and call resetGame function
  if (document.getElementById("player-score").innerText == "5") {
    modal.style.display = "block";
    modalParagraph.textContent = 'Congrats, You have won with Score of 5 - You rock!! Press X in Top Right corner to exit and play again. ';
    resetGame();
  } else if (document.getElementById("machine-score").innerText == "5") {
    modal.style.display = "block";
    modalParagraph.textContent = 'Machine has won with Score of 5, Better luck next time! Press X in Top Right corner to exit and play again. ';
    resetGame();
  }

}


/**
 * Reset scores back to zero, images back to default and messages area back to null string
 */
function resetGame() {

  // Reset scores
  document.getElementById("player-score").innerText = 0;
  document.getElementById("machine-score").innerText = 0;

  // Reset images and alt text
  playerImage.src = `assets/images/rpslogo.png`;
  playerImage.alt = "Rock Paper Scissors";
  machineImage.src = `assets/images/rpslogo.png`;
  machineImage.alt = "Rock Paper Scissors";

  //Reset Game Messages area 
  document.getElementById("game-messages").innerText = "";

}


/**
 * Calculates a random Int between 0 and max which is parameter that is passed in on the fly
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * When the user clicks on (x), the modal closes
 */
span.onclick = function () {
  modal.style.display = "none";
};

/**
 * Additional error handling, if the user clicks anywhere outside of the modal, the modal will also close. 
 */
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};