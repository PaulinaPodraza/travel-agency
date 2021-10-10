import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  getOrderOptions: option => dispatch(getOrderOptions(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);