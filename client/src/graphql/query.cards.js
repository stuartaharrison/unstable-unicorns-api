import { gql } from "@apollo/client";

export const GET_CARDS = gql`
    query GetCards($pack: String, $type: String, $search: String, $page: Int!, $limit: Int!) {
        cards(pack: $pack, type: $type, search: $search, page: $page, limit: $limit) {
            pageInfo {
                page,
                pageSize,
                totalCount,
                totalPages,
                hasNextPage
            },
            cards {
                id,
                name,
                type {
                    id,
                    name
                },
                pack {
                    id,
                    name,
                    image
                },
                image,
                text
            }
        }
    }
`;