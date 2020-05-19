import { connect } from 'react-redux';
import { fetchDashboard } from './Dashboard.actions';
import Dashboard from './Dashboard.component';

const mapStateToProps = (state, props) => {
  return {
    products: state.products.data ? state.products.data : [],
    loading: state.products.loading ? state.products.loading : false,
    ...props,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDashboard: () => dispatch(fetchDashboard),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);