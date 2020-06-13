import axios from 'axios';
import {
    GET_LOCATION_SUCCESS,
    GET_LOCATION_ERROR,
} from './types';

export const getLocationSuccess = (payload) => ({
     type: GET_LOCATION_SUCCESS,
     payload
   });

   export const getLocationFailure = payload => ({
    type: GET_LOCATION_ERROR,
    payload
  });

export const getLocatioData = () => (dispatch) => {
    axios.get(`https://ipapi.co/json/`
      ).then((response) => {
        dispatch(getLocationSuccess(response.data));
      }).catch((error) => {
        console.log(error);
        dispatch(getLocationFailure(error.response));
      });
};



