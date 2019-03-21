import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './style.css';
import Order from './order';

class Account extends Component {
  render() {
    const { match } = this.props;
    return (
      <div id="main">
        <div className="content clear">
          <div className="account-wrapper">
            <div className="account-sidebar">
              <div className="avatar gray-box clear">
                <div className="js-account-sidebar-info">
                  <img
                    src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png"
                    alt=""
                  />
                </div>
                <div className="box-inner">
                  <ul className="account-nav">
                    <li className="current">
                      <Link to={`${match.url}/`}>我的订单</Link>
                    </li>
                    <li className="">
                      <Link to={`${match.url}/address`}>收货地址</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Route path={`${match.url}/`} component={Order} />
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
