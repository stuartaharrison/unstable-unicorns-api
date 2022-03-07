const babyUnicorns = require('../json/cards.unicorns.babies.json');
const basicUnicorns = require('../json/cards.unicorns.basic.json');
const downgrades = require('../json/cards.downgrades.json');
const instants = require('../json/cards.instants.json');
const magic = require('../json/cards.magic.json');
const magicalUnicorns = require('../json/cards.unicorns.magical.json');
const upgrades = require('../json/cards.upgrades.json');
const { buildCardSchemaObject } = require('../helpers/cards');
const { buildPageInfo } = require('../helpers/pagination');
const { shuffleDeck } = require('../helpers/shuffler');

const cardDatabase = [
    ...babyUnicorns,
    ...basicUnicorns,
    ...magicalUnicorns,
    ...instants,
    ...magic,
    ...upgrades,
    ...downgrades
];

module.exports = {
    fetchCard: (cardId) => {
        let card = cardDatabase.find(el => el.id === cardId);
        if (!card) {
            return null;
        }
        
        return buildCardSchemaObject(card);
    },
    fetchCards: (pack = null, type = null, search = null, page = 1, limit = 25) => {
        // filter the result set down
        var filteredResults = cardDatabase.filter(el => 
            (!pack || el.pack === pack) && 
            (!type || el.type === type) &&
            (!search || el.name.toLowerCase().includes(search.toLowerCase()))
        );
        
        // build the pagination info based on the filtered down data-collection
        const { 
            startSlice, 
            endSlice, 
            pageInfo 
        } = buildPageInfo(filteredResults, page, limit);

        // page the result set down and return the object
        var results = filteredResults.slice(startSlice, endSlice);
        return {
            pageInfo,
            cards: results.map(buildCardSchemaObject)
        };
    },
    fetchRandomCards: (pack = null, limit = 25) => {
        var unshuffled = cardDatabase.filter(el => !pack || el.pack === pack);
        var shuffled = shuffleDeck(unshuffled);
        return shuffled.slice(0, limit).map(buildCardSchemaObject);
    },
    cardCollection: cardDatabase
}