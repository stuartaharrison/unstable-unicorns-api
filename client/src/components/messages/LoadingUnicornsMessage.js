import React from "react";

const LoadingUnicornsMessage = ({
    message = "Hold tight! We're fetching some Unicorns!",
    imageSrc = "/images/unicorn-banner-2.jpg"
}) => {
    return (
        <div className="container is-align-self-center is-justify-content-center mb-6 mt-6">
            <div className="has-text-centered mb-3">
                <img src={imageSrc} alt="loading" />
            </div>
            <div className="">
                <p className="has-text-centered is-size-4">
                   {message}
                </p>    
            </div>
        </div>
    );
};

export default LoadingUnicornsMessage;