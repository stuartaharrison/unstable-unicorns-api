import React from 'react';
import { NavLink } from 'react-router-dom';

const UnstableCard = ({ data }) => {
    return (
        <div className="column is-one-quarter" key={data.id}>
            <div className="box">
                <NavLink to={`/database/${data.id}`}>
                    <img src={data.image} alt={data.name} width={318} height={448} />
                </NavLink>
            </div>
        </div>
    )
};

export default UnstableCard;