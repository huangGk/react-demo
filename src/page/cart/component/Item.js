import React from 'react';

const Item = props => {
  const { shop, plusCarPanelData, subCarPanel, delCarPanelItem, checkItem } = props;
  const detail = shop.toJS();
  return (
    <div className="cart-group">
      <div className="cart-top-items">
        <div className="cart-items">
          <div className="items-choose">
            <span
              className={
                detail.checked
                  ? 'blue-checkbox-new checkbox-on'
                  : 'blue-checkbox-new'
              }
              onClick={() => {checkItem(detail.sku_id)}}
            >
              <a />
            </span>
          </div>
          <div className="items-thumb">
            <img src={detail.ali_image} alt="" />
            <a href="javascript:;" />
          </div>
          <div className="name hide-row">
            <div className="name-table">
              <a href="javascript:;">{detail.title}</a>
              <ul className="attribute">
                <li>{detail.spec_json.show_name}</li>
              </ul>
            </div>
          </div>
          <div className="operation">
            <a
              className="items-delete-btn"
              onClick={() => {
                delCarPanelItem(detail.sku_id);
              }}
            />
          </div>
          <div className="subtotal">¥ {detail.count * detail.price}</div>
          <div className="item-cols-num">
            <div className="select js-select-quantity">
              <span
                className={detail.count < 1 ? 'down down-disabled' : 'down'}
                onClick={() => {
                  subCarPanel(detail.sku_id);
                }}
              >
                -
              </span>
              <span className="num">{detail.count}</span>
              <span
                className={
                  detail.count >= detail.limit_num ? 'up up-disabled' : 'up'
                }
                onClick={() => {
                  plusCarPanelData(detail.sku_id);
                }}
              >
                +
              </span>
            </div>
          </div>
          <div className="price">¥ {detail.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
