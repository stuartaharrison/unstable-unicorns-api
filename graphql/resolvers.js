const { fetchCard, fetchCards, fetchRandomCards } = require('../apis/api.cards');
const { fetchPack, fetchPacks } = require('../apis/api.packs');
const { fetchTypes } = require('../apis/api.types');
const { fetchUnicorns, fetchRandomUnicorns } = require('../apis/api.unicorns');

module.exports = {
    resolvers: {
        Card: {
            __resolveType(card, context, info) {
                const { name } = card.type;
                if (!name || name && name.toLowerCase().includes("unicorn")) {
                    return "Unicorn";
                }
                else {
                    return name;
                }
            }
        },
        Query: {
            card: (_, { cardId }, cxt, info) => fetchCard(cardId), 
            cards: (_, { pack, type, search, page, limit }, cxt, info) => fetchCards(pack, type, search, page, limit),
            cardPack: (_, { packId }, ctx, info) => fetchPack(packId),
            cardPacks: () => fetchPacks(),
            cardTypes: () => fetchTypes(),
            randomCards: (_, { pack, limit }, ctx, info) => fetchRandomCards(pack, limit),
            randomUnicorns: (_, { pack, limit }, ctx, info) => fetchRandomUnicorns(pack, limit),
            unicorns: (_, { pack, search, page, limit }, cxt, info) => fetchUnicorns(pack, search, page, limit)
        },
    }
}