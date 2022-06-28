# Rock Paper Scissors - You against the machine!!

Rock Paper Scissors - You against the machine!! is a very simple website which allows users to play a game of Rock Paper Scissors. 

Users of this game will be able to see the rules of the game, play against the computer, view their score and see who wins the entire game. 
The winner is whoever wins the most out of 5 rounds. 

<!-- ![Screenshots of Red Roots Farm website](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1653391863/redrootsfarm/Website_Screenshot24052022_p2wam3.png "Red Roots Farm") -->

#### Live website can be found at: https://eleavydev.github.io/rock-paper-scissors-el/


## Features 
### Existing Features

The first iteration of Rock paper Scissors is a simple one page website. 


- __The Header (Including landing page image and Tagline)__




## The Header (including landing page image and Tagline)

<!-- ![Landing Page](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1653388732/redrootsfarm/redroots_heroimage_withTagline_lv3ovl.png) -->

  - The landing page includes a photograph of Red Roots Farm with vibrant trees, flowers and green grass aiming to give the user an instant 'feel' for the Red Roots Farm space. 
  - This section aims to invite the user in to Red Roots Farm with an animation to grab their attention and almost pull them gently inwards to explore more. 
  - The tagline of "Reconnect - Realign - Rediscover" is immediately below the photograph in block capitals. This captures the essence of Red Roots Farm - Claire and Tom hope they can help people to reconnect, realign and rediscover during a visit to Red Roots Farm. 

## About Us Section

<!-- ![About Us](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1653388731/redrootsfarm/redroots_aboutus_q4amon.png) -->

  - The About Us section sets the scene of what Red Roots Farm is, where it is located and introduces the owners. 
  - It describes the Red Roots Farm concept with simple yet emotive language such as safe, peaceful, relax, realign and rediscover. This is in line with the Landing page photo and the tagline and aims to interest the user and invite them to learn more. 
  - The guiding values of slowing down, minding ourselves, each other and the land are mentioned. 
  - It also explains where the name "Red Roots farm" came from and relates it to visualising our base chakra with big strong red roots stretching deep into the earth, grounding us. 
  - Tom and Claire, the owners of Red Roots farm are briefly introduced and their skills and passion for sustainability, wellness and creativity are highlighted. 
  - A photo of a smiling Tom and Claire is included which makes it more personal and encourages the user to feel like a friend. 
  - This opening section aims to give the user a mini introduction into the meaning and purpose of Red Roots farm and it's owners Tom and Claire. 




## Design choices

Certain design decisions were made to keep the website 'clean', uncluttered, simple and easy to navigate. 

- In keeping with the essence of Red Roots Farm, photos on the website show flowers, greenery, colour and vibrancy of nature. 

- There are lots of images displayed on the website as the saying says... "A picture paints a thousand words". 

- Fonts chosen for the website were simple ones - Lato (For Headings) and Merriweather (For Body Text) as research indicated they pair well together and are "pleasant to read". 

