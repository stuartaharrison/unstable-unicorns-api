import React from 'react';
import { NavLink } from 'react-router-dom';
import './UnstablePack.css';

const UnstablePack = ({ data }) => {
    return (
        <div className="column is-one-quarter" key={data.id}>
            <div className="card pack-card">
                <NavLink to={`/packs/${data.id}`}>
                    <div className="card-image">
                        <figure class="image is-4by3">
                            <img src={data.image} alt={data.name} />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{data.name}</p>
                            </div>
                        </div>
                        <div class="content">
                            {data.text}
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
};

export default UnstablePack;