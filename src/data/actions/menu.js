import { ADD_COMMENT } from "./type";

// add comment
export const addComment = commnet => dispatch => {
    dispatch({
        type: ADD_COMMENT,
        payload: commnet
    })
}