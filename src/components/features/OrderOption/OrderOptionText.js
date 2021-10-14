import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

class OrderOptionText extends React.Component {
  static propTypes = {
    currentValue: PropTypes.node,
    setOptionValue: PropTypes.func,
  }
  render() {
    const { currentValue, setOptionValue } = this.props;
      return (
        <div className={styles.component}>
          <input
            type='text'
            value={currentValue}
            onChange={event => setOptionValue(event.currentTarget.value)}
          />
        </div>
      );
  }
}

export default OrderOptionText;