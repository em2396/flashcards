const chai = require('chai');
const expect = chai.expect;

const  { evaluateGuess } = require('../src/index');
const { createCard } = require('../src/card');

describe('User guesses answer', function(){
    it('should be a function', function(){
        expect(evaluateGuess).to.be.a('function')
    });
    it('should return correct if answer matches answer', function(){
        const userGuess = 'array';
        const currentCard = createCard(1, 'What is a comma-separated list of related values?', ['array', 'object', 'numbers'], 'array');

        expect(userGuess).to.equal(currentCard.correctAnswer)
    });
    it('should return incorrect if answer doesn\'t match answer', function(){
        const userGuess = 'object';
        const currentCard = createCard(1, 'What is a comma-separated list of related values?', ['array', 'object', 'numbers'], 'array');

        expect(userGuess).to.not.equal(currentCard.correctAnswer);
    })
})