import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreate } from '../../checkout/store';
import AddressPop from '../../checkout/component/addressPop';
import './style.css';
import PropTypes from 'prop-types';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogShow: false
    };
  }
  closePop = boolean => {
    this.setState({
      dialogShow: boolean
    });
  };

  render() {
    const { receiveInfo, delAddress } = this.props;
    const { dialogShow } = this.state;
    return (
      <div className="account-address">
        <div className="gray-box clear">
          <div className="title pre-title">
            <h2 className="fn-left">收货信息</h2>
            <span
              className="gray-blue-btn js-add-address"
              onClick={() => {
                this.closePop(true);
              }}
            >
              <a className="add">添加新地址</a>
            </span>
          </div>
          <div className="box-inner clear">
            {receiveInfo.map((item, index) => {
              return (
                <div
                  className="address-list-item default-item"
                  data-id="765532"
                  key={index}
                >
                  <div className="name fn-left">
                    <div className="name-cell">{item.name}</div>
                  </div>
                  <div className="detail fn-left">
                    <div className="detail-cell">
                      {item.province} {item.city} {item.county} {item.add}
                    </div>
                  </div>
                  <div className="operation fn-right">
                    <div className="operation-cell">
                      <a className="gray-edit-btn js-edit-address">修改</a>
                      <span
                        className="red-del-btn js-del-address"
                        onClick={() => {
                          delAddress(item.id);
                        }}
                      >
                        <a>删除</a>
                      </span>
                    </div>
                  </div>
                  {item.default ? (
                    <div className="default fn-right"> （默认地址） </div>
                  ) : (
                    ''
                  )}
                  <div className="telephone fn-right">{item.phone}</div>
                </div>
              );
            })}
          </div>
        </div>
        {dialogShow ? <AddressPop closePop={this.closePop} /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    receiveInfo: state.getIn(['Checkout', 'receiveInfo']).toJS()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delAddress: id => {
      dispatch(actionCreate.delAddress(id));
    }
  };
};

Address.propTypes = {
  receiveInfo: PropTypes.array,
  delAddress: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
