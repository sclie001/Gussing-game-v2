const randNum = Math.floor(Math.random() * 20);

const checkBtn = document.getElementById('check-btn');
const userInput = document.getElementById('guess');
const message = document.getElementById('game-message');
const main_background = document.getElementById('main');

console.log(randNum);

function checkButton(){
    console.log('checking number...')
    if(userInput.value == randNum){
        console.log('You guessed the right number!');
        message.textContent = 'You guessed the right number!';
        main_background.style.backgroundColor = '#006600';
    }else if(userInput.value > randNum){
        console.log('You guessed too high');
        message.textContent = 'You guessed too high';
        main_background.style.backgroundColor = '#cc0000';
    }else if(userInput.value < randNum){
        console.log('You guessed low');
        message.textContent = 'You guessed too low';
        main_background.style.backgroundColor = '#cc7a00';
    }
}

checkBtn.addEventListener('click', checkButton);