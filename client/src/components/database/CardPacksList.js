import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PACKS } from '../../graphql/query.packs';
import ErrorUnicornsMessage from "../messages/ErrorUnicornsMessage";
import LoadingUnicornsMessage from "../messages/LoadingUnicornsMessage";
import NoUnicornsMessage from "../messages/NoUnicornsMessage";
import UnstablePack from "../card/UnstablePack";

const CardPacksList = () => {
    const { loading, error, data } = useQuery(GET_PACKS);
    
    if (loading) {
        return <LoadingUnicornsMessage 
            message="Hold tight! We're looking for Magical Unicorn Packs!"
        />
    }

    if (error || !data.cardPacks) {
        return <ErrorUnicornsMessage 
            message="Sorry, no more magical unicorn packs could be found today."
        />
    }

    const { cardPacks } = data;
    return (
        <>
            {cardPacks.length === 0 && (<NoUnicornsMessage />)}
            {cardPacks.length > 0 && (
                <div className="columns is-multiline is-centered mt-6 mb-6">
                    {cardPacks.map((pack, _) => (
                        <UnstablePack data={pack} />
                    ))}
                </div>
            )}
        </>
    );
};

export default CardPacksList;