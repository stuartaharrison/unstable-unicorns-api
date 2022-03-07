import React from "react";
import InfiniteCardsList from "../components/database/InfiniteCardsList";
import './route.home.css';

const HomePageRoute = () => {
    return (
        <section>
            <section class="hero hero-banner is-large is-info">
                <div class="hero-body" />
            </section>
            <section className="container mt-5">
                <InfiniteCardsList />
            </section>
        </section>
    );
};

export default HomePageRoute;