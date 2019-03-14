import * as constants from './constants';

export const addcarPanel = data => {
  // 添加商品到购物车里面
  return {
    type: constants.addcarPanel,
    data
  };
};

export const delCarPanelItem = sku_id => {
  // 删除购物车商品
  return {
    type: constants.delcarPanel,
    sku_id
  };
};

export const hideCarHandle = () => {
  // 隐藏购物车
  return {
    type: constants.hideCarHandle
  };
};

export const showCarHandle = () => {
  // 显示购物车
  return {
    type: constants.showCarHandle
  };
};

export const closePrompt = () => {
  return {
    type: constants.closeDialog
  }
}