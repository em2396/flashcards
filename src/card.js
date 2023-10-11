const { prototype } = require("mocha");
const { prototypeData } = require("./data");

const createCard = index => {
    if (index <= 30) {
        return prototypeData[index];
    } else {
        return 'Invalid Card Number!';
    };
};


const card1 = createCard(0);
const card2 = createCard(1);
const card3 = createCard(2);
const card4 = createCard(3);
const card5 = createCard(4);
const card6 = createCard(5);
const card7 = createCard(6);
const card8 = createCard(7);
const card9 = createCard(8);
const card10 = createCard(9);
const card11 = createCard(10);
const card12 = createCard(11);
const card13 = createCard(12);
const card14 = createCard(13);
const card15 = createCard(14);
const card16 = createCard(15);
const card17 = createCard(16);
const card18 = createCard(17);
const card19 = createCard(18);
const card20 = createCard(19);
const card21 = createCard(20);
const card22 = createCard(21);
const card23 = createCard(22);
const card24 = createCard(23);
const card25 = createCard(24);
const card26 = createCard(25);
const card27 = createCard(26);
const card28 = createCard(27);
const card29 = createCard(28);
const card30 = createCard(29);

const deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30];

const countCards = currentDeck => currentDeck.length;
// console.log(countCards(deck)); // returns 30

module.exports = { createCard, countCards, deck }