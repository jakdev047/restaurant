import comments from  '../comments';
import { ADD_COMMENT, DISHES_LOADING, LOAD_DISHES } from '../actions/type';

const initialState = {
    dishes: [],
    comments,
    isLoading: false
};

const reducers = (state=initialState,action) => {
    switch(action.type) {

        case DISHES_LOADING: {
            return {
                ...state,
                dishes: [],
                isLoading: true
            }
        }

        case LOAD_DISHES: {
            return {
                ...state,
                dishes: action.payload,
                isLoading: false
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