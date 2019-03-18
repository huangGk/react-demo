import React, { Component } from 'react';
import Prompt from '../../common/prompt';
import { connect } from 'react-redux';
import { selectors, actionCreate } from './store';
import { Link } from 'react-router-dom';
import { actionCreate as HeaderActionCreate } from '../../common/header/store';

import './style.css';
import { fromJS } from 'immutable';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      count: 1
    };
  }
  componentDidMount() {
    this.props.getSkuId(this.props.match.params.id); // 获取商品id
    this.props.getList(); // 商品详细信息
  }
  addCount = count => {
    this.setState(() => {
      count++;
      if (count > this.props.detail.limit_num) {
        count = this.props.detail.limit_num;
      }
      return {
        count
      };
    });
  };
  subCount = count => {
    this.setState(() => {
      count--;
      if (count < 1) {
        count = 1;
      }
      return {
        count
      };
    });
  };
  changeImgIndex = index => {
    this.setState(() => {
      return {
        imgIndex: index
      };
    });
  };
  render() {
    const { detail, addCarPanelHandle, getSkuId } = this.props;
    const { imgIndex, count } = this.state;
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
                          onClick={() => {
                            this.changeImgIndex(index);
                          }}
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
                        <li
                          className={imgIndex === item.id ? 'cur' : ''}
                          key={item.id}
                        >
                          <Link
                            to={`/item/${item.id}`}
                            title={item.color}
                            onClick={() => {
                              getSkuId(item.id);
                            }}
                          >
                            <i>
                              <img src={item.image} alt="" />
                            </i>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="sku-dynamic-params clear">
                  <div className="params-name">数量</div>
                  <div className="params-detail clear">
                    <div className="item-num js-select-quantity">
                      <span
                        onClick={() => {
                          this.subCount(count);
                        }}
                        className={count <= 1 ? 'down down-disabled' : 'down'}
                      >
                        -
                      </span>
                      <span className="num">{count}</span>
                      <span
                        className={
                          count >= detail.limit_num ? 'up up-disabled' : 'up'
                        }
                        onClick={() => {
                          this.addCount(count);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sku-status">
                <div className="cart-operation-wrapper clearfix">
                  <span
                    className="blue-title-btn js-add-cart"
                    onClick={() => {
                      addCarPanelHandle(detail, count);
                    }}
                  >
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
    },
    addCarPanelHandle: (detail, count) => {
      detail = fromJS(detail);
      dispatch(
        HeaderActionCreate.addcarPanel(
          detail.merge({
            count,
            checked: true
          })
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
