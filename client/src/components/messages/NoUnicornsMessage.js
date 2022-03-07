import React from "react";

const NoUnicornsMessage = ({
    imageSrc = "/images/sad-unicorn.png",
    message = "Sorry, no more Unicorns were available today or the one you're looking for simply does not exist."
}) => {
    return (
        <div className="column is-full has-text-centered mt-6 mb-6">
            <img src={imageSrc} alt="SAD-UNICORN" width={156} height={156} />
            <p>{message}</p>
        </div>
    )
};

export default NoUnicornsMessage;