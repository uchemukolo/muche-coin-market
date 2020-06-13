import { combineReducers } from 'redux';
import fetchCoinsReducer from './fetchCoinsReducer';
import fetchCoinHistoryReducer from './fetchCoinHistoryReducer';
import getLocationReducer from './getLocationReducer';

export default combineReducers({
    fetchCoinsReducer,
    fetchCoinHistoryReducer,
    getLocationReducer
});