const randNum = Math.floor(Math.random() * 20);//number generated by game

const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('guess');
const message = document.getElementById('game-message');
const main_background = document.getElementById('main');
const playAgainBtn = document.getElementById('play-again');
const scoreMsg = document.getElementById('score');

console.log(randNum);

let num_tries = 0;//number of times the user guessed
playAgainBtn.disabled = true;//disable again button at start of game
let high_score = 0;//highest score
let score = 10;//starting score

/*Check whether the player's guess matches the number generated by the game */
function checkButton(){
    
    const max_tries = 10;
    let game_over = isTen(max_tries);
    console.log(game_over);

    //if num_tries is maxed; game over!, then disable check button
    if(game_over){
        gameOver();
    }
    else{
        console.log('checking number...')
        updateNumTries();
        if(userInput.value == randNum){
            console.log('You guessed the right number!');
            message.textContent = 'You guessed the right number!';
            increaseScore();
            main_background.style.backgroundColor = '#006600';
            disableCheckBtn()
            enableAgainBtn()
        }else if(userInput.value > randNum){
            console.log('You guessed too high');
            message.textContent = 'You guessed too high';
            deductScore();
            main_background.style.backgroundColor = '#cc0000';
        }else if(userInput.value < randNum){
            console.log('You guessed low');
            message.textContent = 'You guessed too low';
            deductScore();
            main_background.style.backgroundColor = '#cc7a00';
        }
    }
    showScore();  

    if(score == 0){
       gameOver();
    }
}

/*indicate game over */
function gameOver(){
    message.textContent = 'GAME OVER!! 😥';
    showScore();
    disableCheckBtn();
    enableAgainBtn();
}

/*reset score */
function resetScore(){
    score = 0;
}

/*display score */
function showScore(){
    scoreMsg.textContent = score;
}

/*deduct score when player guesses the wrong number*/
function deductScore(){
    score -= 1;
}

/*increase score when player guesses the right number*/
function increaseScore(){
    score += 10;
}

/*Check the value of num_tries*/
function isTen(max_tries){
    if(num_tries < max_tries){
        return false;
    }
    else{
        return true;
    }
}

/*if num_tries < 10, add 1 to it's value*/
function updateNumTries(){
    num_tries++;
    console.log(num_tries);

}

/*Disable check button at game over*/
function disableCheckBtn(){
    checkBtn.disabled = true;
}

/*Enbale again button at game over*/ 
function enableAgainBtn(){
    playAgainBtn.disabled = false;
}

checkBtn.addEventListener('click', checkButton);

//TODO: create condition to check that the player is choosing a number between 1 and 20 (no more, or no less) and show message
//TODO: once player presses play again button, reset userInput and game-message, give main background it's original color
//TODO: keep track of high score
