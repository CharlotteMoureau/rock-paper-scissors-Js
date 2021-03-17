// buttons that the user can click
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const rockButton = document.getElementById('rock')

let userAnswer = ""

// array with the choices of the cpu
const computerAnswers = ["paper", "scissors", "rock"]

// board game
const gameBoard = document.getElementById('game')
const vsBoard = document.getElementById('vs')

// icons of the user displayed after he has clicked
const userPaper = document.getElementById('user-paper')
const userScissors = document.getElementById('user-scissors')
const userRock = document.getElementById('user-rock')

// score board
const score = document.getElementById('score')
let scoreCount = 0

// timeout to launch the cpu choice
let timeout


// gets the choice of the user and displays them in the vs board then displays the cpu's
function userSelected() {
    paperButton.addEventListener('click', function () {
        gameBoard.style.display = 'none'
        vs.style.display = 'grid'
        userPaper.style.display = 'block'
        timeout = setTimeout(getComputerChoice, 1000)
    })
    scissorsButton.addEventListener('click', function () {
        gameBoard.style.display = 'none'
        vs.style.display = 'grid'
        userScissors.style.display = 'block'
        timeout = setTimeout(getComputerChoice, 1000)
    })
    rockButton.addEventListener('click', function () {
        gameBoard.style.display = 'none'
        vs.style.display = 'grid'
        userRock.style.display = 'block'
        timeout = setTimeout(getComputerChoice, 1000)
    })
}

userSelected()

// icons of the cpu displayed after the user has clicked
const hollowCpu = document.getElementById('hollow')
const cpuPaper = document.getElementById('cpu-paper')
const cpuScissors = document.getElementById('cpu-scissors')
const cpuRock = document.getElementById('cpu-rock')


// makes the choice of the cpu random and displays it in the vs board
function getComputerChoice() {
    const choiceOfComputer = computerAnswers[Math.floor(Math.random() * computerAnswers.length)]
    hollowCpu.style.display = 'none'
    if (choiceOfComputer == 'paper') {
        cpuPaper.style.display = 'block'
        cpuPaper.animate([
            // keyframes
            { transform: 'scale(0.0)' },
            { transform: 'scale(1.0)' }
        ], {
            // timing options
            duration: 800,
        });
    } else if (choiceOfComputer == 'scissors') {
        cpuScissors.style.display = 'block'
        cpuScissors.animate([
            // keyframes
            { transform: 'scale(0.0)' },
            { transform: 'scale(1.0)' }
        ], {
            // timing options
            duration: 800,
        });
    } else {
        cpuRock.style.display = 'block'
        cpuRock.animate([
            // keyframes
            { transform: 'scale(0.0)' },
            { transform: 'scale(1.0)' }
        ], {
            // timing options
            duration: 800,
        });
    }
}
