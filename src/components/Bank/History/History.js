import React from 'react';
import PropTypes from 'prop-types';
import styles from './History.module.css';

const historyClass = [styles.history];

const History = ({ transactions }) => (
  <table className={historyClass}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}$</td>
          <td>{el.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default History;

History.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
