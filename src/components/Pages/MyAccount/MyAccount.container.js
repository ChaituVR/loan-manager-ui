import { connect } from 'react-redux';
import MyAccountComponent from './MyAccount.component';

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user ? state.auth.user : {}
  };
};

const mapDispatchToProps = {
  // Placeholder
};

const MyAccount = connect(mapStateToProps, mapDispatchToProps)(MyAccountComponent);
export default MyAccount;