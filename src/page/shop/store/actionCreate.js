import * as constants from './constants';
import { fromJS } from 'immutable';
import Axios from 'axios';

const changeList = data => {
  return {
    type: constants.getList,
    data: fromJS(data)
  };
};

export const getList = () => {
  return dispatch => {
    Axios.get('api/shopList.json')
      .then(res => {
        if (res.data.code === 0) {
          dispatch(changeList(res.data.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
