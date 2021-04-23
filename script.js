'use strict';
const playerZero = document.querySelector(`.player--0`);
const playerOne = document.querySelector(`.player--1`);
const dice = document.querySelector('.dice');
const playerZeroObject = document.querySelector(`#score--0`);
const playerOneObject = document.querySelector(`#score--1`);
const rollDice = document.querySelector(`.btn--roll`);
const hold = document.querySelector(`.btn--hold`);
let currentScoreObject = null;

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

dice.classList.add(`hidden`);
playerZeroObject.textContent = score[0];
playerOneObject.textContent = score[1];

rollDice.addEventListener(`click`, function() {
    let random = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove(`hidden`);
    dice.src = `dice-${random}.png`;
    currentScoreObject = document.getElementById(`current--${activePlayer}`);
    if (random !== 1) {
        currentScore += random;
        currentScoreObject.textContent = currentScore;
    } else {
        changePlayer();
    }
});
hold.addEventListener(`click`, function() {
    score[`${activePlayer}`] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[`${activePlayer}`];
    changePlayer();
});

function changePlayer() {
    currentScore = 0;
    currentScoreObject.textContent = currentScore;
    playerZero.classList.toggle(`player--active`);
    playerOne.classList.toggle(`player--active`);
    activePlayer = activePlayer === 0 ? 1 : 0;
}

