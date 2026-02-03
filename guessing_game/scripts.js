const submit = document.querySelector('.submit');
const guessField = document.getElementById('guessField');
const guesses =document.querySelector('.guesses');
const lastGuess = document.querySelector('.lastguess');
const low_high = document.querySelector('.low_high');
const randomNumber = Math.floor(Math.random() * 100) + 1; // its constant cuz i aint gonna change it.but its normally a 'let' variable
const container = document.querySelector(".container");
let counter = 1;
let reset;

function check_guesses(){
    const playersGuess = Number(guessField.value);
    if(counter==1){
        guesses.textContent = 'guesses: ';

    }
    else{
        guesses.textContent += playersGuess + ' ';
    }

    if(playersGuess === randomNumber){
        lastGuess.textContent = "You Won";
        lastGuess.style.backgroundColor = "green";
        low_high.textContent = '';
        gameOver();

    }
    else if(counter===10){
        lastGuess.textContent = "Game over!";
        low_high.textContent = '';
        gameOver();
    }
    else{
        lastGuess.textContent= "wrong guess!";
        lastGuess.style.backgroundColor = "red";

    }
    if(playersGuess>randomNumber){
        low_high.textContent = " guess lower!";
    }
    else if(playersGuess<randomNumber){
        low_high.textContent = " guess higher";
    }

    counter++;
    guessField.value = '';
    guessField.focus();
}

function gameOver(){
    guessField.disabled = true;
    submit.disabled = true;
    reset = document.createElement('button');
    reset.textContent = "new game";
    container.appendChild(reset);
   // document.body.appendChild(reset);
    reset.addEventListener("click", resetGame);
}
function resetGame(){
    guessField.disabled =false;
    submit.disabled =false;
    guesses.textContent= '';
    lastGuess.textContent= '';
    low_high.textContent= '';
    counter = 1;
    container.removeChild(reset);
   // document.body.removeChild(reset);
    lastGuess.style.backgroundColor = "white";
    lastGuess.focus();
}

submit.addEventListener("click", check_guesses);