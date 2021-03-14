const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const rockButton = document.getElementById('rock')

let userAnswer = ''

const computerAnswers = [1, 2, 3]

const score = document.getElementById('score')
let scoreCount = 0
score.innerText = scoreCount


function getUserAnswer() {
    paperButton.addEventListener('click', function () {
        userAnswer = 1
    });

    scissorsButton.addEventListener('click', function () {
        userAnswer = 2
    });

    rockButton.addEventListener('click', function () {
        userAnswer = 3
    });
}

document.querySelectorAll('.button').forEach(element => {
    element.addEventListener('click', function () {

        getUserAnswer()
        const computerChoice = computerAnswers[Math.floor(Math.random() * computerAnswers.length)]


        if (userAnswer == computerChoice) {
            console.log('tie')
        } else if (userAnswer == 1 && computerChoice == 2 || userAnswer == 2 && computerChoice == 3 || userAnswer == 3 && computerChoice == 1) {
            scoreCount = scoreCount - 1
            score.innerText = scoreCount
        } else {
            scoreCount = scoreCount + 1
            score.innerText = scoreCount
        }
    })
});
