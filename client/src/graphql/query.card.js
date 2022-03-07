import { gql } from "@apollo/client";

export const GET_CARD = gql`
    query GetCard($cardId: String!) {
        card(cardId: $cardId) {
            id,
            name,
            pack {
                id,
                name
            },
            type {
                id,
                name
            },
            text,
            image
        }
    }
`;