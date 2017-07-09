import { combineReducers } from 'redux';

import { listReducer } from './listReducer';

const combinedReducers = combineReducers({
    list: listReducer
});

export default combinedReducers;