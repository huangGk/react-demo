import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreate } from '../../common/header/store';
import { Link } from 'react-router-dom';
import Item from './component/Item';
import CartBottom from './component/cartBottom';

import './style.css';

const Emptylabel = () => {
  return (
    <div className="empty-label">
      <h3>您的购物车中还没有商品</h3>
      <Link className="link" to="/">
        现在选购
      </Link>
    </div>
  );
};

const CartList = props => {
  const {
    carPanelData,
    subCarPanel,
    plusCarPanelData,
    delCarPanelItem,
    checkItem
  } = props;
  return (
    <div>
      <div className="cart-table-title">
        <span className="name">商品信息</span>
        <span className="operation">操作</span>
        <span className="subtotal">小计</span>
        <span className="num">数量</span>
        <span className="price">单价</span>
      </div>
      <div className="cart-table">
        <div className="cart-group">
          {carPanelData.map((item, index) => (
            <Item
              shop={item}
              key={index}
              plusCarPanelData={plusCarPanelData}
              subCarPanel={subCarPanel}
              delCarPanelItem={delCarPanelItem}
              checkItem={checkItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

class Cart extends Component {
  render() {
    const {
      carPanelData,
      subCarPanel,
      plusCarPanelData,
      delCarPanelItem,
      checkItem,
      delCheckAll,
      checkAll
    } = this.props;
    return (
      <div id="main" className="hander-car">
        <div className="store-content">
          <div className="cart-box">
            <div className="title">
              <h2>购物清单</h2>
            </div>
            <div className="cart-inner">
              {carPanelData.toJS().length ? (
                <div>
                  <CartList
                    carPanelData={carPanelData}
                    plusCarPanelData={plusCarPanelData}
                    subCarPanel={subCarPanel}
                    delCarPanelItem={delCarPanelItem}
                    checkItem={checkItem}
                  />
                  <CartBottom delCheckAll={delCheckAll} checkAll={checkAll} />
                </div>
              ) : (
                <Emptylabel />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    carPanelData: state.getIn(['Header', 'carPanelData'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    subCarPanel: sku_id => {
      // 减少商品数量
      dispatch(actionCreate.subCarPanel(sku_id));
    },
    plusCarPanelData: sku_id => {
      // 添加商品数量
      dispatch(actionCreate.plusCarPanelData(sku_id));
    },
    delCarPanelItem: sku_id => {
      // 删除商品
      dispatch(actionCreate.delCarPanelItem(sku_id));
    },
    checkItem: sku_id => {
      // 选中商品
      dispatch(actionCreate.checkItem(sku_id));
    },
    delCheckAll: () => {
      // 删除选中商品
      dispatch(actionCreate.delCheckAll());
    },
    checkAll: isChecked => {
      // 全选或者反选
      dispatch(actionCreate.checkAll(isChecked));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
