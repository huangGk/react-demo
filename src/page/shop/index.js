import React, { Component } from 'react';
import ShopItem from './components/ShopItem';
import { connect } from 'react-redux';
import { actionCreate } from './store';
import Dialog from '../../common/prompt/index';
import './style.css';

class Shop extends Component {
  componentDidMount() {
    this.props.getShopList();
  }
  render() {
    const { list } = this.props;
    return (
      <div id="main">
        <div className="sku-box store-content">
          <div className="sort-option">
            <ul className="line clear">
              <li>
                <a href="javascript:;" className="active">
                  综合排序
                </a>
              </li>
              <li>
                <a href="javascript:;">销量排序</a>
              </li>
              <li>
                <a href="javascript:;">价格低到高</a>
              </li>
              <li>
                <a href="javascript:;">价格高到低</a>
              </li>
            </ul>
          </div>
          <div className="gray-box">
            <div className="item-box">
              {list.map(item => (
                <ShopItem key={item.get('id')} item={item} />
              ))}
            </div>
          </div>
        </div>
        <Dialog />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['Shop', 'shopList'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getShopList: () => {
      dispatch(actionCreate.getList());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
