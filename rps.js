// 1.Create a new function named getComputerChoice
let getComputerChoice = () => {
    let r = getRandomInt(3)
    console.log(toRPS(r))
}
//1a. create a function that generate random integer from 0 to 2 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//1.b assign random number to strings 
function toRPS(r) {
    let ret;
    if (r == 0)
        ret = "Rock";
    if (r == 1)
        ret = "Paper";
    if (r == 2) {
        ret = "Scissor"}
    return ret;
}

for (let i = 0; i < 5; i++) {
    getComputerChoice()
}
// 2. Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.