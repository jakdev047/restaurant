import axios from 'axios';
import { ADD_COMMENT, COMMENTS_LOADING, DISHES_LOADING, LOAD_COMMENTS, LOAD_DISHES } from "./type";
import { baseURL } from '../baseUrl';

// loadDishes
export const loadDishes = dishes => ({
    type: LOAD_DISHES,
    payload: dishes
})

// loadingDishes
export const loadingDishes = () => ({
    type: DISHES_LOADING
})

// fetchDishes
export const fetchDishes = () => dispatch => {

    dispatch(loadingDishes());

    axios.get(`${baseURL}/dishes`)
        .then(response=>response.data)
        .then(dishes=>{
            dispatch(loadDishes(dishes))
        })
        .catch(error=>console.log(error))  
}

// loadingComments
export const loadingComments = () => ({
    type: COMMENTS_LOADING
})

// loadComments
export const loadComments = comments => ({
    type: LOAD_COMMENTS,
    payload: comments
})

// fetchComments
export const fetchComments = () => dispatch => {

    dispatch(loadingComments());

    axios.get(`${baseURL}/comments`)
        .then(response=>response.data)
        .then(comments=>{
            dispatch(loadComments(comments))
        })
        .catch(error=>console.log(error))  
}

// add comment
export const addComment = commnet => dispatch => {
    dispatch({
        type: ADD_COMMENT,
        payload: commnet
    })
}