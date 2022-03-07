import { gql } from "@apollo/client";

export const GET_PACK = gql`
    query GetCardPack($packId: String!) {
        cardPack(packId: $packId) {
            id,
            name,
            image,
            text,
            purchaseLinks
        }
    }
`;