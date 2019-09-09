import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onCloseModalClick: PropTypes.func.isRequired,
    onCloseModalPressKey: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  state = {};

  componentDidMount() {
    const { onCloseModalPressKey } = this.props;
    window.addEventListener('keydown', onCloseModalPressKey);
  }

  componentWillUnmount() {
    const { onCloseModalPressKey } = this.props;
    window.removeEventListener('keydown', onCloseModalPressKey);
  }

  render() {
    const { onCloseModalClick, largeImg, type } = this.props;
    return (
      <div onClick={onCloseModalClick} className={s.overlay}>
        <div className={s.modal}>
          <img src={largeImg} alt={type} />
        </div>
      </div>
    );
  }
}
