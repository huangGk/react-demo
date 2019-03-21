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

export const checkPrice = createSelector(
  // 计算选中商品总价
  carPanel,
  carPanelData => {
    let sumPrice = 0;
    carPanelData.forEach(item => {
      if (item.get('checked')) {
        sumPrice +=
          parseFloat(item.get('price')) * parseFloat(item.get('count'));
      }
    });
    return sumPrice;
  }
);

export const checkedcommodity = createSelector(
  // 当前选中的商品
  carPanel,
  carPanelData => {
    let checkedGoods = [];
    carPanelData.forEach(item => {
      if (item.get('checked')) {
        checkedGoods.push(item.toJS());
      }
    });
    return checkedGoods;
  }
);

export const checkCount = createSelector(
  // 选中的商品数量
  carPanel,
  carPanelData => {
    let sumCount = 0;
    carPanelData.forEach(item => {
      if (item.get('checked')) {
        sumCount += parseFloat(item.get('count'));
      }
    });
    return sumCount;
  }
);

export const freight = createSelector(
  // 计算运费
  [checkPrice, checkCount],
  (sumPrice, sumCount) => {
    let freight = 8; // 基础运费
    if (sumPrice > 88 || !sumCount) {
      freight = 0;
    }
    return freight;
  }
);

export const allChecked = createSelector(
  // 判断商品是否全部选中
  carPanel,
  carPanelData => {
    let allChecked = true;
    carPanelData.forEach(item => {
      if (!item.get('checked')) {
        allChecked = false;
      }
    });
    return allChecked;
  }
);
