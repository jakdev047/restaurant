import React from 'react';

export const Search = ({handleChange}) => {

    return (
        <div className="py-3">
            <input type="text" className="form-control" placeholder="search menu..." onChange={(e)=>handleChange(e)} />
        </div>
    )
};
