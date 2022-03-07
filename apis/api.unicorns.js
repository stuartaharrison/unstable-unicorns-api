const babyUnicorns = require('../json/cards.unicorns.babies.json');
const basicUnicorns = require('../json/cards.unicorns.basic.json');
const magicalUnicorns = require('../json/cards.unicorns.magical.json');
const { buildCardSchemaObject } = require('../helpers/cards');
const { buildPageInfo } = require('../helpers/pagination');
const { shuffleDeck } = require('../helpers/shuffler');

const unicornDatabase = [
    ...babyUnicorns,
    ...basicUnicorns,
    ...magicalUnicorns
];

module.exports = {
    fetchUnicorns: (pack = null, search = null, page = 1, limit = 25) => {
        // filter the result set down
        var filteredResults = unicornDatabase.filter(el => 
            (!pack || el.pack === pack) && 
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
    fetchRandomUnicorns: (pack = null, limit = 25) => {
        var unshuffled = unicornDatabase.filter(el => !pack || el.pack === pack);
        var shuffled = shuffleDeck(unshuffled);
        return shuffled.slice(0, limit).map(buildCardSchemaObject);
    },
    unicornCollection: unicornDatabase
};