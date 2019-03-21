import React from 'react';

const AddressItem = props => {
  const { receiveIndex, receiveInfo, changeIndex, closePop } = props;
  return (
    <div className="js-checkout-address-box">
      <div className="gray-box clear">
        <div className="title columns-title pre-title">
          <h2>收货信息</h2>
        </div>
        <div className="box-inner js-checkout-address-panel ">
          <div className="address-common-table js-multiple-address-panel">
            <ul className="address-item-list clear js-address-item-list">
              {receiveInfo.map((item, index) => {
                return (
                  <li
                    className={
                      receiveIndex === index
                        ? 'js-choose-address selected-address-item'
                        : 'js-choose-address'
                    }
                    key={index}
                    onClick={() => {
                      changeIndex(index);
                    }}
                  >
                    <div className="address-item">
                      <div className="name-section">{item.name}</div>
                      <div className="mobile-section">{item.phone}</div>
                      <div className="detail-section">
                        {item.province} {item.city} {item.county} <br />
                        {item.add}
                      </div>
                    </div>
                    <div className="operation-section">
                      <span className="update-btn js-edit-address">修改</span>
                      <span className="delete-btn js-delete-address">删除</span>
                    </div>
                  </li>
                );
              })}
              <li className="add-address-item js-add-address" onClick={() => {closePop(true)}}>
                <p>使用新地址</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressItem;
