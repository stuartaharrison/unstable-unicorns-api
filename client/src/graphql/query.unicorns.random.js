import { gql } from "@apollo/client";

export const GET_RANDOM_UNICORNS = gql`
    query FetchRandomUnicorns($pack: String, $limit: Int!) {
        randomUnicorns(pack: $pack, limit: $limit) {
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