
/**
 * Declare constants for DOM elements
 * and possible choices (Rock, Paper, Scissors)
 */
 const buttons = document.getElementsByClassName("control");
 const playerScore = document.getElementById("player-score");
 const machineScore = document.getElementById("machine-score");
 const playerImage = document.getElementById("player-image");
 const machineImage = document.getElementById("machine-image");
 const choices = ["rock", "paper", "scissors"];
 
 let playerChoice;


/**
 * Once the DOM has finished loading, loop through all of the buttons and Add event listener. 
 */
 document.addEventListener("DOMContentLoaded", function() {
    
    for (let button of buttons) {
       button.addEventListener("click", function() {
               playerChoice = this.getAttribute("data-choice");
               playRound(playerChoice);
           });
       }      

   })


/**
 * The main playRound function is called when the user has selected a button. 
 * This function accepts one parameter, which is the data-choice value of selected button 
 * (which will be 0, 1 or 2 repesesenting Rock, Paper or Scissors)
  */
 function playRound(playerChoice) {
    
     playerImage.src = `assets/images/${choices[playerChoice]}.png`;  
     playerImage.alt = choices[playerChoice];

     // Call getRandomInt function to get Machine choice 
     let machineChoice = getRandomInt(3);

     machineImage.src = `assets/images/${choices[machineChoice]}.png`;
     machineImage.alt = choices[machineChoice];
 
     checkWinner(choices[playerChoice], choices[machineChoice]);

}


/**
 * The checkWinner function compares Player Choice and Machine choice 
 * and uses a series of If Statements to run through logic 
  */
function checkWinner (playerChoice,machineChoice) {
   
    // Run through logic to check which of the 7 Cases is true, alert user and call Increment Score function
    switch (true) {

        // Case 1:Player and Machine have same choice (0 and 0, 1 and 1, 2 and 2)
        case (playerChoice === machineChoice) :
            text = `Passing text, It's a draw!!  Player Choice is: ${playerChoice}. Machine Choice is : ${machineChoice}`;
          break;
        // Case 2: Player chooses Rock and Machine random choice is Paper 
        case (playerChoice === "rock" && machineChoice === "paper") :
            text = `Passing text. Paper covers Rock - Hard luck... Machine wins. Player Choice is : ${playerChoice}. Machine Choice is : ${machineChoice}`;
            incrementScore("machine");
          break;
        // Case 3: Player chooses Rock and Machine random choice is Scissors  
        case (playerChoice === "rock" && machineChoice === "scissors") :
          text = `Passing text. Rock blunts Scissors - You rock!! Player wins... Player Choice is : ${playerChoice}. Machine Choice is : ${machineChoice}`;
            incrementScore("player");
          break;
        // Case 4: Player chooses Paper and Machine random choice is Rock  
        case (playerChoice === "paper" && machineChoice === "rock") :
          text = `Passing text. Paper covers Rock - You rock!! Player wins... Player Choice is : ${playerChoice}. Machine Choice is :  ${machineChoice}`;
            incrementScore("player");
          break;
        // Case 5: Player chooses Paper and Machine random choice is Scissors  
        case (playerChoice === "paper" && machineChoice === "scissors") :
          text = `Passing text. Scissors cut Paper - Hard luck... Machine wins. Player Choice is : ${playerChoice}. Machine Choice is : ${machineChoice}`;
            incrementScore("machine");
          break;
        // Case 6: Player chooses Scissors and Machine random choice is Rock  
        case (playerChoice === "scissors" && machineChoice === "rock") :
          text = `Passing text Rock Blunts Scissors - Hard luck... Machine wins. Player Choice is : ${playerChoice}. Machine Choice is : ${machineChoice}`;
            incrementScore("machine");
          break;
        // Case 7: Player chooses Scissors and Machine random choice is Paper  
        case (playerChoice === "scissors" && machineChoice === "paper") :
          text = `Passing text. Scissors cut Paper - - You rock!! Player wins... Player Choice is : ${playerChoice}. Machine Choice is :  ${machineChoice}`;
            incrementScore("player");
            break;
         default:
   
       }
    
}


/**
 * Calculates  a random Int between 0 and max which is parameter that is passed in on the fly
 */
function getRandomInt(max) {
    return Math. floor(Math. random() * max);
    }


/**
 * Accepts parameter representing round winner (either Player or Machine)
 * Gets the current score from the DOM and increments it by 1
 */
 function incrementScore(roundWinner) {

  let oldPlayerScore = parseInt(document.getElementById("player-score").innerText);
  let oldMachineScore = parseInt(document.getElementById("machine-score").innerText);

switch (true) {
    // /If player was round winner increment Player Score
  case (roundWinner === "player") :
    document.getElementById("player-score").innerText = ++ oldPlayerScore;
    break;
    // /If machine was round winner increment Machine Score
  case (roundWinner === "machine") :
    document.getElementById("machine-score").innerText = ++ oldMachineScore;
    break;
   default:
 }


if (document.getElementById("player-score").innerText == "5") {
  alert("Game over, Congrats You have won - You rock!!");
  resetGame();
} else if (document.getElementById("machine-score").innerText == "5") {
  alert("Game over - Machine has won, Better luck next time!");
  resetGame();
} else {
  //do nothing 
}

 }


 function resetGame(){
alert("hello elaine - game over");

// Reset player score and machine score back to zero
document.getElementById("player-score").innerText = 0;
document.getElementById("machine-score").innerText = 0;

// Reset images and alt text back to Rock, paper, scissors logo
playerImage.src = `assets/images/rpslogo_small.png`;  
playerImage.alt = "Rock Paper Scissors"

machineImage.src = `assets/images/rpslogo_small.png`;  
machineImage.alt = "Rock Paper Scissors"

}