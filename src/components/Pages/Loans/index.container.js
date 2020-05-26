import { connect } from 'react-redux';
import Customers from './index.component';

// const mapStateToProps = (state, props) => {
// };

// const mapDispatchToProps = (dispatch) => {
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Customers);
export default connect()(Customers);