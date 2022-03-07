import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundRoute = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-one-third">
                    <img src="/images/unicorn-pandas.jpg" alt="NEIGH!" />
                </div>
                <div className="column is-align-self-center is-justify-content-center">
                    <p className="has-text-centered">
                        <span className="is-size-2">
                            <b>404:</b> Not Found
                        </span>
                        <br />
                        Looks like you've dropped through a Unicorn portal and gotten lost somewhere. 
                        <br />
                        Use <NavLink to="/">this link</NavLink> to help you escape. 
                        <br />
                        <br />
                        Don't worry, the Pandacorns don't bite... much.
                    </p>    
                </div>
            </div>
        </div>
    );
};

export default NotFoundRoute;