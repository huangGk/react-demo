import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  carPanelData: [],
  cartShow: false,
  maxOff: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.delcarPanel:
      let carPanel = state.get('carPanelData').toJS();
      return state.set(
        'carPanelData',
        fromJS(carPanel.filter(item => item.sku_id !== action.sku_id))
      );
    case constants.addcarPanel:
      action.data = action.data.toJS();
      let data = state.get('carPanelData').toJS();
      let isFirst = true;
      let ismaxOff = false;
      data.forEach(goods => {
        if (goods.sku_id === action.data.sku_id) {
          goods.count += action.data.count;
          isFirst = false;
          if (goods.count > goods.limit_num) {
            // 如果商品的件数大于商品的最大购买数，弹出一个框，告诉用户购买上限
            goods.count -= action.data.count;
            ismaxOff = true;
          }
        }
      });
      if (isFirst) {
        data.push(action.data);
        return state.merge({
          carPanelData: fromJS(data),
          cartShow: true
        });
      }
      return state.merge({
        carPanelData: fromJS(data),
        cartShow: true,
        maxOff: ismaxOff
      });
    case constants.showCarHandle:
      return state.set('cartShow', true);
    case constants.hideCarHandle:
      return state.set('cartShow', false);
    case constants.closeDialog:
      return state.set('maxOff', false)
    default:
      return state;
  }
};
