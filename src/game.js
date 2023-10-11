const { createCard, countCards, deck } = require('./card');
const { createRound } = require('./index');
const data = require('./data');
const index = require('./index');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const currentNewGameDeck = [];
  while (currentNewGameDeck.length < 3) {
    const randomCardIndex = Math.floor(Math.random() * deck.length);
    const randomCardToPush = deck[randomCardIndex];
    if (!currentNewGameDeck.includes(randomCardToPush)) {
      currentNewGameDeck.push(randomCardToPush); 
    }
  }
  let gamePlay = createRound(currentNewGameDeck);
  printMessage(currentNewGameDeck);
  printQuestion(gamePlay);
  console.log(printMessage(currentNewGameDeck));
  return gamePlay;
}

start();

module.exports = { printMessage, printQuestion,};
