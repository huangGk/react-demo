import { createSelector } from 'reselect';

const details = state => state.getIn(['Item', 'List']);
const getSkuId = state => state.getIn(['Item', 'sku_id']);
export const descItem = createSelector(
  // 根据sku_id 返回对应的数据
  [details, getSkuId],
  (details, getSkuId) => details.filter(item => item.get('sku_id') === getSkuId)
);
