import { connect } from 'react-redux';
import RestricterPagesComponent from './component';
import * as AuthActions from '../Auth.actions';

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user ? state.auth.user : {},
    loading: state.auth.status ? false : true,
    failed: state.auth.status === 'failed' ? true : false, 
    ...props,
  };
};

const mapDispatchToProps = {
  ...AuthActions,
};

const RestricterPages = connect(mapStateToProps, mapDispatchToProps)(RestricterPagesComponent);
export default RestricterPages;