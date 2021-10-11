import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
  }
  render() {
    const {tripCost, options, setOrderOption} = this.props;
    return (
      <Row>
        {pricing.map(option => (
          <Col key={option.id} md={4}>
            <OrderOption currentValue={options[option.id]} setOrderOption={ setOrderOption }{...option}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} />
        </Col>
      </Row>
    );
  }
}

export default OrderForm;