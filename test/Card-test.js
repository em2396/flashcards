const chai = require('chai');
const expect = chai.expect;

const { createCard, countCards } = require('../src/card');

describe('create a card function', function() {
  it.skip('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it.skip('should create a card and its properties', function() {
    const card = createCard(9);
    
    expect(card.id).to.equal(10);
    expect(card.question).to.equal('Which iteration method returns the first array element where the callback function returns true');
    expect(card.answers).to.deep.equal(["find()", "filter()", "forEach()"]);
    expect(card.correctAnswer).to.equal('find()');
  });  
});

describe('count the length of cards', function(){
  it.skip('should be a function', function(){
    expect(countCards).to.be.a('function')
  });
  it.skip('should return the length of cards in deck', function(){
    const card1 = createCard(0);
    const card2 = createCard(1);

    const deck1 = [card1, card2];
    const lengthOfDeck = countCards(deck1);

    expect(lengthOfDeck).to.equal(2);
  })
});