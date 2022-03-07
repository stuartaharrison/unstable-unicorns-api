const types = require('../json/cards.types.json');

const typesDatabase = [ ...types ];

module.exports = {
    fetchTypes: () => typesDatabase
};