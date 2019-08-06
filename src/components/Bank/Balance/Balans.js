import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balans.module.css';

const balansClasses = [styles.balans];
const greenStyle = {
  color: 'green',
};
const redStyle = {
  color: 'red',
};

const Balans = ({ balance }) => (
  <p className={balansClasses}>
    <span>
      <span style={greenStyle}>&#8593; {balance.deposite}</span>
    </span>
    <span>
      <span style={redStyle}>&darr; {balance.withdrow}</span>
    </span>
    <span>Balance: {balance.balance}$</span>
  </p>
);

export default Balans;

Balans.propTypes = {
  balance: PropTypes.number.isRequired,
};
