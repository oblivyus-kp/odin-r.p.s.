const button = document.querySelectorAll('button'); 
const roundResults = document.querySelector('.result');
const playerPoints = document.querySelector('#playerScore');
const compPoints = document.querySelector('#computerScore');
button.forEach(button => {
    button.addEventListener('click', getPlayerChoice) });

let comp_points = 0;
let player_points = 0;
let options= ['rock','paper',"scissors"];
function getPlayerChoice(e){
    let playerSelection= (e.target.textContent);
    let result= playRound(playerSelection, computerPlay());
    if (result.slice(0,7) == 'You Win'){
        playerPoints.textContent = ++player_points;
    }
    else{
        if (result.slice(0,8) == 'You Lose'){
            compPoints.textContent = ++comp_points;
        }
    }
    console.log(player_points);
    playRound(playerSelection, computerPlay());
    if (comp_points == 5){
        roundResults.textContent = ("Nice Try, but You Lost to a Computer!");
        comp_points = 0;
        player_points = 0;
        compPoints.textContent = 0;
        playerPoints.textContent = 0;
    }
    if (player_points == 5){
        roundResults.textContent = ("Nice! You Beat a Computer!");
        player_points = 0;
        comp_points = 0;
        compPoints.textContent = 0;
        playerPoints.textContent = 0;
    }
}

function computerPlay(){
    return options[Math.floor(Math.random() * 3)]; /*Selection from options list*/
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == 'rock' && computerSelection == 'rock'){
        roundResults.textContent = ("Tie Game!");
        return roundResults.textContent;
    }
    if (playerSelection == 'paper' && computerSelection == 'paper'){
        roundResults.textContent = ("Tie Game!");
        return roundResults.textContent;
    }
    if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        roundResults.textContent = ("Tie Game!");
        return roundResults.textContent;
    }
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        roundResults.textContent = ("You Lose! Paper beats Rock");
        return roundResults.textContent;
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        roundResults.textContent = ("You Lose! Scissors beats Paper");
        return roundResults.textContent;
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        roundResults.textContent = ("You Lose! Rock beats Scissors");
        return roundResults.textContent;
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        roundResults.textContent = ("You Win! Paper beats Rock");
        return roundResults.textContent;
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        roundResults.textContent = ("You Win! Scissors beats Paper");
        return roundResults.textContent;
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        roundResults.textContent = ("You Win! Rock beats Scissors");
        return roundResults.textContent;
    }
}




