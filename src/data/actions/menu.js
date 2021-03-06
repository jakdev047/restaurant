import axios from 'axios';
import { ADD_COMMENT, COMMENTS_LOADING, DISHES_LOADING, DISH_FAILED, LOAD_COMMENTS, LOAD_DISHES } from "./type";
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
        .catch(error=>{
            dispatch(dishesFailed(error.message))
        })  
}

// dishesFailed
export const dishesFailed = errMsg => ({
    type: DISH_FAILED,
    payload: errMsg
});

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
export const addComment = comment => dispatch => {
    axios.post(`${baseURL}/comments`,comment)
        .then(response=>response.data)
        .then(comment=>{
            dispatch({
                type: ADD_COMMENT,
                payload: comment
            })
        })
        .catch(error=>console.log(error))  
};
