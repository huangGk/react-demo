import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import propTypes from 'prop-types';

const Order = props => {
  const { orderList } = props;
  return (
    <div className="account-order">
      <div className="gray-box">
        <div className="title columns-title pre-title">
          <h2>我的订单</h2>
          <div className="gray-btn-menu sort-status-menu">
            <span className="label">
              <i className="arrow" /> 全部状态
            </span>
            <ul className="menu-list">
              <li className="selected">
                <a href="javascript:;">全部状态</a>
              </li>
              <li className="">
                <a href="javascript:;">未完成</a>
              </li>
              <li className="">
                <a href="javascript:;">已完成</a>
              </li>
              <li className="">
                <a href="javascript:;">已关闭</a>
              </li>
            </ul>
          </div>
          <div className="gray-btn-menu sort-time-menu -gray-btn-menu-on">
            <span className="label">
              <i className="arrow" /> 最近三个月
            </span>
            <ul className="menu-list">
              <li className="selected">
                <a href="javascript:;">最近三个月</a>
              </li>
              <li className="">
                <a href="javascript:;">今年内</a>
              </li>
              <li className="">
                <a href="javascript:;">2016年</a>
              </li>
              <li className="">
                <a href="javascript:;">2015年</a>
              </li>
            </ul>
          </div>
        </div>
        {orderList.map((item, index) => {
          return (
            <div className="js-list-inner" key={index}>
              <div className="box-inner order-cart order-list-cart clear">
                <div className="gray-sub-title cart-title">
                  <span className="date">{item.iDate}</span>
                  <span className="order-id">
                    订单号： <a href="javascript:;">{item.orderId}</a>
                  </span>
                  <span className="order-detail">
                    <Link to={`/payment/${item.orderId}`}>查看详情</Link>
                  </span>
                  <span className="sub-total">应付总额</span>
                  <span className="num">数量</span>
                  <span className="price">单价</span>
                </div>
                <div className="cart">
                  {item.goodsData.map((list, index) => {
                    return (
                      <div className="cart-items clear" key={index}>
                        <div className="prod-info clear">
                          <div className="items-thumb">
                            <a href="javascript:;">
                              <img
                                alt=""
                                src={`${
                                  list.ali_image
                                }?x-oss-process=image/resize,w_80/quality,Q_100/format,webp`}
                              />
                            </a>
                          </div>
                          <div className="items-params clear">
                            <div className="name vh-center">
                              <a
                                href="javascript:;"
                                title={`${list.title}(${
                                  list.spec_json.show_name
                                })`}
                              >
                                {list.title}({list.spec_json.show_name})
                              </a>
                            </div>
                            <div className="detail" />
                          </div>
                          <div className="num">{list.count}</div>
                          <div className="price">¥ {list.price}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="prod-operation">
                  <div className="total">¥ {item.price + item.freight}</div>
                  <div className="status">
                    {!item.isPay ? (
                      <a className="blue-small-btn js-payment-order">
                        <Link to={`/payment/${item.orderId}`}>现在付款</Link>
                      </a>
                    ) : (
                      <span>已完成</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orderList: state.getIn(['Checkout', 'orderInfo']).toJS()
  };
};

Order.propTypes = {
  orderList: propTypes.array
};

export default connect(
  mapStateToProps,
  null
)(Order);
