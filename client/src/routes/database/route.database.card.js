import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_CARD } from '../../graphql/query.card';
import ErrorUnicornsMessage from '../../components/messages/ErrorUnicornsMessage';
import LoadingUnicornsMessage from '../../components/messages/LoadingUnicornsMessage';
import RandomCardsList from '../../components/database/RandomCardsList';

const CardDatabaseRoute = () => {
    let params = useParams();
    const { cardId } = params;
    const { loading, error, data } = useQuery(GET_CARD, {
        variables: { cardId },
        notifyOnNetworkStatusChange: true
    });

    if (loading) {
        return <LoadingUnicornsMessage 
            message="Hold tight! We're fetching your Unicorn!"
        />
    }

    if (error || !data.card) {
        return <ErrorUnicornsMessage />
    }

    const { card } = data;
    return ( 
        <>
            <section class="hero is-info is-halfheight">
                <div class="hero-body container">
                    <div className="columns is-variable is-8">
                        <div className="column is-three-quarters is-flex is-flex-direction-column">
                            <div className="is-flex-grow-1 is-flex is-flex-direction-column is-align-content-center is-justify-content-center">
                                <span className='is-size-2'>{card.name}</span>
                                <br />
                                <p className='is-size-5 mt-4'>{card.text}</p>
                                <p className='is-size-7 mt-4'><b>Pack:</b> <NavLink to={`/packs/${card.pack.id}`}>{card.pack.name}</NavLink></p>
                            </div>
                        </div>
                        <div className="column">
                            <img src={card.image} alt={card.name} width={568} height={598} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mt-5 mb-6">
                <div className="mb-4">
                    <p className="is-size-3">More cards from the <b>'{card.pack.name}'</b></p>
                </div>
                <RandomCardsList
                    pack={card.pack.id}
                    limit={8}
                />
            </section>
        </>
    );
};

export default CardDatabaseRoute;