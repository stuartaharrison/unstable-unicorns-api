import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_PACK } from '../../graphql/query.pack';
import { GET_CARDS } from "../../graphql/query.cards";
import ErrorUnicornsMessage from '../../components/messages/ErrorUnicornsMessage';
import LoadingUnicornsMessage from '../../components/messages/LoadingUnicornsMessage';
import InfiniteCardsList from "../../components/database/InfiniteCardsList";

const CardPackDatabaseRoute = () => {
    let params = useParams();
    const { packId } = params;
    const { loading, error, data } = useQuery(GET_PACK, {
        variables: { packId },
        notifyOnNetworkStatusChange: true
    });

    if (loading) {
        return <LoadingUnicornsMessage 
            message="Hold tight! We're fetching your pack!"
        />
    }

    if (error || !data.cardPack) {
        return <ErrorUnicornsMessage />
    }

    const { cardPack } = data;
    console.log(cardPack);
    return (
        <>
            <section class="hero is-info is-halfheight">
                <div class="hero-body container">
                    <div className="columns is-variable is-8">
                        <div className="column is-three-quarters is-flex is-flex-direction-column">
                            <div className="is-flex-grow-1 is-flex is-flex-direction-column is-align-content-center is-justify-content-center">
                                <span className='is-size-2'>{cardPack.name}</span>
                                <br />
                                <p className='is-size-5 mt-4'>{cardPack.text}</p>
                            </div>
                        </div>
                        <div className="column">
                            <img src={cardPack.image} alt={cardPack.name} width={568} height={598} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-5 mb-6">
                <div className="mb-4">
                    <p className="is-size-3">Cards from the <b>'{cardPack.name}'</b></p>
                </div>
                <InfiniteCardsList 
                    query={GET_CARDS}
                    pack={cardPack.id}
                    allowSearch="false"
                    propertyName="cards"
                />
            </section>
        </>
    )
};

export default CardPackDatabaseRoute;