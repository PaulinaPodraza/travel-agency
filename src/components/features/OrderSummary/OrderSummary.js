import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderSummary/OrderSummary.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';


class OrderSummary extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
  }
  render() {
    const { tripCost, options } = this.props;
    return (
      <h2 className={styles.component}>
        Total: <strong>{formatPrice(calculateTotal( tripCost, options ))}</strong>
      </h2>
    );
  }
}

export default OrderSummary;