let firstCard = Math.floor(Math.random() * 13) + 1;
let secondCard = Math.floor(Math.random() * 13) + 1; 
let cards = [firstCard, secondCard];
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let sum = firstCard + secondCard
let message = "";
let messageEl = document.getElementById("message-el");
let isAlive = true;
let hasBlackJack = false;
let startButton = document.getElementById("start-btn");
let newGameButton = document.getElementById("new-game-btn");
let newCardButton = document.getElementById("new-card-btn");
let roundNumber = document.getElementById("rounds");
let round = 0;
function startGame() {
    console.log("Started");
    round++;
    roundNumber.textContent = "Round: " + round;
    renderGame();

}

function renderGame() {
    roundNumber.textContent = "Round: " + round;
    newGameButton.style.display = "inline";
    startButton.style.display = "none";
    cardsEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + sum;

    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    }

    else if(sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        newCardButton.disabled = true;
    }

    else {
        message = "You're out of the game!";
        isAlive = false;
        newCardButton.disabled = true;
    }

    messageEl.textContent = message;

}

function newCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    cards.push(card);
    sum += card;
    round++
    renderGame();
}

function newGame(){
    cards = [];
    isAlive = true;
    hasBlackJack = false;
    round = 1;
    message = "";
    startButton.style.display = "inline";
    newGameButton.style.display = "none";
    cards = [Math.floor(Math.random() * 13) + 1, Math.floor(Math.random() * 13) + 1];
    sum = cards[0] + cards[1];
    newCardButton.disabled = false;
    renderGame();

}
