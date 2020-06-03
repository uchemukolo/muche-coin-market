import { FETCH_COINS_SUCCESS } from '../actions/types';

   const initialState = {
    coins: [],
    isLoading: true
  };
  
  function fetchCoinsReducer(state = initialState, action = {}) {
    switch (action.type) {
      case FETCH_COINS_SUCCESS:
        return {
          ...state,
          coins: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }
  
  export default fetchCoinsReducer;