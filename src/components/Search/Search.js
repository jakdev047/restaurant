import React from 'react';

export const Search = ({handleChange}) => {

    return (
        <div>
            <input type="text" className="form-control" placeholder="search menu..." onChange={(e)=>handleChange(e)} />
        </div>
    )
};
