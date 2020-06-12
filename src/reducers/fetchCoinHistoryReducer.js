import {FETCH_COINS_HISTORY_SUCCESS} from '../actions/types';

const initialState = {
    coinHistory: {
      priceUsd: null,
      date: null
    },
     isLoading: true
   };
   
   function fetchCoinHistoryReducer(state = initialState, action = {}) {
     switch (action.type) {
       case FETCH_COINS_HISTORY_SUCCESS:
         return {
           ...state,
           coinHistory: action.payload,
           isLoading: false
         };
       default:
         return state;
     }
   } 
  
  export default fetchCoinHistoryReducer;

 