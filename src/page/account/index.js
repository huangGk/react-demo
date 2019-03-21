import React from 'react';
import { Link, Route } from 'react-router-dom';
import './style.css';
import Order from './order';
import Address from './address';

const Account = props => {
  const { match, location } = props;
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
                  <li
                    className={
                      location.pathname === '/account/' ? 'current' : ''
                    }
                  >
                    <Link to={`${match.url}/`}>我的订单</Link>
                  </li>
                  <li
                    className={
                      location.pathname === '/account/address' ? 'current' : ''
                    }
                  >
                    <Link to={`/account/address`}>收货地址</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="account-content">
            <Route path={`${match.url}/`} component={Order} exact />
            <Route path={`${match.url}/address`} component={Address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
