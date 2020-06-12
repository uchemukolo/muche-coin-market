import axios from 'axios';
import {
    FETCH_COINS_SUCCESS,
    FETCH_COINS_ERROR,
    IS_LOADING
} from './types';


const apiKey = process.env.REACT_APP_API_KEY;

export const fetchCoinsSuccess = (payload) => ({
     type: FETCH_COINS_SUCCESS,
     payload
   });

   export const fetchCoinsFailure = payload => ({
    type: FETCH_COINS_ERROR,
    payload
  });

   export const Loading = () => ({
    type: IS_LOADING
  });

export const fetchCoinsAction = () => (dispatch) => {
    dispatch(Loading());
    axios.get(`https://api.coincap.io/v2/assets`
      ).then((response) => {
        dispatch(fetchCoinsSuccess(response.data));
      }).catch((error) => {
        console.log(error);
        dispatch(fetchCoinsFailure(error.response));
      });
};


