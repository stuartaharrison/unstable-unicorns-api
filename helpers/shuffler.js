const shuffleDeck = (deck) => {
    let currIndex = deck.length, randomIndex;
    // while there is still elements to shuffle..
    while (currIndex != 0) {
        // pick random element
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex--;

        // then swap it with the current element
        [deck[currIndex], deck[randomIndex]] = [deck[randomIndex], deck[currIndex]];
    }

    return deck;
};

module.exports = {
    shuffleDeck
};