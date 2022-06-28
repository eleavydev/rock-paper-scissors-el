
/**
 * Declare constants for DOM elements
 * and possible choices (Rock, Paper, Scissors)
 */
 const buttons = document.getElementsByClassName("control");
 const playerScore = document.getElementById("player-score")
 const computerScore = document.getElementById("computer-score")
 const choices = ["rock", "paper", "scissors"]
 
 const clapSound = new Audio("assets/audio/clap.mp3");


/**
 * Once the DOM has finished loading, loop through all of the buttons and Add event listener. 
 */
 document.addEventListener("DOMContentLoaded", function() {
    
    for (let button of buttons) {
       button.addEventListener("click", function() {
               let playerChoice = this.getAttribute("data-choice");
               alert(`You clicked Elaine test playerChoice is${playerChoice}`);
               runGame(playerChoice);
           });
       }      

   })


/**
 * The main game function called when the user has selected a button. 
 * This function accepts one parameter, which is the data-choice value of selected button 
 * (which will be 0, 1 or 2 repesesenting Rock, Paper or Scissors)
  */
 function runGame(playerChoice) {
    
     // Call getRandomInt function to get Computer choice 
     let machineChoice = getRandomInt(3);
     console.log(machineChoice);
     alert(`Random Number isssss: ${machineChoice}`);
 
    
     if ( playerChoice == 0 || playerChoice == 1 || playerChoice == 2 )  {
         alert(`Entering into loop with player choice : ${playerChoice}. and computer choice  ${machineChoice}.`);
         checkWinner(choices[playerChoice], choices[machineChoice]);
     }
     else {
        throw `Unknown player Choice: ${playerChoice}. Aborting! `;
     }

}


/**
 * The checkWinner function compares Player Choice and Machine choice 
 * and uses a series of If Statements to run through logic 
  */
function checkWinner (playerChoice,machineChoice) {
   

}


/**
 * Calculates  a random Int between 0 and max which is parameter that is passed in on the fly
 */
function getRandomInt(max) {
    return Math. floor(Math. random() * max);
    }


/**
 * Gets the current Player score from the DOM and increments it by 1
 */
function incrementPlayerScore() {
    

}

/**
 * Gets the current Machine score from the DOM and increments it by 1
 */
function incrementMachineScore() {


}