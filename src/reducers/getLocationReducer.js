import { GET_LOCATION_SUCCESS } from '../actions/types';

   const initialState = {
    locationData: {},
  };
  
  function getLocationReducer(state = initialState, action = {}) {
    switch (action.type) {
      case GET_LOCATION_SUCCESS:
        return {
          ...state,
          locationData: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default getLocationReducer;