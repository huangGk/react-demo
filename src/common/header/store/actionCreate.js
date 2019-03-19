import * as constants from './constants';

export const addcarPanel = data => {
  // 添加商品到购物车里面
  return {
    type: constants.addcarPanel,
    data
  };
};

export const subCarPanel = sku_id => {
  // 减少商品数量
  return {
    type: constants.subCarPanel,
    sku_id
  }
}

export const plusCarPanelData = sku_id => {
  // 添加商品数量
  return {
    type: constants.plusCarPanelData,
    sku_id
  }
}

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
  // 关闭弹层
  return {
    type: constants.closeDialog
  }
}

export const checkItem = sku_id => {
  // 切换商品选中状态
  return {
    type: constants.checkItem,
    sku_id
  }
}

export const checkAll = isChecked => {
  // 全选或者反选
  return {
    type: constants.checkAll,
    isChecked
  }
}

export const delCheckAll = () => {
  // 删除选中的商品
  return {
    type: constants.delCheckAll
  }
}