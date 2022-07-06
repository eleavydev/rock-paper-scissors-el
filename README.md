# Rock Paper Scissors - You against the machine!!

Rock Paper Scissors - You against the machine!! is a simple game which allows users to play Rock Paper Scissors against the computer. 

Users of this game will be able to view the rules of the game, play against the computer, view their score and see who wins the entire game. 
The winner is whoever wins the most out of 5 rounds. 

![Screenshots of Rock Paper Scissors website](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657059725/Rock%20paper%20scissors/Rock_Paper_Scissors_small_jtjne1.png "Rock Paper Scissors") 

#### Live game can be found at: https://eleavydev.github.io/rock-paper-scissors-el/


## Features 
### Existing Features

The first iteration of Rock paper Scissors is a simple one page website which allows the user to play the game (best out of 5 rounds). 
Game displays modal at end of game to inform user who has won. 

### Future Features

If I were to extend the game in future, I would add in below features. 

  - Include a start page where user can: 
      - Enter name.
      - Choose number of rounds to play ie 5, 7 or 9.      
      - Set difficulty of game ie Low or Medium 
  - Based on this user input, I would: 
       - Personalise messages using users name. 
       - Dynamically set the number of rounds that are played before game over modal displays.
       - Introduce Lizard and Spock elements to the game to increase the difficulty of the game. 

## The Game page
The game page is made up of different sections: Header, Instructions and Choice area, Player and Machine area, Game Messages area and Rules area. 

![Game](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657053436/Rock%20paper%20scissors/1._Rock_Paper_Scissors_page_elbswk.png) 

## The Header 

![Header](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657053435/Rock%20paper%20scissors/2._Header_Rock_Paper_Scissors_page_zzfcbg.png) 

  - The header introduces the Game Title: Rock Paper Scissors - You against the Machine!
  - The title aims to be fun and light-hearted, offering the user an invitation to take on the Machine (ie Computer) for a simple and fun game of Rock, Paper, Scissors.

## Instructions and Choice area

![Instructions and Choice area](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657053436/Rock%20paper%20scissors/3._Instructions_and_Player_Choice_Rock_Paper_Scissors_page_sqi2un.png) 

 - The instruction is a simple one liner: "Player, please make your choice ... choose Rock, Paper or Scissos below:"
 - This was an intentional design choice in order to keep the game simple - no complex instructions required!
 - The choice area provides user with the choice of 3 different buttons - 1. Rock 2. Paper and 3. Scissors. 
 - The buttons use simple images in fun colours as a design choice again to try keep the game fun, light and enjoyable. 

## Player and Machine area (Before game starts)

![Player and Machine area - Before game starts](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657054590/Rock%20paper%20scissors/4._Player_and_Machine_area_Rock_Paper_Scissors_page_fhltvp.png) 

 - This area reflects the players and the machines choice of Rock, Paper, Scissors and also displays the scores for both player and the machine. 
 - Initially both player and machine scores display as 0. 
 - Initially both player and machine areas display the Rock, Paper, Scissors logo as default images. 
 
  - Once the player makes their choice, the player image changes to reflect the players choice. 
 - At the same time, the machine's random choice has been made in the code behind and the machine image also changes to reflect this choice. 
 - Scores are updated in this area - this allows the user to see how they are doing during every round. 

## Player and Machine area (During game)

![Player and Machine area - During game](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657056467/Rock%20paper%20scissors/4._Player_and_Machine_area_Rock_Paper_Scissors_page_after_txp72w.png) 

## Messages area

![Messages area](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657053600/Rock%20paper%20scissors/4._Messages_area_Rock_Paper_Scissors_page_cm7cef.png) 

 - As each round is played ie. user makes choice between Rock, Paper or Scissors, and machine choice is made in the background, a message will be displayed in this area. 
 - Message will be one of three options 1. Round Winner: Machine, 2. Round Winner: You or 3. It's a draw! such as below: 
      - Round Winner: Machine... Rock Blunts Scissors - Hard luck.
      - Round Winner: You! Scissors cut Paper - You rock!!
      - It's a draw!! scissors = scissors
  - Again, as a design choice, the messages are kept light, fun and simple yet informative. 
  - The aim is to keep the user both informed and engaged. 

## Rules area

![Rules area](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657054439/Rock%20paper%20scissors/Rules_area_Rock_Paper_Scissors_page_uusf9k.png) 

  - The rules are displayed in a simple image format - both graphically in pictures and also in words. 
  - Again simplicity is key and the rules are not made overly complex. 

## The Modal 
The modal is part of the index.html but by default is hidden. When the end of game is reached (ie Machine or Player has reached a score of 5) the modal will display. 

![Modal area](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657054816/Rock%20paper%20scissors/5._Game_Over_Modal_Rock_Paper_Scissors_dk2nwm.png) 

  - The modal informs the user that the Game is over!
  - The modal informs the user who won the game with either one of two options. 
      - Congrats, You have won with Score of 5 - You rock!! Press X in Top Right corner to exit and play again.
      - Machine has won with Score of 5, Better luck next time! Press X in Top Right corner to exit and play again.
  - This modal aims to inform the user of the game outcome in a fun way. 
  - For consistency, colours used in the modal are the same as user has seen throughout the game. 


## Design choices

Certain design decisions were made to keep the game uncluttered and simple.  

- Layout and wording is kept simple and informal throughout the game. 

