import React from 'react';

const Invoice = props => {
  const { invoice, checkedInvoice, handleChangeName } = props;
  return (
    <div className="gray-box">
      <div className="title">
        <h2>发票信息</h2>
      </div>
      <div className="box-inner invoice-box js-invoice-box">
        <p className="invoice-detail"> 发票类型：电子发票 </p>
        <div className="invoice-detail">
          发票抬头：
          <div className="radio-box">
            <label>
              <input type="radio" className="hide" />
              <span
                className={
                  invoice.personal ? 'blue-radio blue-radio-on' : 'blue-radio'
                }
                onClick={() => {
                  checkedInvoice(true);
                }}
              >
                <a />
              </span>
              个人
            </label>
            <label>
              <input type="radio" className="hide" />
              <span
                className={
                  !invoice.personal ? 'blue-radio blue-radio-on' : 'blue-radio'
                }
                onClick={() => {
                  checkedInvoice(false);
                }}
              >
                <a />
              </span>
              单位
            </label>
          </div>
          {!invoice.personal && (
            <div className="module-form-row form-item fn-hide js-invoice-title">
              <div className="module-form-item-wrapper no-icon small-item">
                {!invoice.name && <i>请填写公司发票抬头</i>}
                <input
                  type="text"
                  className="js-verify"
                  value={invoice.name}
                  onChange={handleChangeName}
                />
                {!invoice.name && <div className="verify-error">必填</div>}
              </div>
            </div>
          )}
        </div>
        <p className="invoice-detail">发票内容：购买商品明细</p>
        <p className="invoice-label">
          电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。
        </p>
      </div>
    </div>
  );
};

export default Invoice;
