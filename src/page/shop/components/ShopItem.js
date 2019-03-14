import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreate } from '../../../common/header/store';

class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0
    };
  }
  tabIndex = index => {
    this.setState(() => {
      return {
        itemIndex: index
      };
    });
  };
  render() {
    const { item, addCarPanelHandle } = this.props;
    const { itemIndex } = this.state;
    return (
      <div>
        <div className="item" key={item.get('id')}>
          <div>
            <div className="item-img">
              <img
                style={{ opacity: 1 }}
                alt={item.getIn(['sku_info', itemIndex, 'title'])}
                src={item.getIn(['sku_info', itemIndex, 'ali_image'])}
              />
            </div>
            <h6>{item.get('name')}</h6>
            <h3>{item.get('name_title')}</h3>
            <div className="params-colors">
              <ul className="colors-list">
                {item.get('sku_info').map((sku, index) => (
                  <li key={sku.get('sku_id')}>
                    <a
                      href="javascript:;"
                      className={{ active: index === itemIndex }}
                      onClick={() => {
                        this.tabIndex(index);
                      }}
                    >
                      <img
                        title={sku.getIn(['spec_json', 'image'])}
                        alt=""
                        src={sku.getIn(['spec_json', 'image'])}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="item-btns clearfix">
              <span className="item-gray-btn">
                <Link
                  to={`/item/${item.getIn(['sku_info', itemIndex, 'sku_id'])}`}
                >
                  查看详情
                </Link>
              </span>
              <span
                className="item-blue-btn"
                onClick={() => {
                  addCarPanelHandle(item.getIn(['sku_info', itemIndex]));
                }}
              >
                加入购物车
              </span>
            </div>
            <div className="item-price clearfix">
              <i>¥</i>
              <span>{parseInt(item.get('price')).toFixed(2)}</span>
            </div>
            <div className="discount-icon">false</div>
            <div className="item-cover">
              <Link
                to={`/item/${item.getIn(['sku_info', itemIndex, 'sku_id'])}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCarPanelHandle: data => {
      // 派发一个action，添加数据到购物车里面
      dispatch(
        actionCreate.addcarPanel(
          data.merge({
            count: 1,
            checked: true
          })
        )
      );
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ShopItem);
