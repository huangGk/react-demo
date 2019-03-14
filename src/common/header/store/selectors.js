import { createSelector } from 'reselect';

const carPanel = state => state.getIn(['Header', 'carPanelData']);

export const totleCount = createSelector(
  // 计算商品总数量
  carPanel,
  carPanelData => {
    let count = 0;
    carPanelData.forEach(item => {
      count += parseFloat(item.get('count'));
    });
    return count;
  }
);

export const totlePrice = createSelector(
  // 计算商品总价
  carPanel,
  carPanelData => {
    let price = 0;
    carPanelData.forEach(item => {
      price += parseFloat(item.get('price'));
    });
    return price;
  }
);
