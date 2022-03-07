import React from "react";

const SearchCard = ({ 
    value,
    onChange
}) => {

    return (
        <div className="mb-5">
            <div className="field">
                <label className="label">Find your Perfect Unicorn</label>
                <div className="control">
                    <input className="input" 
                        type="text" 
                        placeholder="Search" 
                        value={value} 
                        onChange={(e) => {
                            e.preventDefault();
                            if (typeof(onChange) === 'function') {
                                onChange(e);
                            }
                        }} 
                    />
                </div>
            </div>
        </div>
    )
};

export default SearchCard;