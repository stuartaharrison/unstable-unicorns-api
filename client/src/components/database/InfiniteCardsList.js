import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_UNICORNS } from "../../graphql/query.unicorns";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchCard from "../input/SearchCards";
import ErrorUnicornsMessage from "../messages/ErrorUnicornsMessage";
import LoadingUnicornsMessage from "../messages/LoadingUnicornsMessage";
import NoUnicornsMessage from "../messages/NoUnicornsMessage";
import UnstableCard from "../card/UnstableCard";

const InfiniteCardsList = ({
    allowSearch = true,
    pack = null,
    query = GET_UNICORNS,
    propertyName = "unicorns"
}) => {
    const [page, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(null);
    const { loading, error, data, fetchMore, refetch } = useQuery(query, {
        variables: { pack, page, limit: 25, search: searchTerm },
        notifyOnNetworkStatusChange: true
    });
    
    useEffect(() => {
        if (searchTerm || (searchTerm !== null && searchTerm.length === 0)) {
            const timeoutId = setTimeout(() => {
                setCurrentPage(1);
                refetch({
                    query: query,
                    variables: {
                        pack,
                        page: 1,
                        limit: 25,
                        search: searchTerm
                    }
                });
            }, 500);
    
            return () => clearTimeout(timeoutId);
        }
    }, [ fetchMore, searchTerm ]);

    if (loading) {
        return <LoadingUnicornsMessage />
    }

    if (error || !data.hasOwnProperty(propertyName) || !data[propertyName]) {
        return <ErrorUnicornsMessage />
    }

    const fetchMoreUnicorns = () => {
        let offset = (page + 1);
        setCurrentPage(offset);
        fetchMore({
            query: query,
            variables: {
                pack,
                page: offset,
                limit: 25,
                searchTerm
            }
        });
    }

    const { pageInfo, cards } = data[propertyName];
    return (
        <>
            {allowSearch === true && (
                <SearchCard 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}
            {cards.length === 0 && (<NoUnicornsMessage />)}
            {cards.length > 0 &&(
                <InfiniteScroll
                    className="columns is-multiline is-centered mb-6"
                    dataLength={cards.length}
                    next={fetchMoreUnicorns}
                    hasMore={pageInfo.hasNextPage}
                >
                    {cards.map((unicorn, _) => (
                         <UnstableCard data={unicorn} />
                    ))}
                </InfiniteScroll>
            )}
        </>  
    );
};

export default InfiniteCardsList;