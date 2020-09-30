import { ADD_COMMENT, COMMENTS_LOADING, DISHES_LOADING, DISH_FAILED, LOAD_COMMENTS, LOAD_DISHES } from '../actions/type';

const initialState = {
    dishes: [],
    comments:[],
    isLoading: false,
    isCommentLoading:true,
    dishErrorMsg: null
};

const reducers = (state=initialState,action) => {
    switch(action.type) {

        case DISHES_LOADING: {
            return {
                ...state,
                dishes: [],
                isLoading: true,
                dishErrorMsg: null
            }
        }

        case LOAD_DISHES: {
            return {
                ...state,
                dishes: action.payload,
                isLoading: false,
                dishErrorMsg:null,
                dishes: []
            }
        }

        case DISH_FAILED: {
            return {
                ...state,
                isLoading: false,
                dishErrorMsg: action.payload
            }
        }

        case COMMENTS_LOADING: {
            return {
                ...state,
                comments: [],
                isCommentLoading: true
            }
        }

        case LOAD_COMMENTS: {
            return {
                ...state,
                isCommentLoading: false,
                comments: action.payload
            }
        }

        case ADD_COMMENT:{
            return {
                ...state,
                comments: [action.payload,...state.comments]
            }
        }
        default:
            return state;
    };
};

export default reducers;