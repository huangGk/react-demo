import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectors, actionCreate } from '../../store';
import PropTypes from 'prop-types';

const CartEmpty = () => {
  return (
    <div className="empty">
      <h3>购物车为空</h3>
      <p>您还没有选购任何商品，现在前往商城选购吧!</p>
    </div>
  );
};

const CartFull = props => {
  const { totlePrice, totleCount, carPanelData, delCarPanelHandle } = props;
  return (
    <div className="full">
      <div className="nav-cart-items">
        <ul>
          {carPanelData.map(item => {
            return (
              <li className="clear" key={item.get('sku_id')}>
                <div className="cart-item js-cart-item cart-item-sell">
                  <div className="cart-item-inner">
                    <div className="item-thumb">
                      <img alt="" src={item.get('ali_image')} />
                    </div>
                    <div className="item-desc">
                      <div className="cart-cell">
                        <h4>
                          <Link to={`/item/${item.get('sku_id')}`}>
                            {item.get('title')}
                          </Link>
                        </h4>
                        <p className="attrs">
                          <span>{item.getIn(['spec_json', 'show_name'])}</span>
                        </p>
                        <h6>
                          <span className="price-icon">¥</span>
                          <span className="price-num">
                            {item.get('price')}x
                          </span>
                          <span className="item-num">{item.get('count')}</span>
                        </h6>
                      </div>
                    </div>
                    <div
                      className="del-btn"
                      onClick={() => {
                        delCarPanelHandle(item.get('sku_id'));
                      }}
                    >
                      删除
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-cart-total">
        <p>
          共 <strong className="ng-binding">{totleCount}</strong>件商品
        </p>
        <h5>
          合计：<span className="price-icon">¥</span>
          <span className="price-num ng-binding" ng-bind="cartMenu.totalPrice">
            {totlePrice}
          </span>
        </h5>
        <h6>
          <Link className="nav-cart-btn" to="/cart">
            去购物车
          </Link>
        </h6>
      </div>
    </div>
  );
};

const ShowCart = props => {
  const { count, totlePrice, carPanelData, delCarPanelHandle } = props;
  return (
    <div className="nav-cart-wrapper">
      <div className="nav-cart-list">
        {count ? (
          <CartFull
            totleCount={count}
            totlePrice={totlePrice}
            carPanelData={carPanelData}
            delCarPanelHandle={delCarPanelHandle}
          />
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};

class CarPanel extends Component {
  render() {
    const {
      count,
      cartShow,
      totlePrice,
      carPanelData,
      delCarPanelHandle,
      showCarHandle,
      hideCarHandle
    } = this.props;
    return (
      <li
        className="nav-cart"
        onMouseEnter={showCarHandle}
        onMouseLeave={hideCarHandle}
      >
        <a href="javascript:;" className="ball-rect">
          购物车
        </a>
        {/* 根据class改变颜色 */}
        <span className={count ? 'cart-num cart-empty-num' : 'cart-empty-num'}>
          <i>{count}</i>
        </span>
        {cartShow ? (
          <ShowCart
            count={count}
            totlePrice={totlePrice}
            carPanelData={carPanelData}
            delCarPanelHandle={delCarPanelHandle}
          />
        ) : null}
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartShow: state.getIn(['Header', 'cartShow']),
    count: selectors.totleCount(state),
    totlePrice: selectors.totlePrice(state),
    carPanelData: state.getIn(['Header', 'carPanelData'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delCarPanelHandle: sku_id => {
      dispatch(actionCreate.delCarPanelItem(sku_id));
    },
    showCarHandle: () => {
      dispatch(actionCreate.showCarHandle());
    },
    hideCarHandle: () => {
      dispatch(actionCreate.hideCarHandle());
    }
  };
};

CarPanel.propTypes = {
  delCarPanelHandle: PropTypes.func,
  showCarHandle: PropTypes.func,
  hideCarHandle: PropTypes.func,
  cartShow: PropTypes.bool,
  count: PropTypes.number,
  totlePrice: PropTypes.number,
  carPanelData: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarPanel);
