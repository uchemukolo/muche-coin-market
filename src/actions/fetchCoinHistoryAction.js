import axios from 'axios';
import {
  IS_LOADING,
  FETCH_COINS_HISTORY_SUCCESS,
  FETCH_COINS_HISTORY_ERROR
} from './types';

export const getCoinHistorySuccess = payload => ({
  type: FETCH_COINS_HISTORY_SUCCESS,
  payload
});

export const getCoinHistoryFailure = payload => ({
  type: FETCH_COINS_HISTORY_ERROR,
  payload
});

export const loading = () => ({
  type: IS_LOADING
});

export const fetchCoinHistoryAction = coinId => (dispatch) => {
 
  dispatch(loading());
  axios.get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1`
  ).then((response) => {
    const last7dayHistory = response.data && response.data.data.reverse().splice(0, 7);
    const last7dayHistoryReverse = last7dayHistory.reverse();
    dispatch(getCoinHistorySuccess(last7dayHistoryReverse));
  }).catch((error) => {
    dispatch(getCoinHistoryFailure(error.response.data));
  });
};