- Exclamation marks are used for some of the messaging and fun terms like "You rock" in an attempt to keep the game fun and user engaged and entertained. 

- Fonts chosen for the website were simple ones - Lato and Merriweather.  

- As an alternative to using pure white as background colour, the colour Snow Alice blue was used. 

## User Stories


- As a user I expect the game to be easy and enjoyable to play. 

- As a user I expect to see rules and clear instruction in what I need to do. 

- As a user I want to see in picture form the choice (Rock, Paper or Scissors) that I have made.

- As a user I want to see in picture form the choice (Rock, Paper or Scissors) that the machine has made. 

- As a user I want to be informed of the outcome at the end of every round. 

- As a user I want to be informed of the outcome at the very end of the game. 

- As a user I want to be clear when the game is over. 

- As a user I want to know how to play the game again if I so wish. 


## Testing 

Manual Testing 

- I tested that this website works in different browsers: Edge, Chrome and Firefox. 

- I tested that the game is responsive, and displays correctly on standard screen sizes using the devtools device toolbar. 

- I tested that the game loads correctly with Scores displaying as 0 and Player and Machine choices displaying default images (RPS Logo). 

- I tested that the game logic works and scores are updating correctly for Player. 

- I tested that the game logic works and scores are updating correctly for Machine. 

- I tested that when Player or Machine score reaches 5 that the Modal will display correctly to inform user that the Game is over. 

- I tested the Modal displays correctly and closes when the X is clicked or player clicks outside the Modal. 


Solved Bugs 
- Player and Mahcine Scores were not incrementing correctly. 
   - Debugged using console.log and alerts to see how far code was running. Found the Case statement wasn't working correctly, so fixed as required. 
- Modal wasn't displaying when player or machine reached Score of 5. 
    - Again debugged using console.log, located the error and fixed as required. 
- After tidy up of assets folder, Rock Paper Scissors logo wasn't displaying - it was pointing to an older version of logo which was deleted. 
    - Fixed as required by changing src for image. 
-   Rules image wasn't responsive under 500px
    - Included media query to make image responsive. 
-   When I ran through JSHint, I found that I was missing some semi-colons after adding event handlers. 
    - Fixed as required by adding in semi-colons where necessary.  


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Feleavydev.github.io%2Frock-paper-scissors-el%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feleavydev.github.io%2Frock-paper-scissors-el%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Accessibility 
  - I confirmed that the colours and fonts chosen are easy to read and accessible by running it through lighthouse in devtools. 
 - ![Lighthouse Scores](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1657058937/Rock%20paper%20scissors/LighthouseValidation_s64yin.png)


### Unfixed Bugs

No Unfixed bugs. 

## Deployment

- My Source Code on GitHub is available at: [eleavyGitHub](https://github.com/eleavydev/rock-paper-scissors-el)  

- My live deployed project is available at [Rock Paper Scissors](https://eleavydev.github.io/rock-paper-scissors-el/)  

### Cloning and Forking  

1. Cloning

- Go to my GutHub repository at: [eleavyGitHub](https://github.com/eleavydev/rock-paper-scissors-el). 
- Click on the Green "Code" drop down. 
- Choose to either Download the code as a Zip file or Clone manually using Gitlink provided. 

2. Forking

- Go to my GitHub repository at: [eleavyGitHub](https://github.com/eleavydev/rock-paper-scissors-el). 
- Click the Fork button at the top right of the page and wait for a few seconds. 
- You will see that this newly forked repository gets created under your GitHub account.  


### Local Deployment 


- Go to Gitpod.io and create a free account. 
- Download and install necessary extension to Firefox/Chrome (This extension will add green Gitpod button to GitHub so you can easily open repository in Gitpod). 
    - In Firefox, go to menu on the top right and click on Add-ons. From there then search for Gitpod.
    - Type in Gitpod, and its the very first result is the extension that is required. 
    - Click on it click on "Add to Firefox".
    - Confirm permissions. 
  - Go back to GitHub repository at: [eleavyGitHub](https://github.com/eleavydev/rock-paper-scissors-el) and click on the green Gitpod button. 
  - This will open the code in a new Gitpod workspace for you to edit. 
  
### Remote Deployment  


- The site has already been deployed to GitHub pages. 
- If you wish to deploy site, the steps to deploy are as follows: 
  - In the GitHub repository, go to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

## Credits 

### Content 

- The fonts (Lato and Merriweather) were taken from [Google fonts](https://fonts.google.com/). 
- The header text and game instructions was created by myself. 
- The rule text was taken from Code Institute and added to image through Paint. 
- The Love Maths and Code Institute projects were both used as great guides to help with this project. 
- Websites such as [Stackoverflow](https://stackoverflow.com/), [CommunitySpiceworks](https://community.spiceworks.com/) and [W3Schools](https://www.w3schools.com/) were consulted for help with this project. For Modals I especially found this W3 Schools resource very useful https://www.w3schools.com/howto/howto_css_modals.asp 
- As always my mentor Chris was very patient and helpful during this process. 
- Also our Cohort facilitators Kenan and Kasia along with classmates and peers on Slack and tutor support were very helpful to draw on for support. 

### Media

- The icons and images in the game were taken from https://www.istockphoto.com/ and subsquently edited to add in rule text and dice up images for use as individual icons. 
- Photos were then hosted on [Cloudinary](https://cloudinary.com/)