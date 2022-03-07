const { gql } = require('apollo-server');

module.exports = {
    typeDefs: gql`
        interface Card {
            id: String
            name: String
            pack: CardPack
            type: CardType
            text: String
            image: String
        }

        type Instant implements Card {
            id: String
            name: String
            pack: CardPack
            type: CardType
            text: String
            image: String
        }

        type Upgrade implements Card {
            id: String
            name: String
            pack: CardPack
            type: CardType
            text: String
            image: String
        }

        type Downgrade implements Card {
            id: String
            name: String
            pack: CardPack
            type: CardType
            text: String
            image: String
        }

        type Magic implements Card {
            id: String
            name: String
            pack: CardPack
            type: CardType
            text: String
            image: String
        }

        type Unicorn implements Card {
            id: String
            name: String
            pack: CardPack
            type: CardType
            text: String
            image: String
        }

        type PageInfo {
            page: Int
            pageSize: Int
            totalCount: Int
            totalPages: Int
            hasNextPage: Boolean
        }
        
        type CardPack {
            id: String
            name: String
            image: String,
            text: String,
            purchaseLinks: [String]
        }

        type CardType {
            id: String
            name: String
        }

        type CardPage {
            pageInfo: PageInfo
            cards: [Card]
        }

        # The "Query" type is special: it lists all of the available queries that
        # clients can execute, along with the return type for each.
        type Query {
            card(cardId: String!): Card
            cards(pack: String, type: String, search: String, page: Int!, limit: Int!): CardPage
            cardPack(packId: String!): CardPack
            cardPacks: [CardPack]
            cardTypes: [CardType]
            randomCards(pack: String, limit: Int!): [Card]
            randomUnicorns(pack: String, limit: Int!): [Unicorn]
            unicorns(pack: String, search: String, page: Int!, limit: Int!): CardPage
        }
    `
};