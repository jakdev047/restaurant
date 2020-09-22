import React from 'react';
import dateFormate from 'dateformat';

export const LoadComments = ({comments}) => {
    return(
        <div>
            {
                comments.map(comment => {
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
}
