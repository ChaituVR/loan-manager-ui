import { connect } from 'react-redux';
import { fetchProducts } from './Products.actions';
import Products from './Products.component';

const mapStateToProps = (state, props) => {
  return {
    products: state.products.data ? state.products.data : [],
    loading: state.products.loading ? state.products.loading : false,
    ...props,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => dispatch(fetchProducts),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);