const { createCard } = require('../src/card');

const evaluateGuess = (guess, cardObject) => {
    //correctAnswer will be the createCard object 
    if (guess === cardObject.cardAnswer) {
        return 'Correct!';
    } else {
        return 'Incorrect!';
    }
}

//iterate through the protype data invoking the createCard function on each index. create a deck
const createDeck = cardsArray => {
     const deck = [];
     deck.join(cardsArray);
     return deck;
     //so that it can work more than once in the same dataset
}

const countCards = currentDeck => currentDeck.length;


console.log('Your project is running...'); 

module.exports = { 
    evaluateGuess, 
    createDeck,
    countCards
 }
