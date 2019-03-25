import React from 'react';
import { Link } from 'react-router-dom';
import CarPanel from './component/carPanel';
import { connect } from 'react-redux';
import './style.css';

const HeaderNav = () => {
  return (
    <div id="header">
      <div className="nav-global">
        <div className="container">
          <h1 className="nav-logo">
            <a href="javascript:void(0)" />
          </h1>
          <ul className="nav-aside">
            <li className="nav-user">
              <a href="javascript:void(0)">个人中心</a>
              <div className="nav-user-wrapper">
                <div className="nav-user-list">
                  <dl className="nav-user-avatar">
                    <dd>
                      <span className="ng-scope" />
                    </dd>
                    <dt className="ng-binding">+86 138****9453</dt>
                  </dl>
                  <ul>
                    <li className="order">
                      <Link className="order" tag="li" to="/account/order">
                        我的订单
                      </Link>
                    </li>
                    <li className="support">
                      <a href="javascript:void(0)">售后服务</a>
                    </li>
                    <li className="coupon">
                      <a href="javascript:void(0)">我的优惠</a>
                    </li>
                    <li className="information">
                      <a href="javascript:void(0)">账户资料</a>
                    </li>
                    <li className="address">
                      <Link to='/account/address'>收货地址</Link>
                    </li>
                    <li className="logout">
                      <a href="javascript:void(0)">退出</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <CarPanel />
          </ul>
          <ul className="nav-list">
            <li>
              <a href="javascript:void(0)">在线商城</a>
            </li>
            <li>
              <a href="javascript:void(0)">坚果 Pro</a>
            </li>
            <li>
              <a href="javascript:void(0)">Smartisan M1 / M1L</a>
            </li>
            <li>
              <a href="javascript:void(0)">Smartisan OS</a>
            </li>
            <li>
              <a href="javascript:void(0)">欢喜云</a>
            </li>
            <li>
              <a href="javascript:void(0)">应用下载</a>
            </li>
            <li>
              <a href="javascript:void(0)">官方论坛</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-sub">
        <div className="nav-sub-wrapper">
          <div className="container">
            <ul className="nav-list">
              <li>
                <a href="javascript:void(0)">首页</a>
              </li>
              <li>
                <a href="javascript:void(0)">手机</a>
              </li>
              <li>
                <a href="javascript:void(0)">“足迹系列”手感膜</a>
              </li>
              <li className="active">
                <Link to="/">官方配件</Link>
              </li>
              <li>
                <a href="javascript:void(0)">周边产品</a>
              </li>
              <li>
                <a href="javascript:void(0)">第三方配件</a>
              </li>
              <li>
                <a href="javascript:void(0)">全部商品</a>
              </li>
              <li>
                <a href="javascript:void(0)">服务</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  null
)(HeaderNav);
