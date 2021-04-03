let cpuAnswer = []

// array with the choices of the cpu
const computerPossibleChoice = ["paper", "scissors", "rock"]

// board game
const gameBoard = document.getElementById('game')
const vsBoard = document.getElementById('vs')

// icons of the user displayed after he has clicked
const userPaper = document.getElementById('user-paper')
const userScissors = document.getElementById('user-scissors')
const userRock = document.getElementById('user-rock')
const allIcons = document.querySelectorAll('.delete')

// score board
const score = document.getElementById('score')
let scoreCount = 0

// icons of the cpu displayed after the user has clicked
const hollowCpu = document.getElementById('hollow')
const cpuPaper = document.getElementById('cpu-paper')
const cpuScissors = document.getElementById('cpu-scissors')
const cpuRock = document.getElementById('cpu-rock')


// makes the choice of the cpu random and displays it in the vs board
function getComputerChoice() {
    const choiceOfComputer = computerPossibleChoice[Math.floor(Math.random() * computerPossibleChoice.length)]
    hollowCpu.style.display = 'none'
    if (choiceOfComputer == 'paper') {
        cpuPaper.style.display = 'block'
        cpuAnswer.push('paper')
    } else if (choiceOfComputer == 'scissors') {
        cpuScissors.style.display = 'block'
        cpuAnswer.push('scissors')
    } else {
        cpuRock.style.display = 'block'
        cpuAnswer.push('rock')
    } return cpuAnswer
}

function getResult(userChoice) {
    if (userChoice == "paper" && cpuAnswer == "paper" || userChoice == "scissors" && cpuAnswer == "scissors" || userChoice == "rock" && cpuAnswer == "rock") {
        announceResult.style.display = 'block'
        winOrLose.innerHTML = "It's a tie"
    } else if (userChoice == "paper" && cpuAnswer == "scissors" || userChoice == "scissors" && cpuAnswer == "rock" || userChoice == "rock" && cpuAnswer == "paper") {
        scoreCount -= 1
        score.innerHTML = scoreCount
        announceResult.style.display = 'block'
        winOrLose.innerHTML = "You lose"
    } else if (userChoice == "paper" && cpuAnswer == "rock" || userChoice == "scissors" && cpuAnswer == "paper" || userChoice == "rock" && cpuAnswer == "scissors") {
        scoreCount += 1
        score.innerHTML = scoreCount
        announceResult.style.display = 'block'
        winOrLose.innerHTML = "You win"
    }
}

// timeout to launch the cpu choice
let timeout

const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const userChoice = button.value
        gameBoard.style.display = 'none'
        vs.style.display = 'grid'

        switch (userChoice) {

            case "paper":
                userPaper.style.display = 'block'
                timeout = setTimeout(getComputerChoice, 1000)
                timeout = setTimeout(() => {
                    getResult(userChoice)
                }, 2000)
                break

            case "scissors":
                userScissors.style.display = 'block'
                timeout = setTimeout(getComputerChoice, 1000)
                timeout = setTimeout(() => {
                    getResult(userChoice)
                }, 2000)
                break

            case "rock":
                userRock.style.display = 'block'
                timeout = setTimeout(getComputerChoice, 1000)
                timeout = setTimeout(() => {
                    getResult(userChoice)
                }, 2000)
                break

            default:
                alert('there must be an error')
        }
    })
})

const announceResult = document.getElementById('result')
const winOrLose = document.getElementById('win-or-lose')

document.getElementById('play').addEventListener('click', function () {
    cpuAnswer.pop()
    hollowCpu.style.display = 'block'

    allIcons.forEach((icon) => {
        if (icon.style.display = "block") {
            icon.style.display = "none"
        }
    })
    gameBoard.style.display = 'flex'
    vs.style.display = 'none'
    announceResult.style.display = 'none'
})
