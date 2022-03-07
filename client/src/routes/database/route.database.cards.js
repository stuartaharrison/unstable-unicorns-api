import React from "react";
import { GET_CARDS } from '../../graphql/query.cards';
import InfiniteCardsList from "../../components/database/InfiniteCardsList";

const CardsDatabaseRoute = () => {
    return (
        <section>
            <section className="container mt-5">
                <InfiniteCardsList 
                    query={GET_CARDS}
                    propertyName="cards"
                />
            </section>
        </section>
    )
};

export default CardsDatabaseRoute;