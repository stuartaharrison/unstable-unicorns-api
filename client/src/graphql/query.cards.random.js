import { gql } from "@apollo/client";

export const GET_RANDOM_CARDS = gql`
    query FetchRandomCards($pack: String, $limit: Int!) {
        randomCards(pack: $pack, limit: $limit) {
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