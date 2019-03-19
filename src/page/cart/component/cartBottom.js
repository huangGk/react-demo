import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectors } from '../../../common/header/store';

const CartBottom = props => {
  const {
    checkPrice,
    checkCount,
    totleCount,
    allChecked,
    delCheckAll,
    checkAll
  } = props;
  return (
    <div className="cart-bottom-bg fix-bottom">
      <div className="cart-bar-operation">
        <div>
          <div
            className={
              allChecked
                ? 'choose-all js-choose-all checkbox-on'
                : 'choose-all js-choose-all'
            }
            onClick={() => {
              checkAll(allChecked);
            }}
          >
            <span className="blue-checkbox-new">
              <a />
            </span>
            全选
          </div>
          <div className="delete-choose-goods" onClick={delCheckAll}>
            删除选中的商品
          </div>
        </div>
      </div>
      <div className="shipping">
        <div className="shipping-box">
          <div className="shipping-total shipping-num">
            <h4 className="">
              已选择 <i>{checkCount}</i> 件商品
            </h4>
            <h5>
              共计 <i>{totleCount}</i> 件商品
            </h5>
          </div>
          <div className="shipping-total shipping-price">
            <h4 className="">
              应付总额：<span>￥</span>
              <i>{checkPrice}</i>
            </h4>
            <h5 className="shipping-tips">应付总额不含运费</h5>
          </div>
        </div>
        <span
          className={
            checkCount <= 0
              ? 'jianguo-blue-main-btn big-main-btn js-checkout disabled-btn'
              : 'jianguo-blue-main-btn big-main-btn js-checkout'
          }
        >
          <Link to="/checkout">现在结算</Link>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    checkPrice: selectors.checkPrice(state),
    checkCount: selectors.checkCount(state),
    totleCount: selectors.totleCount(state),
    allChecked: selectors.allChecked(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(CartBottom);
