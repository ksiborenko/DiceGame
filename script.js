'use strict';
const playerZero = document.querySelector(`.player--0`);
const playerOne = document.querySelector(`.player--1`);
const dice = document.querySelector('.dice');
const playerZeroObject = document.querySelector(`#score--0`);
const playerOneObject = document.querySelector(`#score--1`);
const rollDice = document.querySelector(`.btn--roll`);
const buttonHold = document.querySelector(`.btn--hold`);
const newGame = document.querySelector(`.btn--new`);
let currentScoreObject = null;

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

dice.classList.add(`hidden`);
playerZeroObject.textContent = score[0];
playerOneObject.textContent = score[1];

rollDice.addEventListener(`click`, function() {
    if (playing) {
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
    }
});
buttonHold.addEventListener(`click`, function() {
    if (playing) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        if (score[activePlayer] >= 10) {
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
            dice.classList.add('hidden');
            playing = false;
        } else {
            changePlayer();
        }
    }
});
newGame.addEventListener(`click`, function() {
    dice.classList.add(`hidden`);
    score[0] = 0;
    score[1] = 0;
    playerZeroObject.textContent = score[0];
    playerOneObject.textContent = score[1];
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    playerZero.classList.add(`player--active`);
    playerOne.classList.remove(`player--active`);
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
    playing = true;
});

function changePlayer() {
    currentScore = 0;
    currentScoreObject.textContent = currentScore;
    playerZero.classList.toggle(`player--active`);
    playerOne.classList.toggle(`player--active`);
    activePlayer = activePlayer === 0 ? 1 : 0;
}

