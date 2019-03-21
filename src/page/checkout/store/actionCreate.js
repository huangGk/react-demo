import { constants } from './index';
import { fromJS } from 'immutable';
import Axios from 'axios';

export const addAddress = data => {
  // 把接口获取到的数据，存储到Redux中
  return {
    type: constants.addAddress,
    data: fromJS(data)
  };
};

export const AddList = data => {
  return {
    type: constants.getAddList,
    data: fromJS(data)
  };
};

export const getAddList = () => {
  // 获取地址列表
  return dispatch => {
    Axios.get('/api/addList.json')
      .then(res => {
        if (res.data.code === 0) {
          dispatch(AddList(res.data.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const submitOrder = data => {
  // 提交订单
  return {
    type: constants.submitOrder,
    data: fromJS(data) // 把普通对象转换成immutable对象
  }
}

export const payNow = orderId => {
  // 订单支付
  return {
    type: constants.isPay,
    orderId
  }
}
