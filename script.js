'use strict';
const playerZeroScore = document.querySelector(`#score--0`);
const playerOneScore = document.querySelector(`#score--1`);
const playerZero = document.querySelector(`.player--0`);
const playerOne = document.querySelector(`.player--1`);
const dice = document.querySelector(`.dice`);
const rollDice = document.querySelector(`.btn--roll`);
const hold = document.querySelector(`.btn--hold`);

let score, currentScore, currentPlayer;

const beginningValues = function() {
    dice.classList.add(`hidden`);
    score = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    playerZeroScore.textContent = 0;
    playerOneScore.textContent = 0;
};

beginningValues();

rollDice.addEventListener(`click`, function() {
    dice.classList.remove(`hidden`);
    let random = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${random}.png`;
    if (random !== 1) {
        currentScore += random;
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        playerZero.classList.toggle(`player--active`);
        playerOne.classList.toggle(`player--active`);
    }
});

hold.addEventListener(`click`, function() {
    score[currentPlayer] = currentScore;
});

