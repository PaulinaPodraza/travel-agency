/* eslint-disable react/jsx-key */
import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

class OrderOptionIcon extends React.Component {
  static propTypes = {
    values: PropTypes.object,
    required: PropTypes.node,
    currentValue: PropTypes.node,
    setOptionValue: PropTypes.func,
  }
  render() {
    const { values, required, currentValue, setOptionValue } = this.props;
    return (
      <div>
        {required && (
          <div className={styles.icon} value='' onClick={() => setOptionValue('')}>
            <Icon name="times-circle"></Icon>None
          </div>
        )}
        {values.map(value => (
          <div className={currentValue === value.id ? `${styles.iconActive} ${styles.icon}` : styles.icon}
            onClick={() => setOptionValue(value.id)}>
            <div key={value.id} value={value.id}>
              <Icon name={value.icon}></Icon>
              {value.name} ({formatPrice(value.price)})
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default OrderOptionIcon;