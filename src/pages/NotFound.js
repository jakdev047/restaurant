import React from 'react'

const NotFound = () => {
    document.title = "Not Found";
    return (
        <div className="container text-center">
            <h2 style={{fontSize:'72px',textAlign:'center'}}>404!</h2>
        </div>
    )
};

export default NotFound;
