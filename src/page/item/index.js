import React, { Component } from 'react';
import Prompt from '../../common/prompt';
import { connect } from 'react-redux';
import { selectors, actionCreate } from './store';

import './style.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0
    };
  }
  componentDidMount() {
    this.props.getSkuId(this.props.match.params.id); // 获取商品id
    this.props.getList(); // 商品详细信息
  }
  render() {
    const { detail } = this.props;
    const { imgIndex } = this.state;
    if (!detail) {
      return null;
    }
    return (
      <div id="main">
        <div className="store-content item">
          <div className="item-box">
            <div className="gallery-wrapper">
              <div className="gallery">
                <div className="thumbnail">
                  <ul>
                    {detail.ali_images.map((item, index) => {
                      return (
                        <li
                          className={imgIndex === index ? 'on' : ''}
                          key={index}
                        >
                          <img
                            src={`${item}?x-oss-process=image/resize,w_54/quality,Q_90/format,webp`}
                            alt=""
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="thumb">
                  <ul>
                    {detail.ali_images.map((item, index) => {
                      return (
                        <li
                          className={imgIndex === index ? 'on' : ''}
                          key={index}
                        >
                          <img
                            src={`${item}?x-oss-process=image/resize,w_440/quality,Q_90/format,webp`}
                            alt=""
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="banner">
              <div className="sku-custom-title">
                <div className="params-price">
                  <span>
                    <em>¥</em>
                    <i>{detail.price}</i>
                  </span>
                </div>
                <div className="params-info">
                  <h4>{detail.title}</h4>
                  <h6>{detail.sub_title}</h6>
                </div>
              </div>
              <div className="sku-dynamic-params-panel">
                <div className="sku-dynamic-params clear">
                  <span className="params-name">颜色</span>
                  <ul className="params-colors">
                    {detail.sku_list.map(item => {
                      return (
                        <li className="cur">
                          <a>
                            <i>
                              <img src="" alt="" />
                            </i>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="sku-dynamic-params clear">
                  <div className="params-name">数量</div>
                  <div className="params-detail clear">
                    <div className="item-num js-select-quantity">
                      <span className="down down-disabled">-</span>
                      <span className="num">1</span>
                      <span className="up up-disabled">+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sku-status">
                <div className="cart-operation-wrapper clearfix">
                  <span className="blue-title-btn js-add-cart">
                    <a>加入购物车</a>
                  </span>
                  <span className="gray-title-btn">
                    <a>现在购买</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Prompt />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: selectors.descItem(state).toJS()[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSkuId: id => {
      dispatch(actionCreate.getSkuId(id));
    },
    getList: () => {
      dispatch(actionCreate.getList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
