console.log("Hello World");

function getComputerChoice(){
    /* I put in an array all choices*/
    let choices = ["Rock","Paper","Scissors"];

    /*Math.random() find a number between [0;1[*/
    /* (math.radom*choices.length) return a number between [0;3]*/
    /* math.floor rounds down to the nearest integer*/
    let randomIndex = Math.floor(Math.random() * choices.length);


    let computerChoice = choices[randomIndex];
    return computerChoice;
}

console.log("Computer choice : ", getComputerChoice());