- As an alternative to using pure white as background colour, the colour Snow (#FFFAFA) was used as research suggested this as a good alternative 
[PicMonkey](https://www.picmonkey.com/colors/white/off-white). 

## User Stories

- As a user I expect the site to be uncluttered and easy to read.

- As a user I expect the site to be easy to navigate. 

- As a user I want to know what page I am currently on. 

- As a user I want to know I can get back to Home from any page I am on. 

- As a user I want to know about Red Roots Farm without having to trawl through lots of information. 

- As a user I want to know the key points at a glance (What is Red Roots farm, who are the people behind it, what can I do there and what are the spaces there). 


## Testing 

Manual Testing 

- I tested that this website works in different browsers: Edge, Chrome and Safari. 

- I tested that this website is responsive, and displays correctly on standard screen sizes using the devtools device toolbar. 

- I confirmed that the navigation, header, about us, gallery and contact us text is legible and easy to understand. 

- I confirmed that the links throughout the site all work and go where they're meant to (Logo, Navigation Bar, Local Attraction website links to external, Social Media links in footer). 

- I confirmed that the form works as expected. Every field (Name, Email address, Question/Comment) has required field validator and also Email address field requires email address. Finally, the submit button works correctly. 


Solved Bugs 
- Logo on the Contact Us page didn't return back to index.html. 
   - Fixed as required by changing url. 
- Some of the images weren't loading correctly as initially I was hosting images within the site but then moved to Cloudinary.
    - Fixed as required by correcting urls. 
- Text Area on the Contact Us page wasn't resizing properly for smaller screens. 
    - Fixed as required by setting max-width: 100% in media query. 
-   Home link was displaying as Active on the Gallery page Navigation Bar, when Gallery should be displaying as active. 
    - Fixed as required by setting class="active" for Gallery. 
- Message input field on the Contact Us Page didn't have required field validator on it. 
    - Fixed as required by including 'required'. 
- Message input field wasn't getting the exact same settings applied as the Name and Email Address, so appeared visually inconsistent. 
    - Fixed as required by correcting css selectors. 
- Uisneach link in Local Attractions section wasn't pointing to correct website. 
    - Fixed as required by changing url. 


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Feleavydev.github.io%2Fredroots-farm%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feleavydev.github.io%2Fredroots-farm%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Accessibility 
  - I confirmed that the colours and fonts chosen are easy to read and accessible by running it through lighthouse in devtools. 
 - ![Lighthouse Scores](https://res.cloudinary.com/dlsbkq7mw/image/upload/v1653604983/redrootsfarm/lighthousescores_ekmdyz.png)


### Unfixed Bugs

No Unfixed bugs. 

## Deployment

- My Source Code on GitHub is available at: [eleavyGitHub](https://github.com/eleavydev/redroots-farm)

- My live deployed project is available at [RedRootsFarm](https://eleavydev.github.io/redroots-farm/)

### Cloning and Forking  

1. Cloning

- Go to my GutHub repository at: [eleavyGitHub](https://github.com/eleavydev/redroots-farm). 
- Click on the Green "Code" drop down. 
- Choose to either Download the code as a Zip file or Clone manually using Gitlink provided. 

2. Forking

- Go to my GitHub repository at: [eleavyGitHub](https://github.com/eleavydev/redroots-farm). 
- Click the Fork button at the top right of the page and wait for a few seconds. 
- You will see that this newly forked repository gets created under your GitHub account.  


### Local Deployment 


- Go to Gitpod.io and create a free account. 
- Download and install necessary extension to Firefox/Chrome (This extension will add green Gitpod button to GitHub so you can easily open repository in Gitpod). 
    - In Firefox, go to menu on the top right and click on Add-ons. From there then search for Gitpod.
    - Type in Gitpod, and its the very first result is the extension that is required. 
    - Click on it click on "Add to Firefox".
    - Confirm permissions. 
  - Go back to GitHub repository at: [eleavyGitHub](https://github.com/eleavydev/redroots-farm) and click on the green Gitpod button. 
  - This will open the code in a new Gitpod workspace for you to edit. 
  
### Remote Deployment  


- The site has already been deployed to GitHub pages. 
- If you wish to deploy site, the steps to deploy are as follows: 
  - In the GitHub repository, go to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

## Credits 

### Content 

- The text for the Home page was created by Red Roots farm and myself as website creator. 
- The fonts (Lato and Merriweather) were taken from [Google fonts](https://fonts.google.com/). 
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- The Love Running and Coders Coffehouse projects were both used as great guides to help with this first project. 
- Websites such as [Stackoverflow](https://stackoverflow.com/), [CommunitySpiceworks](https://community.spiceworks.com/) and [W3Schools](https://www.w3schools.com/) were consulted for help with this project. 
- My mentor Chris was very patient and helpful during this process. 
- Also our Cohort facilitators Kenan and Kasia along with classmates and peers on Slack and tutor support were very helpful to draw on for support. 

### Media

- The photos used throughout this site have all been created by Red Roots farm. 
- Font Awesome [Font Awesome](https://fontawesome.com) was very useful to find interesting icons to use. 
- Large photos were compressed through [Birme](https://www.birme.net/) 
- Photos were then hosted on [Cloudinary](https://cloudinary.com/)