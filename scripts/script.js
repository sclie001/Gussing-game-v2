let randNum = Math.floor(Math.random() * 20);//number generated by game

const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('guess');
const message = document.getElementById('game-message');
const main_background = document.getElementById('main');
const playAgainBtn = document.getElementById('play-again');
const scoreMsg = document.getElementById('score');

console.log(randNum);

let num_tries = 0;//number of times the user guessed
const max_tries = 10;//maximum num of tries
playAgainBtn.disabled = true;//disable again button at start of game
let high_score = 0;//highest score
const startingScore = 10; //starting score
let score = startingScore;

/*Check whether the player's guess matches the number generated by the game */
function checkButton(){
    
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

/*allow the player to play the game again */
function playAgain(){
    let game_over = isTen(max_tries);
    disableAgainBtn();
    resetInput();
    console.log(num_tries);
    if(game_over){
        resetScore(startingScore);
        resetNumTries();
    }
    showScore();
    resetGameMsg();
    resetBackground();
    enableCheckBtn();
    
    randNum = Math.floor(Math.random() * (20 - 1 + 1) - 1 );
    console.log(randNum);
}

/*reset number of tries */
function resetNumTries(){
    num_tries = 0;
}

/*reset user input*/
function resetInput(){
    userInput.value = "";
}

/*reset game message */
function resetGameMsg(){
    message.textContent = "Start guessing...";
}

/*reset main section background color */
function resetBackground(){
    main_background.style.backgroundColor = '#262626';
}

/*indicate game over */
function gameOver(){
    message.textContent = 'GAME OVER!! 😥';
    resetScore(0);
    showScore();
    disableCheckBtn();
    enableAgainBtn();
}

/*reset score */
function resetScore(reset){
    score = reset;
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

/*Enable check button at play again*/
function enableCheckBtn(){
    checkBtn.disabled = false;
}

/*Disable check button at game over*/
function disableCheckBtn(){
    checkBtn.disabled = true;
}

/*disable again button */
function disableAgainBtn(){
    playAgainBtn.disabled = true;
}

/*Enbale again button at game over*/ 
function enableAgainBtn(){
    playAgainBtn.disabled = false;
}

checkBtn.addEventListener('click', checkButton);
playAgainBtn.addEventListener('click', playAgain);

//TODO: create a method for generating a random number and fix random number to not include 0

//TODO: fix game over condition to include whether the num of tries were exhausted or score is 0
//TODO: fix where at game over score is 0 and not left at 1. Then remove reset score to 0

//TODO: make sure the player is choosing a number between 1 and 20 (no more, or no less) --min max values for input
//TODO: require the player to enter a number before pressing "check" --require attribute for input

//TODO: keep track of high score
