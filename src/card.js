const createCard = (cardNumber, cardQuestion, cardOptions, cardAnswer) => {
    return {
        id: cardNumber,
        question: cardQuestion,
        answers: cardOptions,
        correctAnswer: cardAnswer
    }
}

module.exports = { createCard }