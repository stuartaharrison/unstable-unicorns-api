import React, { useEffect } from "react";
import { useLazyQuery  } from "@apollo/client";
import { GET_RANDOM_CARDS } from "../../graphql/query.cards.random";
import ErrorUnicornsMessage from "../messages/ErrorUnicornsMessage";
import LoadingUnicornsMessage from "../messages/LoadingUnicornsMessage";
import UnstableCard from "../card/UnstableCard";

const RandomCardsList = ({ 
    pack = null, 
    limit = 25 
}) => {
    const [getCards, { loading, data }] = useLazyQuery (GET_RANDOM_CARDS);

    useEffect(() => {
        getCards({
            variables: { pack, limit }
        })
    }, [ pack, limit, getCards ]);

    if (loading) {
        return <LoadingUnicornsMessage />
    }

    return (
        <div className="columns is-multiline is-centered">
            {(!data || !data.randomCards) && (
                <ErrorUnicornsMessage />
            )}
            {data && data.randomCards && data.randomCards.map((unicorn, _) => 
                <UnstableCard data={unicorn} />
            )}
        </div>
        
    );
};

export default RandomCardsList;