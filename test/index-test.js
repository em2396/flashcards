const chai = require('chai');
const expect = chai.expect;

const  {takeTurn , calculatePercentCorrect, createRound, endRound } = require('../src/index');
const { createCard } = require('../src/card');
const { start } = require('../src/game');

describe('create a round object', function(){
    it('should be a function', function(){
        expect(createRound).to.be.a('function')
    });
    it('currentCard should be the first card', function(){
        const card1 = createCard(0);
        const card2 = createCard(1);
        const card3 = createCard(2);
        const card4 = createCard(3);
        const card5 = createCard(4);
        const card6 = createCard(5);

        const deck = [card1, card2, card3, card4, card5];
        const testRound = createRound(deck);
        expect(testRound.currentCard).to.equal(card1);
    });
    it('should return an object', function(){
        const card1 = createCard(0);
        const card2 = createCard(1);
        const card3 = createCard(2);
        const card4 = createCard(3);
        const card5 = createCard(4);
        const card6 = createCard(5);

        const deck = [card1, card2, card3, card4, card5];
        const testRound = createRound(deck);
        expect(testRound).to.be.a('object')
    });
});

describe('make updates when a turn is played', function(){
    it('should be a function', function(){
        expect(takeTurn).to.be.a('function')
    });
    it('should update turns count in round', function(){
        const card1 = createCard(0);
        const card2 = createCard(1);
        const card3 = createCard(2);
        const card4 = createCard(3);
        const card5 = createCard(4);
        const card6 = createCard(5);

        const deck = [card1, card2, card3, card4, card5];
        const testRound = createRound(deck);
        const guess = 'object';
        takeTurn(guess, testRound);
        expect(testRound.turns).to.equal(1);
    });
});

describe('calculate correct guess percentage', function(){
    it('should be a function', function(){
        expect(calculatePercentCorrect).to.be.a('function')
    });
    it('should return percentage correct', function(){
        const card1 = createCard(0);
        const card2 = createCard(1);
        const card3 = createCard(2);
        const card4 = createCard(3);
        const card5 = createCard(4);
        const card6 = createCard(5);
        const deck = [card1, card2, card3, card4, card5];
        const newObj = {
            deck: [card1, card2, card3, card4, card5], 
            currentCard: deck[0],
            incorrectGuesses: 1, 
            incorrectGuessId: [],
            turns: 3 
        }
        const total = calculatePercentCorrect(newObj);
        expect(total).to.equal(66.66666666666667)
    })
});

describe('once cards run out, round ends', function(){
    it('should be a function', function(){
        expect(endRound).to.be.a('function')
    });
});