import React from 'react';
import dateFormate from 'dateformat';

const LoadComments = ({comment}) => {
    return(
        <div>
            {
                comment.map(comment => {
                    return (
                        <div key={comment.id}>
                            <h5>{comment.author}</h5>
                            <p>{comment.comment}</p>
                            <p>{dateFormate(comment.date,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default LoadComments;
