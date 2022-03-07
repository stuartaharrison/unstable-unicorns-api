const cardPacks = require('../json/packs.json');
const cardTypes = require('../json/cards.types.json');
const { fetchCardImage } = require('./images');

const buildCardSchemaObject = (data) => {
    // find the pack as we need to change the image!
    var packToFind = cardPacks.find(el => el.id === data.pack);
    var packData = packToFind === null ? null : {
        ...packToFind,
        image: fetchCardImage(packToFind.id, packToFind.image)
    };

    return {
        ...data,
        pack: packData,
        type: cardTypes.find(el => el.id == data.type),
        image: fetchCardImage(data.id, data.image)
    };
};

module.exports = {
    buildCardSchemaObject
};