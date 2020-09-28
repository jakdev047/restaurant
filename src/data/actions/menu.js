import axios from 'axios';
import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from "./type";
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

// add comment
export const addComment = commnet => dispatch => {
    dispatch({
        type: ADD_COMMENT,
        payload: commnet
    })
}