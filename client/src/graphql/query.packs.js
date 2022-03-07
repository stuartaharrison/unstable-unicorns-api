import { gql } from "@apollo/client";

export const GET_PACKS = gql`
    query FetchPacks {
        cardPacks {
            id,
            name,
            image,
            text,
            purchaseLinks
        }
    }
`;