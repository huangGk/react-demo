import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { actionCreate } from '../../store';

class AddressPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receive: {
        id: '',
        name: '', //收货人姓名
        phone: '', //收货人电话
        areaCode: '', //区号
        landLine: '', //固定电话
        provinceId: 0, //省份id
        province: '', //省份名字
        cityId: 0, //城市id
        city: '', //城市名字
        countyId: 0, //市辖区id
        county: '', //市辖区名字
        add: '', //详细地址
        default: false //是否为默认选中的地址
      },
      phoneError: false,
      cityList: [],
      countyList: []
    };
  }
  componentDidMount() {
    this.props.getlist();
  }
  checkDefault = () => {
    // 切换是否默认地址
    console.log(this.state.receive.default);
    this.setState({
      receive: Object.assign({}, this.state.receive, {
        default: !this.state.receive.default
      })
    });
  };
  changePhone = e => {
    // 改变电话号码
    this.setState({
      receive: Object.assign({}, this.state.receive, { phone: e.target.value })
    });
  };
  handleName = e => {
    // 改变收货人姓名
    this.setState({
      receive: Object.assign({}, this.state.receive, { name: e.target.value })
    });
  };
  handleAreaCode = e => {
    // 改变收货区号
    this.setState({
      receive: Object.assign({}, this.state.receive, {
        areaCode: e.target.value
      })
    });
  };
  handleLandLine = e => {
    // 改变固定电话
    this.setState({
      receive: Object.assign({}, this.state.receive, {
        landLine: e.target.value
      })
    });
  };
  handleAdd = e => {
    // 改变详细地址
    this.setState({
      receive: Object.assign({}, this.state.receive, { add: e.target.value })
    });
  };
  inspectPhone = () => {
    // 检查手机号是否合法
    let valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
    if (
      this.state.receive.phone.trim() !== '' &&
      !valid_rule.test(this.state.receive.phone)
    ) {
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

  handleProvince = e => {
    // 选择省份后，返回城市列表
    let value = e.target.value;
    let province = '';
    let res = this.props.addList
      .filter(item => {
        if (parseInt(e.target.value) === item.get('area_id')) {
          province = item.get('area_name');
        }
        return parseInt(e.target.value) === item.get('area_id');
      })
      .toJS()[0];
    this.setState(() => {
      return {
        cityList: res.city_list,
        receive: Object.assign({}, this.state.receive, {
          provinceId: value,
          province
        })
      };
    });
  };
  handleCity = e => {
    // 选择城市后，返回县级市
    let value = e.target.value;
    let city = '';
    let res = this.state.cityList.filter(item => {
      if (parseInt(e.target.value) === item.area_id) {
        city = item.area_name;
      }
      return parseInt(e.target.value) === item.area_id;
    })[0];
    this.setState({
      countyList: res.county_list,
      receive: Object.assign({}, this.state.receive, { cityId: value, city })
    });
  };
  handleCounty = e => {
    let county = '';
    let value = e.target.value;
    this.state.countyList.forEach(item => {
      if (item.area_id === parseInt(value)) {
        county = item.area_name;
      }
    });
    this.setState({
      receive: Object.assign({}, this.state.receive, {
        countyId: value,
        county
      })
    });
  };
  handleSave = () => {
    // 保存地址信息
    this.props.addAddress(this.state.receive);
    this.props.closePop(false);
  };

  render() {
    const { closePop, addList } = this.props;
    const { receive, phoneError, cityList, countyList } = this.state;
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
                            value={receive.name}
                            onChange={this.handleName}
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
                            value={receive.phone}
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
                            value={receive.areaCode}
                            onChange={this.handleAreaCode}
                          />
                          <div className="verify-error" />
                        </div>
                        <div className="form-item-v3 telephone-w fn-right form-valid-item">
                          <input
                            type="text"
                            placeholder="固定电话（可选）"
                            className="js-verify js-address-telephone"
                            value={receive.landLine}
                            onChange={this.handleLandLine}
                          />
                          <div className="verify-error" />
                        </div>
                      </div>
                      <div className="module-form-row clear">
                        <div className="form-item-v3 select-item province-wrapper">
                          <select
                            name="province_code"
                            value={receive.provinceId}
                            className="province select-province js-form-province js-verify"
                            onChange={this.handleProvince}
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
                            value={receive.cityId}
                            onChange={this.handleCity}
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
                            value={receive.countyId}
                            onChange={this.handleCounty}
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
                            placeholder="详细地址，如街道名称，楼层，门牌号码等"
                            value={receive.add}
                            onChange={this.handleAdd}
                          />
                          <div className="verify-error" />
                        </div>
                      </div>
                      <div className="module-form-row fn-clear">
                        <input type="checkbox" className="hide" />
                        <span
                          className={
                            receive.default
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
