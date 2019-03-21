import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { actionCreate } from '../../store';

class AddressPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isdefault: false,
      phone: '',
      phoneError: false,
      cityList: [],
      countyList: []
    };
  }
  componentDidMount() {
    this.props.getlist();
  }
  checkDefault = () => {
    this.setState({
      isdefault: !this.state.isdefault
    });
  };
  changePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };
  inspectPhone = () => {
    // 检查手机号是否合法
    let valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
    if (this.state.phone.trim() !== '' && !valid_rule.test(this.state.phone)) {
      this.setState({
        phoneError: true
      });
    }
  };
  setPhoneError = () => {
    // 初始化错误信息
    this.setState({
      phoneError: false
    });
  };

  handleCity = e => {
    // 选择省份后，返回城市列表
    let res = this.props.addList
      .filter(item => parseInt(e.target.value) === item.get('area_id'))
      .toJS()[0];
    this.setState(() => {
      return {
        cityList: res.city_list
      };
    });
  };
  handleCounty = e => {
    // 选择城市后，返回县级市
    let res = this.state.cityList.filter(
      item => parseInt(e.target.value) === item.area_id
    )[0];
    this.setState({
      countyList: res.county_list
    });
  };
  handleSave = () => {
    // 保存地址信息
    this.props.closePop(false);
  };

  render() {
    const { closePop, addList } = this.props;
    const { isdefault, phoneError, phone, cityList, countyList } = this.state;
    return (
      <div id="pop">
        <div className="module-dialog-layer" style={{ display: 'block' }} />
        <div className="module-dialog clear module-dialog-address module-dialog-show">
          <div className="dialog-panel">
            <div className="topbar">
              <div className="dialog-tit clear">
                <h4 className="js-dialog-title">管理收货地址</h4>
              </div>
              <span
                className="dialog-close"
                onClick={() => {
                  closePop(false);
                }}
              >
                x
              </span>
            </div>
            <div className="dialog-con js-dialog-container">
              <div className="animate-layer">
                <div className="dialog-inner js-address-add">
                  <div className="save-address-box">
                    <div className="address-form">
                      <div className="module-form-row">
                        <div className="form-item-v3">
                          <input
                            type="text"
                            placeholder="收货人姓名"
                            className="js-verify"
                            ref={name => (this.name = name)}
                          />
                          <div className="verify-error" />
                        </div>
                      </div>
                      <div className="module-form-row">
                        <div
                          className={
                            phoneError
                              ? 'form-item-v3 form-invalid-item'
                              : 'form-item-v3'
                          }
                        >
                          <input
                            type="text"
                            placeholder="手机号"
                            className="js-verify"
                            value={phone}
                            onChange={this.changePhone}
                            onBlur={this.inspectPhone}
                            onFocus={this.setPhoneError}
                          />
                          {phoneError && (
                            <div className="verify-error">手机号不合法</div>
                          )}
                        </div>
                      </div>
                      <div className="module-form-row clear">
                        <div className="form-item-v3 area-code-w fn-left form-valid-item">
                          <input
                            type="text"
                            placeholder="区号（可选）"
                            className="js-verify js-address-area-code"
                            ref={areaCode => (this.areaCode = areaCode)}
                          />
                          <div className="verify-error" />
                        </div>
                        <div className="form-item-v3 telephone-w fn-right form-valid-item">
                          <input
                            type="text"
                            placeholder="固定电话（可选）"
                            className="js-verify js-address-telephone"
                            ref={landLine => (this.landLine = landLine)}
                          />
                          <div className="verify-error" />
                        </div>
                      </div>
                      <div className="module-form-row clear">
                        <div className="form-item-v3 select-item province-wrapper">
                          <select
                            name="province_code"
                            ref={provinceId => (this.provinceId = provinceId)}
                            className="province select-province js-form-province js-verify"
                            onChange={this.handleCity}
                          >
                            <option value="0">请选择省份</option>
                            {addList.map(item => (
                              <option
                                key={item.get('area_id')}
                                value={item.get('area_id')}
                              >
                                {item.get('area_name')}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="module-form-row clear">
                        <div className="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                          <select
                            className="city select-city js-form-city js-verify"
                            ref={cityId => (this.cityId = cityId)}
                            onChange={this.handleCounty}
                          >
                            <option value="0">请选择城市</option>
                            {cityList.map(item => (
                              <option key={item.area_id} value={item.area_id}>
                                {item.area_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                          <select
                            className="city select-city js-form-city js-verify"
                            ref={countyId => (this.countyId = countyId)}
                          >
                            <option value="0">请选择区县</option>
                            {countyList.map(item => (
                              <option key={item.area_id} value={item.area_id}>
                                {item.area_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="module-form-row">
                        <div className="form-item-v3">
                          <input
                            type="text"
                            className="js-verify"
                            ref={add => (this.add = add)}
                            placeholder="详细地址，如街道名称，楼层，门牌号码等"
                          />
                          <div className="verify-error" />
                        </div>
                      </div>
                      <div className="module-form-row fn-clear">
                        <input type="checkbox" className="hide" />
                        <span
                          className={
                            isdefault
                              ? 'blue-checkbox blue-checkbox-on'
                              : 'blue-checkbox'
                          }
                          onClick={this.checkDefault}
                        />
                        设为默认
                      </div>
                      <div
                        className="dialog-blue-btn big-main-btn js-verify-address"
                        onClick={this.handleSave}
                      >
                        <a>保存</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addList: state.getIn(['Checkout', 'addList'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getlist: () => {
      dispatch(actionCreate.getAddList());
    },
    addAddress: data => {
      // 添加一条地址数据到数据列表里面
      dispatch(actionCreate.addAddress(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressPop);
