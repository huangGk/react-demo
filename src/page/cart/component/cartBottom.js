import React from 'react';
import { Link } from 'react-router-dom';

const CartBottom = () => {
  return (
    <div className="cart-bottom-bg fix-bottom">
      <div className="cart-bar-operation">
        <div>
          <div className="choose-all js-choose-all">
            <span className="blue-checkbox-new">
              <a />
            </span>
            全选
          </div>
          <div className="delete-choose-goods">删除选中的商品</div>
        </div>
      </div>
      <div className="shipping">
        <div className="shipping-box">
          <div className="shipping-total shipping-num">
            <h4 className="">
              已选择 <i>{}</i> 件商品
            </h4>
            <h5>
              共计 <i>{}</i> 件商品
            </h5>
          </div>
          <div className="shipping-total shipping-price">
            <h4 className="">
              应付总额：<span>￥</span>
              <i>{}</i>
            </h4>
            <h5 className="shipping-tips">应付总额不含运费</h5>
          </div>
        </div>
        <Link
          className="jianguo-blue-main-btn big-main-btn js-checkout"
          to="/checkout"
        >
          现在结算
        </Link>
      </div>
    </div>
  );
};

export default CartBottom;
