import React from 'react'
import LoanCard from '../LoanCard/LoanCard'

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LoadingOutlined } from '@ant-design/icons';

const GET_LOANS = gql`
{
  getLoans {
    _id
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
      <LoanCard loanDetails={loanDetails} loading={false} key={loanDetails._id} />
    </div>
  ));
}

export default LoanTable;
