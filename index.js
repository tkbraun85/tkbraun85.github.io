let choices = ["paper", "rock", "scissors"]
let computerChoice = choices[Math.floor(Math.random() * 3)]
let userPoints = 0
let computerPoints = 0

const scoreEl = document.getElementById("score")
const boxEl = document.getElementById("challenge")
const userChoiceEl = document.getElementById("yourChoice")
const computerChoiceEl = document.getElementById("computerChoice")
const resultEl = document.getElementById("result")
const resetEl = document.getElementById("yourChoice-wrapper")
const resetScoreButton = document.getElementById("resetScoreButton")

const setScore = () =>  {
    computerChoice = choices[Math.floor(Math.random() * 3)]
    scoreEl.innerHTML = `${userPoints} - ${computerPoints}`
}

function convert(choice) {
    if(choice === "paper") return '<i id="responseIcon" class="far fa-hand-paper"></i>'
    if(choice === "rock") return '<i id="responseIcon" class="far fa-hand-rock"></i>'
    if(choice === "scissors") return '<i id="responseIcon" class="far fa-hand-scissors"></i>'
}

resetScoreButton.addEventListener("click", () => {
    scoreEl.innerHTML = `0 - 0`
    userPoints = 0
    computerPoints = 0
})

async function play(userChoice) {
    resetEl.classList.contains("activeLeft") && clearTimeout(choiceTimer)
    boxEl.style.display = "inline-flex"
    userChoiceEl.innerHTML = convert(userChoice)
    computerChoiceEl.innerHTML = convert(computerChoice)
    setResultsYay()
    setTimeout(() => {
        if ((userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'rock' && computerChoice === 'scissors')) {
            win()
        } else if (userChoice === computerChoice) {
            draw()
        } else {
            lose()
        }
    }, 700)
    let choiceTimer = setTimeout(() => {removeResultsYay()}, 2900)
}

function setResultsYay() {
    document.getElementById("yourChoice-wrapper").classList.add('activeLeft')
    document.getElementById("computerChoice-wrapper").classList.add('activeRight')
}
function removeResultsYay() {
    document.getElementById("yourChoice-wrapper").classList.remove('activeLeft')
    document.getElementById("computerChoice-wrapper").classList.remove('activeRight')
    resultEl.innerHTML = ""
}

function win() {
    resultEl.innerHTML = "You Win!"
    userPoints++
    setScore()
}
function draw() {
    resultEl.innerHTML = "Draw"
}
function lose() {
    resultEl.innerHTML = "You lose!"
    computerPoints++
    setScore()
}
