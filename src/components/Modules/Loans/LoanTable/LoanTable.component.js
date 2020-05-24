import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";

import LoanCard from "../LoanCard/LoanCard";

const GET_LOANS = gql`
  {
    getLoans {
      name
      loanAmount
      paidAmount
      emi
      status
      coverImage
    }
  }
`;

const LoanTable = () => {
  const { loading, error, data } = useQuery(GET_LOANS);
  if (loading) return <LoadingOutlined />;
  if (error) return <p>Error :(</p>;

  return data.getLoans.map((loanDetails) => (
    <div>
      <LoanCard loanDetails={loanDetails} loading={false} />
    </div>
  ));
};

export default LoanTable;
// export default class LoanTable extends Component {
//   render() {
//     const loanDetails = {
//       name: 'HDFC Bank',
//       loanAmount: 1002554,
//       paidAmount: 150000,
//       emi: 16101,
//       notifications: true,
//       status: 'In Progress',
//       coverImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
//     }
//     return (
//     )
//   }
// }
