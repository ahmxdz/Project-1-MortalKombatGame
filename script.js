// Setting up consts
const gameFeed = document.querySelector(".gameFeed")

const playerCpuTurnFeed = document.querySelector(".playercputurnfeed")


// Grabbing Button Elements from the DOM 

const playerHealBtn = document.getElementById("playerHealbtn")

const playerAttackBtn = document.getElementById("playerAttackbtn")

const resetButton = document.querySelector(".resetBtn")

// Grabbing <div> health bar and modify content

const player1HealthBar = document.getElementsByClassName("playerhealthbar")

const cpuHealthBar = document.getElementsByClassName("computerhealthbar")

const playerCurrentHealthAmountElem = document.getElementById('playerHealthAmount')

const cpuCurrentHealthAmountElem = document.getElementById('computerHealthAmount')

// Randon Attack and Heal math

const randomNumberAttack = () => Math.floor((Math.random() * (25))+ 1)

const randomNumberHeal = () => Math.floor((Math.random() * (5))+ 1)

let isGameWon = false

let player1Health = 100

let player2Health = 100


// Adding Event Listners

resetButton.addEventListener("click", resetGame)
playerAttackBtn.addEventListener("click", player1AttackClicked)
playerHealBtn.addEventListener("click", player1HealButtonClicked)

// Making Functions
//-------------------------
// Player Button Functions

function player1HealButtonClicked(){
    let randomNumber = randomNumberHeal()
        if(randomNumber + player2Health <= 100){
            player2Health += randomNumber
                randomNumberPercentagePlayerHeal(randomNumber)
            
        } else {
            randomNumberPercentagePlayer(100)

     }
     mediumhealthPlayer(player2Health)
     lowhealthPlayer(player2Health)
     runCpuMove()
     return player2Health
 }

function player1AttackClicked(){
    let randomNumber = randomNumberAttack()
        if(randomNumber <= player1Health){
            player1Health -= randomNumber
                randomNumberPercentagePlayer(randomNumber)
                
        } else {
            randomNumberPercentagePlayer(0)
            endGame(1)
     }
     mediumHealthCpu(player1Health)
     lowHealthCpu(player1Health)
     if (!isGameWon) runCpuMove()
     return player1Health
 }

 function randomNumberPercentagePlayerHeal(number) {
    if(number == 0){
        playerCurrentHealthAmountElem.innerText = 0
    }else{
        playerCurrentHealthAmountElem.innerText = player2Health
        gameFeed.innerText = `Player Gained ${number}% Health`
        document.querySelector('.playerhealthbar').style.width = `${player2Health}%`
        playerCpuTurnFeed.innerText = `CPU's Turn`
    }
}
function randomNumberPercentagePlayer(number) {
    if(number == 0){
        cpuCurrentHealthAmountElem.innerText = 0
        document.querySelector('.computerhealthbar').style.width = "0%" 
    }else{
        cpuCurrentHealthAmountElem.innerText = player1Health
        document.querySelector('.computerhealthbar').style.width = `${player1Health}%`
        gameFeed.innerText = `Player Dealt ${number}% Damage`
        playerCpuTurnFeed.innerText = `CPU's Turn`
        
    }
}

// Health Bar Function
 function mediumhealthPlayer(number) {
    if(number <= 70){
        document.querySelector('.playerhealthbar').style.backgroundColor = "yellow"
    }

 }

 function lowhealthPlayer(number) {
    if(number <= 30){
        document.querySelector('.playerhealthbar').style.backgroundColor = "red"
    }

 }

 function mediumHealthCpu(number) {
    if(number <= 70){
        document.querySelector('.computerhealthbar').style.backgroundColor = "yellow"
    }

 }

 function lowHealthCpu(number) {
    if(number <= 30){
        document.querySelector('.computerhealthbar').style.backgroundColor = "red"
    }

 }

// Player 2 Functions
function randomNumberPercentagePlayer2Heal(number) {
    if(number == 0){
        cpuCurrentHealthAmountElem.innerText = 0
    }else{
        cpuCurrentHealthAmountElem.innerText = player1Health
        document.querySelector('.computerhealthbar').style.width = `${player1Health}%`
        gameFeed.innerText = `CPU Gained ${number}% Health`
        playerCpuTurnFeed.innerText = `Player's Turn`
        
    }
}
function randomNumberPercentagePlayer2(number) {
    if(number == 0){
        playerCurrentHealthAmountElem.innerText = 0
        document.querySelector('.computerhealthbar').style.width = "0%" 
    }else{
        playerCurrentHealthAmountElem.innerText = player2Health
        gameFeed.innerText = `CPU Dealt ${number}% Damage`
        document.querySelector('.playerhealthbar').style.width = `${player2Health}%`
        playerCpuTurnFeed.innerText = `Player's Turn`
        
    }
}
function player2HealFunction(){
    let randomNumber = randomNumberHeal()
        if(randomNumber + player1Health <= 100){
            player1Health += randomNumber
                randomNumberPercentagePlayer2Heal(randomNumber)
        } else {
            randomNumberPercentagePlayer(100)
     }
     mediumHealthCpu(player1Health)
     lowHealthCpu(player1Health)
     return player1Health
 }

function player2AttackFunction(){
    let randomNumber = randomNumberAttack()
        if(randomNumber <= player2Health){
            player2Health -= randomNumber
                randomNumberPercentagePlayer2(randomNumber)
         }else{
            randomNumberPercentagePlayer2(0)
            endGame(2)
            
                  
    }
    mediumhealthPlayer(player2Health)
    lowhealthPlayer(player2Health)
    return player2Health
}

// End Game Functionality
function endGame(valueOfWinner){
    playerAttackBtn.disabled = true
    isGameWon = true
    if(valueOfWinner == 1){
        playerCpuTurnFeed.innerText = `Congrats You Killed your opponent`
        gameFeed.innerText = `Player Wins`
    }else if(valueOfWinner == 2){
        playerCpuTurnFeed.innerText = `You got Killed you loser`  
        gameFeed.innerText = `CPU Wins`   
    }
   
}

 //Reset Board function
function resetGame(){
    resetButton.addEventListener('click', function(){
        window.location.reload();
        return false;
      });
    
}

// CPU move timer
function runCpuMove(){
    setTimeout(() => {
        let randomNumber = (Math.random())
        if (randomNumber > .5){
            player2HealFunction()
        }else{
            player2AttackFunction()
        }
     }, 2000)
}