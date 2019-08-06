import React, { Component } from 'react';
import uniqid from 'uniqid';
import styles from './Dashboard.module.css';
import Controls from '../Controls/Controls';
import Balans from '../Balance/Balans';
import History from '../History/History';

export default class Dashboard extends Component {
  dashboardClasses = [styles.dashboard];

  state = {
    balance: 0,
    deposite: 0,
    withdrow: 0,
    transactions: [],
  };

  componentDidMount() {
    const data = localStorage.getItem('transactions');
    if (data) {
      this.setState((this.state = JSON.parse(data)));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('transactions', JSON.stringify(this.state));
  }

  save = (value, type) => {
    const id = uniqid();
    const date = Date().toLocaleString();
    const transaction = {
      id,
      type,
      amount: value,
      date,
    };
    if (type === 'deposit') {
      this.setState(prevState => ({
        balance: `${Number(prevState.balance) + Number(value)}`,
        deposite: `${Number(prevState.deposite) + Number(value)}`,
        transactions: [...prevState.transactions, transaction],
      }));
    }
    if (type === 'withdraw') {
      this.setState(prevState => ({
        balance: `${Number(prevState.balance) - Number(value)}`,
        withdrow: `${Number(prevState.withdrow) + Number(value)}`,
        transactions: [...prevState.transactions, transaction],
      }));
    }
  };

  render() {
    const { balance, transactions } = this.state;
    return (
      <div className={this.dashboardClasses}>
        <Controls save={this.save} balance={balance} />
        <Balans balance={this.state} />
        <History transactions={transactions} />
      </div>
    );
  }
}
