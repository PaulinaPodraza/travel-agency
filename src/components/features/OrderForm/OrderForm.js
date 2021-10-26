import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import settings from '../../../data/settings';
import Button from '../../common/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};
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
        <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
      </Row>
    );
  }
}

export default OrderForm;