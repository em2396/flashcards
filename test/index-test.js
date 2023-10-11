const chai = require('chai');
const expect = chai.expect;

const  { evaluateGuess, calculatePercentCorrect } = require('../src/index');
const  { createRound } = require('../src/index');
const { createCard } = require('../src/card');
const { start } = require('../src/game');

describe('User guesses answer', function(){
    it('should be a function', function(){
        expect(evaluateGuess).to.be.a('function')
    });
    it('should return correct if answer matches answer', function(){
        const userGuess = 'array';
        const card2 = createCard(1);

        expect(userGuess).to.equal(card2.correctAnswer)
    });
    it('should return incorrect if answer doesn\'t match answer', function(){
        const userGuess = 'object';
        const card2 = createCard(1);

        expect(userGuess).to.not.equal(card2.correctAnswer);
    });
});

describe('create a round object', function(){
    it('should be a function', function(){
        expect(createRound).to.be.a('function')
    });
    it('currentCard should be the first card', function(){
        //add data values here
    })
})

describe('make updates when a turn is played', function(){
    it('should be a function', function(){
        expect(takeTurn).to.be.a('function')
    });
    it('should update turns count in round', function(){
      //add data values here  
    })
});

describe('calculate correct guess percentage', function(){
    it('should be a function', function(){
        expect(calculatePercentCorrect).to.be.a('function')
    });
    it('should return percentage correct', function(){
        //create values where roundObj.incorrect guesses equals 2, and turns equals 10, return value should be 80%
    })
});

describe('once cards run out, round ends', function(){
    it('should be a function', function(){
        expect(endRound).to.be.a('function')
    });
    it('should log that the round is over and how many correct questions', function(){
        //how to test a console log?
    })
})