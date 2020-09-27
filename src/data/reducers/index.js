import { createForms } from 'react-redux-form';
import { combineReducers } from 'redux';
import { initialContactForm } from '../forms';
import menu from './menu';

export default combineReducers({
    menu,
    ...createForms({
        feedback: initialContactForm
    })
});