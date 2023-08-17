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


// /rock/i is a regular expression literal. The i flag is used to indicate case-insensitive matching.
//.test(userInput) is a method called on the regular expression. It takes a string (input in this case) as an argument and returns true if the regex pattern is found in the string, otherwise, it returns false.

function processInput(){
    // I ask user to write a string
    const userInput = prompt("Please enter : Rock, Paper or Scissors");
    if(/rock/i.test(userInput)){
        return "Rock";
    } else if (/paper/i.test(userInput)){
        return "Paper";
    } else if (/scissors/i.test(userInput)){
        return "Scissors";
    } else {
        console.log("Invalid Choice, refresh page and do not make mistake");
    }
}



function playRound( playerSelection = processInput(), computerSelection = getComputerChoice()){
    if (playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            return "You Win ! Rock beats Scissors";
            //return 1;

        }else if (computerSelection === "Paper"){
            return "You Lose ! Paper beats Rock";
            //return 2;

        }else{
            return "It's a draw ! Retest asap";
            //return 0;
        }
    } else if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            return "You Win ! Paper beats Rock";
            //return 1;

        }else if (computerSelection === "Scissors"){
            return "You Lose ! Scissors beats Paper";
            //return 2;

        }else{
            return "It's a draw ! Retest asap";
            //return 0;
        }
    } else if (playerSelection === "Scissors"){
        if (computerSelection === "Paper"){
            return "You Win ! Scissors beats Paper";
            //return 1;

        }else if (computerSelection === "Rock"){
            return "You Lose ! Rock beats Scissors";
            //return 2;

        }else{
            return "It's a draw ! Retest asap";
            //return 0;
        }
    }

}


function game () {
    let numberVictoryUser = 0;
    let numberVictoryComputer = 0;
    for (let i=0; i<5; i++){
        const roundResult = playRound();
        if(roundResult.includes("Win")){
            console.log(roundResult);
            numberVictoryUser ++;
        } else if (roundResult.includes("Lose")){
            console.log(roundResult);
            numberVictoryComputer ++;
        } else {
            console.log(roundResult);
        }
    }
    if (numberVictoryUser>numberVictoryComputer){
        console.log("you Win this Game !!!!!");
    } else if (numberVictoryComputer > numberVictoryUser){
        console.log("You lose this Games !!!!!");
    }else {
        console.log("It's a draw !!!!!!")
    }

}

