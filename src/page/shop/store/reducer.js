import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  shopList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.getList:
      return state.set('shopList', action.data)
    default:
      return state;
  }
};
