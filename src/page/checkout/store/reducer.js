import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  receiveInfo: [
    {
      // 收货信息
      name: '王某某',
      phone: '13811111111',
      areaCode: '010',
      landLine: '64627856',
      provinceId: 110000,
      province: '北京市',
      cityId: 110100,
      city: '市辖区',
      countyId: 110106,
      county: '海淀区',
      add: '上地十街辉煌国际西6号楼319室',
      default: false
    },
    {
      name: '李某某',
      phone: '13811111111',
      areaCode: '010',
      landLine: '64627856',
      provinceId: 110000,
      province: '北京市',
      cityId: 110100,
      city: '市辖区',
      countyId: 110106,
      county: '海淀区',
      add: '上地十街辉煌国际东6号楼350室',
      default: true
    }
  ],
  addList: [],
  orderInfo: [] // 订单信息
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.addAddress:
      return state.set(
        'receiveInfo',
        state.get('receiveInfo').push(action.data)
      );
    case constants.getAddList:
      return state.set('addList', action.data);
    case constants.submitOrder: // 订单信息
      return state.set(
        'orderInfo',
        state.get('orderInfo').unshift(action.data)
      );
    case constants.isPay: // 订单支付，支付成功把isPay改为true
      return state.set('orderInfo', state.get('orderInfo').map(item => {
        if (item.get('orderId') === action.orderId) {
          return item.set('isPay', true)
        }
        return item;
      }))
    default:
      return state;
  }
};
