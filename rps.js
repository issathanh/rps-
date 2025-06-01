//value initiation
let rock = "rock"
let paper = "paper"
let scissor = "scissor"

// 1.Create a new function named getComputerChoice
// 2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
let getComputerChoice = () => {
    let r = getRandomInt(3)
    return toRPS(r)
}
//1a. create a function that generate random integer from 0 to 2 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//1.b assign random number to strings 
function toRPS(r) {
    let ret;
    if (r == 0)
        ret = rock
    if (r == 1)
        ret = paper;
    if (r == 2) {
        ret = scissor
    }
    return ret;
}

// for (let i = 0; i < 5; i++) {
//     getComputerChoice()
// }\
// Create a new function named getHumanChoice.
function getHumanChoice(r) {
    return prompt("rock paper scissor?");


}
// Write the code s</script> that getHumanChoice will return one of the valid choices depending on what the user inputs.

let humanScore = 0;
let computerScore = 0;
//compare increase the score of whoever win in rock paper scissor 
function compare(humanChoice, computerChoice) {
    printCompChoice(computerChoice)
    switch (humanChoice) {
        case rock:
            computerChoice == rock ? console.log("its a tie") : computerChoice == "paper" ? addScore("computer") : addScore("human");
            break;
        case paper:
            computerChoice == paper ? console.log("its a tie") : computerChoice == "scissor" ? addScore("computer") : addScore("human");
            break;
        case scissor:
            computerChoice == scissor ? console.log("its a tie") : computerChoice == "rock" ? addScore("computer") : addScore("human");
            break;
    }
    console.log("human:" + humanScore + "\n" + "computer:" + computerScore)

}
//add score to whoever win
function addScore(winner) {
    if (winner == "computer") {
        computerScore++
        liComp.textContent = "Computer Score: " + computerScore
    }
    else if (winner == "human") {
        humanScore++
        liHuman.textContent = "Human Score: " + humanScore
    }
}
//create a div and add a button in it
div = document.querySelector("div")
btn = document.createElement("button")
div.appendChild(btn)
btn.textContent = "Play Now!"
//make a list to keep track of the score 
ul = document.createElement("ul")
liHuman = document.createElement("li")
liComp = document.createElement("li")
liHuman.textContent = "Human score: " + humanScore
liComp.textContent = "Computer score: " + computerScore
//add the list to the div
ul.appendChild(liHuman)
ul.appendChild(liComp)
div.appendChild(ul)
//create button for rock paper scissor 
btnRock = document.createElement("button")
btnPaper = document.createElement("button")
btnScissor = document.createElement("button")
//creae three button for player choice
btnRock.textContent = "Rock"
btnPaper.textContent = "Paper"
btnScissor.textContent = "Scissor"
//When PlayNow is Click game options show up 
btn.addEventListener('click', () => {
    addButton();
})
function addButton() {
    div.appendChild(btnRock)
    div.appendChild(btnPaper)
    div.appendChild(btnScissor)
}
//When the buttons are click 
btnRock.addEventListener('click', () => {
    if (max(humanScore, computerScore))
        compare(rock, getComputerChoice())
    else
        printWinner()
})
btnPaper.addEventListener('click', () => {
    if (max(humanScore, computerScore))
        compare(paper, getComputerChoice())
    else
        printWinner()
})
btnScissor.addEventListener('click', () => {
    if (max(humanScore, computerScore))
        compare(scissor, getComputerChoice())
    else
        printWinner()
})

//print computer choice 
compChoiceHeader = document.createElement("h3")
div.appendChild(compChoiceHeader)

function printCompChoice(getComputerChoice) {
    compChoiceHeader.textContent = "comp choice: " + getComputerChoice;
}

//check if human score and computer score is bigger than 5 
let max = (humanScore, computerScore) => humanScore < 5 && computerScore < 5 ? true : false

//print winner 
function printWinner() {
    humanScore = 5 ? compChoiceHeader.textContent = "Human win!" : compChoiceHeader.textContent = "Computer win!"
}