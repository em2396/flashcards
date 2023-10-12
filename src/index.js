var percentageCorrect; 

// const evaluateGuess = (guess, cardObject) => {
//     if (guess === cardObject.cardAnswer) {
//         return 'Correct!';
//     } else {
//         return 'Incorrect!';
//     }
// };

const createRound = currentDeck => {
    const newObj = {
        deck: currentDeck, 
        currentCard: currentDeck[0],
        incorrectGuesses: 0, //increment
        incorrectGuessId: [],
        turns: 0 //increment
    }
   // console.log(newObj.currentCard);
    return newObj;
};

const takeTurn = (guess, roundObj) => {
    if (roundObj.turns < roundObj.deck.length -1 && guess === roundObj.currentCard.correctAnswer ) {
        roundObj.turns++;
        roundObj.currentCard = roundObj.deck[roundObj.turns];
        return 'Correct!';
    }
    else if (roundObj.turns < roundObj.deck.length -1 && guess !== roundObj.currentCard.correctAnswer) {
        roundObj.incorrectGuesses++;
        roundObj.incorrectGuessId.push(roundObj.currentCard.id);
        roundObj.turns++;
        roundObj.currentCard = roundObj.deck[roundObj.turns];
        return 'Incorrect!';
    } else if (guess === roundObj.currentCard.correctAnswer) {
        return 'Correct!';
    } else {
        return 'Incorrect!';
    }
};

const calculatePercentCorrect = roundObj => {
    percentageCorrect =  1 - (roundObj.incorrectGuesses/roundObj.turns);
    return percentageCorrect; 
}; //need to update this so it's a percentage not a decimal.

const endRound = roundObj => {
    if (roundObj.turns === roundObj.deck.length) {
        return `Round over! You answered ${percentageCorrect} of the questions correctly!`;
    }
};

module.exports = { 
    createRound,
    takeTurn,
    calculatePercentCorrect, 
    endRound, 
    //evaluateGuess
 }
