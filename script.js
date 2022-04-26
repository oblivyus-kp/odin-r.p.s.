
function computerPlay(){
    let options= ['rock','paper',"scissors"];
    let choose= Math.floor(Math.random() * 3); /*Chooses a random number from 0-2*/
    return options[choose]; /*Selection from options list*/
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'rock'){
        return ("Tie Game!");
    }
    if (playerSelection == 'paper' && computerSelection == 'paper'){
        return ("Tie Game!");
    }
    if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return ("Tie Game!");
    }
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return ("You Lose! Paper beats Rock");
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return ("You Lose! Scissors beats Paper");
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return ("You Lose! Rock beats Scissors");
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        return ("You Win! Paper beats Rock");
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return ("You Win! Scissors beats Paper");
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return ("You Win! Rock beats Scissors");
    }
}

function game(){
    let comp_points = 0;
    let player_points = 0;
    while (comp_points<5 && player_points<5){
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.slice(0,7) == 'You Win'){
            player_points += 1
        }
        else{
            if (result.slice(0,8) == 'You Lose'){
                comp_points += 1;
            }
        }
    }
    if (comp_points == 5){
        return ("Nice Try, but You Lost to a Computer!");
    }
    if (player_points == 5){
        return ("Nice! You Beat a Computer!");
    }
}

console.log(game());