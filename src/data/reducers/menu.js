import dishes from '../dishes';
import comments from  '../comments';

const initialState = {
    dishes,
    comments
};

const reducers = (state=initialState,action) => {
    switch(action.type) {
        default:
            return state;
    };
};

export default reducers;