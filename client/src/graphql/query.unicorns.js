import { gql } from "@apollo/client";

export const GET_UNICORNS = gql`
    query GetUnicorns($pack: String, $search: String, $page: Int!, $limit: Int!) {
        unicorns(pack: $pack, search: $search, page: $page, limit: $limit) {
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