import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';



class OrderOptionNumber extends React.Component {
  static propTypes = {
    limits: PropTypes.object,
    currentValue: PropTypes.node,
    setOptionValue: PropTypes.func,
  }
  render() {
    const { limits, currentValue, setOptionValue } = this.props;
    return (
      <div className={styles.number}>
        <input
          type= 'number'
          className={styles.inputSmall}
          value={currentValue}
          min={limits.min}
          max={limits.max}
          onChange={event => setOptionValue(event.currentTarget.value)}>
        </input>
      </div>
    );
  }
}
export default OrderOptionNumber;