import React from 'react';
import { connect } from 'react-redux';
import { actionCreate } from '../header/store';
import PropTypes from 'prop-types';
import './index.css';

const Prompt = props => {
  const { closePrompt } = props;
  return (
    <div id="prompt">
      <div className="module-dialog-layer" style={{ display: 'block' }} />
      <div
        className="clear module-dialog module-dialog-confirm module-dialog-show"
        style={{ display: 'block', opacity: 1 }}
      >
        <div className="dialog-panel">
          <div className="topbar">
            <div className="dialog-tit clear">
              <h4 className="js-dialog-title">提示</h4>
            </div>
            <span className="dialog-close png" onClick={closePrompt} />
          </div>
          <div className="dialog-con js-dialog-container">
            <div className="confirm-msg">
              商品已达到最大可购买数量，无法继续添加
            </div>
          </div>
          <div className="dialog-btn-wrap clear">
            <div
              className="blue-main-btn normal-main-btn js-dialog-done"
              onClick={closePrompt}
            >
              <a>确定</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Dialog = props => {
  const { maxOff, closePrompt } = props;
  return maxOff ? <Prompt closePrompt={closePrompt} /> : null;
};

const mapStateToProps = state => {
  return {
    maxOff: state.getIn(['Header', 'maxOff'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closePrompt: () => {
      dispatch(actionCreate.closePrompt());
    }
  };
};

Dialog.propTypes = {
  maxOff: PropTypes.bool,
  closePrompt: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);
