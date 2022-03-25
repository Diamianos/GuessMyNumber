'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
let hasWon = false;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}


document.querySelector(".check").addEventListener('click', function(){
    if (!hasWon){
        const guess = Number(document.querySelector(".guess").value);  

        // If input is empty 
        if(!guess){
           displayMessage("No value in input!");
        }

        // If user guessed secret number
        else if (guess === secretNumber){
            displayMessage("Correct number!");
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = '30rem';
            document.querySelector(".number").textContent = secretNumber;
            hasWon = true;
            if (score > highScore){
                highScore = score;
                document.querySelector(".highscore").textContent = score;
            }
        }

        // If input is wrong
        else if (guess > secretNumber || guess < secretNumber){
            if (score > 1){
                score--;
                document.querySelector(".score").textContent = score;
                displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
                
            } else {
                displayMessage("You lost!");
                document.querySelector(".score").textContent = 0;
            }
        } 
    }  
})

// Reset functionality
document.querySelector(".again").addEventListener('click', function(){
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = '15rem';
    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    score = 20
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    hasWon = false;
})