import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddressItem from './component/addressItem';
import Invoice from './component/invoice';
import ShopList from './component/shopList';
import { actionCreate } from './store';
import { actionCreate as actionCreateDelCheckAll } from '../../common/header/store';
import { selectors } from '../../common/header/store';
import AddressPop from './component/addressPop/index';
import { withRouter } from 'react-router-dom';
import './style.css';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiveIndex: 0,
      invoice: {
        personal: true, // 默认是个人发票
        name: '' // 发票公司名字
      },
      popShow: false
    };
  }
  componentDidMount() {
    this.props.receiveInfo.forEach((item, index) => {
      if (item.default) {
        this.changeReceiveIndex(index);
      }
    });
  }
  changeReceiveIndex = index => {
    this.setState({
      receiveIndex: index
    });
  };
  checkedInvoice = boolen => {
    // 切换个人发票还是公司发票
    this.setState({
      invoice: Object.assign({}, this.state.invoice, { personal: boolen })
    });
  };
  handleChangeName = e => {
    // 填写公司发票名称
    this.setState({
      invoice: Object.assign({}, this.state.invoice, { name: e.target.value })
    });
  };
  closePop = boolean => {
    // 切换弹层的显示隐藏
    this.setState({
      popShow: boolean
    });
  };

  handleSubmitOrder = () => {
    const { invoice, receiveIndex } = this.state;
    const {
      receiveInfo,
      checkedcommodity,
      checkPrice,
      freight,
      submitOrder,
      history
    } = this.props;
    if (!invoice.personal && !invoice.name) {
      return;
    }
    let receive = receiveInfo[receiveIndex];
    if (invoice.personal) {
      this.setState({
        invoice: Object.assign({}, invoice, { name: '个人' })
      });
    }
    let iDate = new Date();
    let month = iDate.getMonth() + 1; //因为JS的月份是从0开始的，所以要加1
    let day = iDate.getDate();
    if (month >= 1 && month <= 9) {
      //如果月份是在1-9之间，需要进行补0操作
      month = '0' + month;
    }
    if (day >= 1 && day <= 9) {
      //如果1-9号之间，需要进行补0操作
      day = '0' + day;
    }
    let data = {
      orderId: iDate.getTime(),
      goodsData: checkedcommodity,
      price: checkPrice,
      freight: freight,
      invoiceName: invoice.name,
      iDate: iDate.getFullYear() + '-' + month + '-' + day,
      receiveInfo: receive,
      isPay: false
    };
    history.push(`/payment/${data.orderId}`);
    submitOrder(data);
  };

  render() {
    const { receiveIndex, invoice, popShow } = this.state;
    const { receiveInfo, checkedcommodity, checkPrice, freight } = this.props;
    return (
      <div id="main">
        <div className="content page-order-checkout checkout">
          <AddressItem
            receiveIndex={receiveIndex}
            changeIndex={this.changeReceiveIndex}
            receiveInfo={receiveInfo}
            closePop={this.closePop}
          />
          <Invoice
            checkedInvoice={this.checkedInvoice}
            handleChangeName={this.handleChangeName}
            invoice={invoice}
          />
          <ShopList
            checkedcommodity={checkedcommodity}
            checkPrice={checkPrice}
            freight={freight}
            submitOrder={this.handleSubmitOrder}
          />
        </div>
        {popShow ? <AddressPop closePop={this.closePop} /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    receiveInfo: state.getIn(['Checkout', 'receiveInfo']).toJS(),
    checkedcommodity: selectors.checkedcommodity(state),
    checkPrice: selectors.checkPrice(state),
    freight: selectors.freight(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAddress: data => {
      // 添加收货地址
      dispatch(actionCreate.addAddress(data));
    },
    submitOrder: data => {
      dispatch(actionCreate.submitOrder(data)); // 提交订单
      dispatch(actionCreateDelCheckAll.delCheckAll()); // 删除购物车中已经选中的商品
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CheckOut)
);
