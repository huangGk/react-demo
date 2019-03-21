import React from 'react';

const ShopList = props => {
  const { checkedcommodity, checkPrice, freight, submitOrder } = props;
  return (
    <div className="gray-box">
      <div className="title pre-title">
        <h2>购物清单</h2>
      </div>
      <div className="box-inner ui-goods-cart">
        <div className="gray-sub-title cart-table-title">
          <span className="name">商品名称</span>
          <span className="subtotal">小计</span>
          <span className="num">数量</span>
          <span className="price">单价</span>
        </div>
        {/* 商品列表 */}
        <div className="cart-table">
          <div className="cart-group js-cart-group">
            {checkedcommodity.map(item => {
              return (
                <div className="cart-items" key={item.sku_id}>
                  <div className="items-thumb">
                    <a href="javascript:;">
                      <img alt="" src={item.ali_image} />
                    </a>
                  </div>
                  <div className="name hide-row">
                    <div className="name-cell">
                      <a
                        href="javascript:;"
                        title={`${item.title}(${item.spec_json.show_name})`}
                      >
                        {item.title} ({item.spec_json.show_name})
                      </a>
                    </div>
                  </div>
                  <div className="subtotal">
                    <div className="subtotal-cell">
                      ¥ {item.count * item.price}
                    </div>
                  </div>
                  <div className="goods-num">{item.count}</div>
                  <div className="price">¥ {item.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="box-inner">
        <div className="order-discount-line">
          <p>
            商品总计：
            <span>¥ {checkPrice}</span>
          </p>
          <p>
            运费：
            <span>¥ {freight}</span>
          </p>
          <p className="discount-line js-discount-cash">
            <em>现金券</em>：<span>0</span>
          </p>
        </div>
      </div>
      <div className="box-inner">
        <div className="last-payment clear">
          <span
            className="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout"
            onClick={submitOrder}
          >
            <a>提交订单</a>
          </span>
          <span className="prices fn-right">
            应付金额：
            <em>¥ {checkPrice + freight}</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
