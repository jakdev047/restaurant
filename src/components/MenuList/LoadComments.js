import React from 'react';
import dateFormate from 'dateformat';
import Loading from '../Loading/Loading';

const LoadComments = ({comment,isCommentLoading}) => {

    if(isCommentLoading) {
        return(
            <Loading />
        );
    }
    else {
        return(
            <div>
                {
                    comment.map(comment => {
                        return (
                            <div key={comment.id}>
                                <h5>Author: {comment.author}</h5>
                                <p> Rating: {comment.rating}</p>
                                <p>{comment.comment}</p>
                                <p>{dateFormate(comment.date,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
};

export default LoadComments;
