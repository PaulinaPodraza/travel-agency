import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value !== id);
  }
};
class OrderOptionCheckboxes extends React.Component {
  static propTypes = {
    values: PropTypes.object,
    currentValue: PropTypes.node,
    setOptionValue: PropTypes.func,
  }
  render() {
    const { values, currentValue, setOptionValue } = this.props;
    return (
      <div className={styles.checkboxes}>
        {values.map(value => (
        <label key={value.id}>
            <input
              type='checkbox' value={value.id}
              checked={currentValue.includes(value.id)}
              onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
            />
            {values.name}({formatPrice(value.price)})
          </label>
        ))}
      </div>
    );
  }
}
export default OrderOptionCheckboxes;