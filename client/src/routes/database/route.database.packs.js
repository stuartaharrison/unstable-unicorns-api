import React from 'react';
import CardPacksList from '../../components/database/CardPacksList';

const CardPacksDatabaseRoute = () => {
    return (
        <section>
            <section className="container mt-5">
                <CardPacksList />
            </section>
        </section>
    );
};

export default CardPacksDatabaseRoute;