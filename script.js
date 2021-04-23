'use strict';

const playerZero = document.querySelector(`.player--0`);
const playerOne = document.querySelector(`.player--1`);
const dice = document.querySelector(`.dice`);
const rollDice = document.querySelector(`.btn--roll`);
const hold = document.querySelector(`.btn--hold`);
const newGame = document.querySelector(`.btn--new`);

let score, currentScore, currentPlayer, activeGame;

const beginningSetting = function() {
    dice.classList.add(`hidden`);
    currentScore = 0;
    currentPlayer = 0;
    activeGame = true;
    score = [0, 0];
    playerZero.classList.add(`player--active`);
    playerOne.classList.remove(`player--active`);
    for (let i = 0; i < 2; i++) {
        document.querySelector(`.player--${i}`).classList.remove(`player--winner`);
        document.querySelector(`#score--${i}`).textContent = score[i];
        document.getElementById(`current--${i}`).textContent = 0;
    }
};

beginningSetting();

rollDice.addEventListener(`click`, function() {
    if (activeGame) {
        dice.classList.remove(`hidden`);
        let random = Math.trunc(Math.random() * 6) + 1;
        dice.src = `dice-${random}.png`;
        if (random !== 1) {
            currentScore += random;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

hold.addEventListener(`click`, function() {
    if (activeGame) {
        score[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer];
        if (score[currentPlayer] >= 10) {
            document.querySelector(`.player--${currentPlayer}`).classList.add(`player--winner`);
            activeGame = false;
        } else {
            switchPlayer();
        }
    }
});

newGame.addEventListener(`click`, beginningSetting);

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    playerZero.classList.toggle(`player--active`);
    playerOne.classList.toggle(`player--active`);
}

