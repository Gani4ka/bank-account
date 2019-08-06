import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';
import 'react-toastify/dist/ReactToastify.css';

const controlsClasses = [styles.controls];

class Controls extends Component {
  state = {
    value: '',
  };

  handlerChange = e => {
    this.setState({ value: e.target.value });
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  handlerSubmit = e => {
    if (this.state.value <= 0 || this.state.value === '') {
      this.notify2();
      return;
    }
    if (e.target.name === 'withdraw') {
      if (!this.checkBalance()) {
        this.notify();
        this.reset();
        return;
      }
    }
    this.props.save(this.state.value, e.target.name);
    this.reset();
  };

  notify = () =>
    toast('На счету недостаточно средств для проведения операции!');

  notify2 = () => toast('Введите сумму для проведения операции.');

  checkBalance = () => {
    return Number(this.props.balance) >= Number(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <form className={controlsClasses}>
        <ToastContainer position="top-center" />
        <input type="number" value={value} onChange={this.handlerChange} />
        <button name="deposit" type="button" onClick={this.handlerSubmit}>
          Deposit
        </button>
        <button name="withdraw" type="button" onClick={this.handlerSubmit}>
          Withdraw
        </button>
      </form>
    );
  }
}

export default Controls;

Controls.propTypes = {
  save: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};
