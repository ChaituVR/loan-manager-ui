import React from 'react';
import AddLoan from '../../Modules/Loans/AddNewLoan/AddLoan.component';
import LoanTable from '../../Modules/Loans/LoanTable/LoanTable.component';

class Loans extends React.Component {
  componentDidMount() {
    // this.setState({
    //   someKey: 'otherValue'
    // }); 
  }
  
  render() {
    return <div>
      <AddLoan />
      <LoanTable />
    </div>;
  }
}

export default Loans;
