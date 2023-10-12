var percentageCorrect; 

const createRound = currentDeck => {
    const newObj = {
        deck: currentDeck, 
        currentCard: currentDeck[0],
        incorrectGuesses: 0, 
        incorrectGuessId: [],
        turns: 0 
    }
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
        roundObj.turns++;
        return 'Correct!';
    } else {
        roundObj.turns++;
        roundObj.incorrectGuesses++;
        roundObj.incorrectGuessId.push(roundObj.currentCard.id);
        return 'Incorrect!';
    };
};

const calculatePercentCorrect = roundObj => {
    percentageCorrect =  (1 - (roundObj.incorrectGuesses/roundObj.turns)) * 100;
    return percentageCorrect; 
}; 

const endRound = roundObj => {
        calculatePercentCorrect(roundObj);
        if (roundObj.turns === roundObj.deck.length) {
            console.log(`Round over! You answered ${percentageCorrect}% of the questions correctly!`)
        };
    };

module.exports = { 
    createRound,
    takeTurn,
    calculatePercentCorrect, 
    endRound
 }
