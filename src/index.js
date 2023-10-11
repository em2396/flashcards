const { createCard } = require('../src/card');
var percentageCorrect; 
var currentIndex = 0;

const evaluateGuess = (guess, cardObject) => {
    if (guess === cardObject.cardAnswer) {
        return 'Correct!';
    } else {
        return 'Incorrect!';
    }
};

const createRound = currentDeck => {
    return {
        deck: currentDeck, 
        currentCard: currentDeck[currentIndex], 
        incorrectGuesses: 0, //increment
        incorrectGuessId: [],
        turns: 0 //increment
    }
};

const takeTurn = (guess, roundObj) => {
    roundObj.turns++;
    if (guess === roundObj.currentCard.correctAnswer) {
        console.log('Correct!');
    } else {
        roundObj.incorrectGuesses++;
        roundObj.incorrectGuessId.push(currentCard.id);
        console.log('Incorrect!');
    }
    currentIndex++;
    return roundObj;
};

const calculatePercentCorrect = roundObj => {
    percentageCorrect =  1 - (roundObj.incorrectGuesses/roundObj.turns);
    return percentageCorrect; 
}; //need to update this so it's a percentage not a decimal.

const endRound = roundObj => {
    if (roundObj.turns === currentDeck.length) {
        console.log(`Round over! You answered ${percentageCorrect} of the questions correctly!`);
    }
};

module.exports = { 
    evaluateGuess,
    createRound,
    takeTurn,
    calculatePercentCorrect, 
    endRound
 }
