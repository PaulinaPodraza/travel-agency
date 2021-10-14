import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class OrderOptionDate extends React.Component {
  static propTypes = {
    currentValue: PropTypes.node,
    setOptionValue: PropTypes.func,
  }
  render() {
    const { currentValue, setOptionValue } = this.props;
      return (
        <div className={styles.component}>
          <DatePicker
            value={currentValue}
            selected={currentValue}
            onChange={(date) => { setOptionValue(date) }}
          />
        </div>
      );
  }
}

export default OrderOptionDate;