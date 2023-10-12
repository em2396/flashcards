const chai = require('chai');
const expect = chai.expect;

const { printQuestion, start } = require('../src/game');


describe('it should print question', function(){
    it('should be a function', function(){
        expect(printQuestion).to.be.a('function');
    });
});

describe('start functionality', function(){
    it('should be a function', function(){
        expect(start).to.be.a('function');
    });
});