'use strict';

const playerOne = document.querySelector(`.player--0`);
const playerTwo = document.querySelector(`.player--1`);
const dice = document.getElementById(`dice`);
const rollDice = document.querySelector(`.btn--roll`);
const hold = document.getElementById(`btn--hold`);
const newGame = document.querySelector(`.btn--new`);

let activePlayer = 0;
let currentScore = 0;
const score = [0, 0];
let noWinner = true;

const startingConditions = () => {
    for (let x = 0; x < 2; x++) {
        score[x] = 0;
        document.getElementById(`score--${x}`).textContent = score[x];
        document.getElementById(`current--${x}`).textContent = score[x];
        document.querySelector(`.player--${x}`).classList.remove(`player--winner`);
    }
    currentScore = 0;
    activePlayer = 0;
    dice.classList.add(`hidden`);
    playerOne.classList.add(`player--active`);
    playerTwo.classList.remove(`player--active`);
    noWinner = true;
};

startingConditions();

rollDice.addEventListener('click', function() {
    if (noWinner) {
        let random = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove(`hidden`);
        dice.src = `dice-${random}.png`;
        if (random !== 1) {
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

hold.addEventListener(`click`, function() {
    if (noWinner) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if (score[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            noWinner = false;
        } else {
            switchPlayer();
        }
    }
});

newGame.addEventListener(`click`, function() {
    startingConditions();
});

const switchPlayer = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle(`player--active`);
    playerTwo.classList.toggle(`player--active`);
};




