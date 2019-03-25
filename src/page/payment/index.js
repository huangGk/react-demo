import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreate } from '../checkout/store'
import './style.css';
import PropTypes from 'prop-types';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderInfo: {}
    };
  }
  componentWillMount() {
    const { match, orderList } = this.props;
    let temp = orderList.filter(
      item => item.orderId === parseInt(match.params.orderId)
    )[0];
    if (temp) {
      this.setState({
        orderInfo: temp
      });
    }
  }

  payNowHandle = () => {
    const { payNow, history } = this.props;
    const { orderInfo } = this.state;
    history.push(`/account/order`); // 跳转到account路由
    alert(`支付成功${orderInfo.price + orderInfo.freight}元`);
    payNow(orderInfo.orderId);
  };

  render() {
    const { orderInfo } = this.state;
    return (
      <div id="main">
        <div className="content page-order-payment">
          <div className="gray-box clear">
            <div className="title">
              <h2>支付订单</h2>
            </div>
            <div className="box-inner order-info">
              <h3>提交订单成功</h3>
              <p className="payment-detail">
                请在 <span>24 小时内</span>完成支付，超时订单将自动取消。
              </p>
              <p className="payment-detail">
                我们将在您完成支付后的 72 小时内发货
              </p>
            </div>
            <div className="box-inner payment-checkout-panel clear">
              {!orderInfo.isPay ? (
                <span className="jianguo-blue-main-btn big-main-btn js-payment-order" onClick={this.payNowHandle}>
                  <a>现在支付</a>
                </span>
              ) : (
                <span className="is-pay">已完成</span>
              )}
              <span className="prices">
                应付金额：
                <em>
                  <span>¥ </span>
                  {orderInfo && orderInfo.price + orderInfo.freight}
                </em>
              </span>
            </div>
          </div>
          <div className="confirm-detail">
            <div className="info-title">订单编号</div>
            <p className="info-detail">{orderInfo.orderId}</p>
          </div>
          <div className="confirm-detail">
            <div className="info-title">收货信息</div>
            {orderInfo.receiveInfo && (
              <div>
                <p className="info-detail">
                  姓名：{orderInfo.receiveInfo.name}
                </p>
                <p className="info-detail">
                  联系电话：{orderInfo.receiveInfo.phone}
                </p>
                <p className="info-detail">
                  详细地址：{orderInfo.receiveInfo.province}{' '}
                  {orderInfo.receiveInfo.city} {orderInfo.receiveInfo.county}
                  {orderInfo.receiveInfo.add}
                </p>
              </div>
            )}
          </div>
          <div className="confirm-detail">
            <div className="info-title">发票信息</div>
            <p className="info-detail">发票类型：电子发票</p>
            <p className="info-detail">发票抬头：{orderInfo.invoiceName}</p>
            <p className="info-detail">发票内容：购买商品明细</p>
          </div>
          <div className="confirm-table-title clear">
            <span className="name fn-left">商品信息</span>
            <span className="subtotal fn-right">小计</span>
            <span className="num fn-right">数量</span>
            <span className="price fn-right">单价</span>
          </div>
          <div className="confirm-goods-table">
            {orderInfo.goodsData &&
              orderInfo.goodsData.map(item => {
                return (
                  <div className="cart-items clear" key={item.sku_id}>
                    <div className="name fn-left hide-row">
                      <div className="name-cell">
                        <a
                          href="javascript:;"
                          title={`${item.title}(${item.spec_json.show_name})`}
                        >
                          {item.title}（{item.spec_json.show_name}）
                        </a>
                        <br />
                      </div>
                    </div>
                    <div className="subtotal fn-right">
                      <div className="subtotal-cell">
                        ¥ {item.price * item.count}
                      </div>
                    </div>
                    <div className="goods-num fn-right">{item.count}</div>
                    <div className="price fn-right">¥ {item.price}</div>
                  </div>
                );
              })}
          </div>
          <div className="order-discount-line">
            <p>
              商品总计： <span>¥ {orderInfo.price}</span>
            </p>
            <p>
              运费： <span>¥{orderInfo.freight}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderList: state.getIn(['Checkout', 'orderInfo']).toJS()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    payNow: orderId => {
      dispatch(actionCreate.payNow(orderId));
    }
  };
};

Payment.propTypes = {
  payNow: PropTypes.func,
  orderList: PropTypes.array
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Payment)
);
