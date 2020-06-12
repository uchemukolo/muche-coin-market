import { combineReducers } from 'redux';
import fetchCoinsReducer from './fetchCoinsReducer';
import fetchCoinHistoryReducer from './fetchCoinHistoryReducer';
export default combineReducers({
    fetchCoinsReducer,
    fetchCoinHistoryReducer
});