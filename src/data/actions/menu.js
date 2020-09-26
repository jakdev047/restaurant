import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from "./type";
import dishes from "../dishes";

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
export const fetchDishes = () => {
    return dispatch => {
        dispatch(loadingDishes);
        setTimeout(()=>{dispatch(loadDishes(dishes))},2000)   
    }
}

// add comment
export const addComment = commnet => dispatch => {
    dispatch({
        type: ADD_COMMENT,
        payload: commnet
    })
}