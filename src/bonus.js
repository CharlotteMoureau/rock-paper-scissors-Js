function hover(image) {
    image.setAttribute('src', './assets/images/logo.svg')
}

function unhover(image) {
    image.setAttribute('src', './assets/images/logo-bonus.svg')
}

let cpuAnswer = []

// array with the choices of the cpu
const computerPossibleChoice = ["paper", "scissors", "rock", "lizard", "spock"]

// board game
const gameBoard = document.getElementById('game')
const vsBoard = document.getElementById('vs')

// icons of the user displayed after he has clicked
const userPaper = document.getElementById('user-paper')
const userScissors = document.getElementById('user-scissors')
const userRock = document.getElementById('user-rock')
const userLizard = document.getElementById('user-lizard')
const userSpock = document.getElementById('user-spock')
const allIcons = document.querySelectorAll('.delete')

// score board
const score = document.getElementById('score')
let scoreCount = 0

// icons of the cpu displayed after the user has clicked
const hollowCpu = document.getElementById('hollow')
const cpuPaper = document.getElementById('cpu-paper')
const cpuScissors = document.getElementById('cpu-scissors')
const cpuRock = document.getElementById('cpu-rock')
const cpuLizard = document.getElementById('cpu-lizard')
const cpuSpock = document.getElementById('cpu-spock')


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
    } else if (choiceOfComputer == 'rock') {
        cpuRock.style.display = 'block'
        cpuAnswer.push('rock')
    } else if (choiceOfComputer == 'lizard') {
        cpuLizard.style.display = 'block'
        cpuAnswer.push('lizard')
    } else {
        cpuSpock.style.display = 'block'
        cpuAnswer.push('spock')
    } return cpuAnswer
}

function tie() {
    announceResult.style.display = 'block'
    winOrLose.innerHTML = "It's a tie"
}

function win() {
    scoreCount += 1
    score.innerHTML = scoreCount
    announceResult.style.display = 'block'
    winOrLose.innerHTML = "You win"
}

function lose() {
    scoreCount -= 1
    score.innerHTML = scoreCount
    announceResult.style.display = 'block'
    winOrLose.innerHTML = "You lose"
}

function getResult(userChoice) {
    switch (userChoice) {
        case "paper":
            if (cpuAnswer == 'paper') {
                tie()
            } else if (cpuAnswer == 'scissors') {
                lose()
            } else if (cpuAnswer == 'rock') {
                win()
            } else if (cpuAnswer == 'lizard') {
                lose()
            } else if (cpuAnswer == 'spock') {
                win()
            }
            break
        case "scissors":
            if (cpuAnswer == 'paper') {
                win()
            } else if (cpuAnswer == 'scissors') {
                tie()
            } else if (cpuAnswer == 'rock') {
                lose()
            } else if (cpuAnswer == 'lizard') {
                win()
            } else if (cpuAnswer == 'spock') {
                lose()
            }
            break
        case "rock":
            if (cpuAnswer == 'paper') {
                lose()
            } else if (cpuAnswer == 'scissors') {
                win()
            } else if (cpuAnswer == 'rock') {
                tie()
            } else if (cpuAnswer == 'lizard') {
                win()
            } else if (cpuAnswer == 'spock') {
                lose()
            }
            break
        case "lizard":
            if (cpuAnswer == 'paper') {
                win()
            } else if (cpuAnswer == 'scissors') {
                lose()
            } else if (cpuAnswer == 'rock') {
                lose()
            } else if (cpuAnswer == 'lizard') {
                tie()
            } else if (cpuAnswer == 'spock') {
                win()
            }
            break
        case "spock":
            if (cpuAnswer == 'paper') {
                lose()
            } else if (cpuAnswer == 'scissors') {
                win()
            } else if (cpuAnswer == 'rock') {
                win()
            } else if (cpuAnswer == 'lizard') {
                lose()
            } else if (cpuAnswer == 'spock') {
                tie()
            }
            break
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
            case "lizard":
                userLizard.style.display = 'block'
                timeout = setTimeout(getComputerChoice, 1000)
                timeout = setTimeout(() => {
                    getResult(userChoice)
                }, 2000)
                break
            case "spock":
                userSpock.style.display = 'block'
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
