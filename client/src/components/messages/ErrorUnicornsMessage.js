import React from "react";

const ErrorUnicornsMessage = ({
    title = "Well this is Embarrassing!",
    message = "Looks like we are having some small technical issues. Those pesky pandas have once again got into the machines.",
    imageSrc = "/images/unicorn-pandas.jpg"
}) => {
    return (
        <div className="container mb-6 mt-6">
            <div className="columns">
                <div className="column is-one-third">
                    <img src={imageSrc} alt="woops!" width={225} height={225} />
                </div>
                <div className="column is-align-self-center is-justify-content-center">
                    <p className="has-text-centered">
                        <span className="is-size-2">
                            <b>{title}</b>
                        </span>
                        <br />
                        {message}
                    </p>    
                </div>
            </div>
        </div>
    )
};

export default ErrorUnicornsMessage;