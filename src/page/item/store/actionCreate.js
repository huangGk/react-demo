import * as constants from './constants';
import { fromJS } from 'immutable';
import Axios from 'axios';

const changeList = data => {
  return {
    type: constants.detail,
    data: fromJS(data)
  };
};

export const getSkuId = id => {
  return {
    type: constants.getSku_id,
    id: String(id)
  }
}

export const getList = () => {
  return dispatch => {
    Axios.get('api/item.json')
      .then(res => {
        if (res.data.code === 0) {
          dispatch(changeList(res.data.data))
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
