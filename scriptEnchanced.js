// Defining Const
const playerState = {
    health : 100,
    clicked : false
}
const cpuState = {
    health : 100,
    clicked : false
}

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

const playerCurrentHealth = parseInt(playerCurrentHealthAmountElem.textContent)

const cpuCurrentHealthAmountElem = document.getElementById('computerHealthAmount')

const cpuCurrentHealth = parseInt(cpuCurrentHealthAmountElem.textContent)

let player1Health = 100

let player2Health = 100


// Adding Event Listners

resetButton.addEventListener("click", resetGame)
playerAttackBtn.addEventListener("click", player1AttackClicked)
playerHealBtn.addEventListener("click", player1HealButtonClicked)

// Making Functions
//-------------------------
// Player Functions

function player1Attack() {
    const attackAmount = getRandomNumber()
    updateHealth('player2', attackAmount)
    updateGameFeed('player1', 'attack', attackAmount)
}
function player1Heal() {
    const healAmount = getRandomNumber()
    updateHealth('player1', attackAmount)
    updateGameFeed('player1', 'heal', attackAmount)
}
function getRandomNumber(){
    Math.floor((Math.random() * (25))+ 1)
}

function updateHealth(){

}

function updateGameFeed() {

}




// New Functionality
