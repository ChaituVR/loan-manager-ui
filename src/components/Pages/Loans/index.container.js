import { connect } from 'react-redux';
import { fetchCustomers } from './index.actions';
import Customers from './index.component';

const mapStateToProps = (state, props) => {
  return {
    products: state.products.data ? state.products.data : [],
    loading: state.products.loading ? state.products.loading : false,
    ...props,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCustomers: () => dispatch(fetchCustomers),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);