import dishes from '../dishes';
import comments from  '../comments';
import { ADD_COMMENT } from '../actions/type';

const initialState = {
    dishes,
    comments
};

const reducers = (state=initialState,action) => {
    switch(action.type) {
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